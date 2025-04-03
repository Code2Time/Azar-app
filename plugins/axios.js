export default function ({ $axios, store, redirect }, inject) {
	// ایجاد یک instance از axios با config دلخواه
	const api = $axios.create({
		baseURL:
			process.env.API_BASE_URL || 'https://test-api.sehregoli.com/api/v1',
		timeout: 10000,
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
		},
	})

	api.onRequest((config) => {
		// لاگ درخواست در حالت توسعه
		if (process.env.NODE_ENV === 'development') {
			console.log(`Making request to ${config.url}`)
		}
		return config
	})

	// افزودن interceptor برای پاسخ‌ها
	api.onResponse((response) => {
		// لاگ پاسخ در حالت توسعه
		if (process.env.NODE_ENV === 'development') {
			console.log(
				`Received response from ${response.config.url}`,
				response.data
			)
		}

		return response.data
	})

	// افزودن interceptor برای خطاها
	api.onError((error) => {
		const statusCode = error.response?.status

		// مدیریت خطاهای خاص
		if (statusCode === 401) {
			// اگر کاربر مجوز نداشت به صفحه لاگین هدایت شود
			redirect('/login')
		} else if (statusCode === 404) {
			// مدیریت خطای 404
			console.error('Resource not found:', error.config.url)
		} else if (statusCode >= 500) {
			// مدیریت خطاهای سرور
			console.error('Server error:', error.message)
		}

		// پرتاب خطا برای مدیریت در کامپوننت‌ها
		return Promise.reject(error)
	})

	// متدهای اصلی API
	const apiMethods = {
		// GET
		get: async (url, params = {}, config = {}) => {
			try {
				return await api.get(url, { params, ...config })
			} catch (error) {
				throw error
			}
		},

		// POST
		post: async (url, body = {}, config = {}) => {
			try {
				return await api.post(url, body, config)
			} catch (error) {
				throw error
			}
		},

		// PUT
		put: async (url, body = {}, config = {}) => {
			try {
				return await api.put(url, body, config)
			} catch (error) {
				throw error
			}
		},

		// PATCH
		patch: async (url, body = {}, config = {}) => {
			try {
				return await api.patch(url, body, config)
			} catch (error) {
				throw error
			}
		},

		// DELETE
		delete: async (url, config = {}) => {
			try {
				return await api.delete(url, config)
			} catch (error) {
				throw error
			}
		},
	}

	// تزریق api به context و this
	inject('api', apiMethods)
}

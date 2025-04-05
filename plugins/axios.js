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
		// افزودن توکن احراز هویت به هدر
		config.headers.Authorization =
			'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9yoC74kjFYn.zdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRnpt8Xl752ZYj7Aq.Prq7e0NeRefw9ekvrtfovw67Z202504KrvVe2YsFeew7Ef05108IMqSUrPrG7sHvtYVH7rrryevd5rN6DhJtj0410l1rIdf7sW7IaA2gjisfLryWqYf8VveSfqn7s35wM0HRfzEyolv4srUe'

		// لاگ درخواست در حالت توسعه
		if (process.env.NODE_ENV === 'development') {
			console.log(`Making request to ${config.url}`)
		}
		return config
	})
	api.onRequest((config) => {
		// دریافت توکن از localStorage
		const token = process.client ? localStorage.getItem('authToken') : null

		// یا دریافت توکن از vuex store
		// const token = store.state.auth.token;

		if (token) {
			config.headers.Authorization = `Bearer ${token}`
		}

		// لاگ درخواست در حالت توسعه
		if (process.env.NODE_ENV === 'development') {
			console.log(`Making request to ${config.url}`)
		}
		return config
	})

	// افزودن interceptor برای خطاها
	api.onError((error) => {
		const statusCode = error.response?.status

		// مدیریت خطاهای خاص
		if (statusCode === 401) {
			redirect('/login')
		} else if (statusCode === 404) {
			console.error('Resource not found:', error.config.url)
		} else if (statusCode >= 500) {
			console.error('Server error:', error.message)
		}

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

		// POST با body اختیاری
		post: async (url, body, config = {}) => {
			try {
				// اگر body تعریف نشده بود، پارامتر دوم به عنوان config در نظر گرفته می‌شود
				if (typeof body === 'object' && !Array.isArray(body)) {
					return await api.post(url, body, config)
				} else if (typeof body === 'undefined') {
					return await api.post(url, {}, config)
				} else {
					// حالت خاص که پارامتر دوم body نیست (برای سازگاری با حالت قدیم)
					return await api.post(url, {}, body)
				}
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

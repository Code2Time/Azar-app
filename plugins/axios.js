export default function ({ $axios }, inject) {
	$axios.setBaseURL('https://jsonplaceholder.typicode.com/')

	$axios.onRequest((config) => {
		return config
	})

	$axios.onResponse((response) => {
		return response
	})

	$axios.onError((error) => {
		const code = parseInt(error.response && error.response.status)
		if (code === 404) {
			console.error('404 - Not Found')
		}
		return Promise.reject(error)
	})

	const apiRequest = (url, config = {}, method = 'post' ,customBaseURL = null) => {
		const { params, data, headers } = config

		// تنظیم نوع درخواست
		let requestMethod = 'post' // پیش‌فرض
		if (method.toLowerCase() === 'get') {
			requestMethod = 'get'
		} else if (method.toLowerCase() === 'put') {
			requestMethod = 'put'
		} else if (method.toLowerCase() === 'delete') {
			requestMethod = 'delete'
		} else if (method.toLowerCase() === 'patch') {
			requestMethod = 'patch'
		}

		const requestConfig = {
			url,
			method: requestMethod, // استفاده از نوع درخواست بررسی‌شده
			params,
			data,
			headers,
			baseURL: customBaseURL || undefined
		}

		return $axios(requestConfig)
			.then((response) => response)
			.catch((error) => {
				console.error('API Request Error:', error)
				throw error
			})
	}

	inject('axios', $axios)
	inject('apiRequest', apiRequest)
}

export default function ({ $axios }, inject) {
	const apiRequest = async (url, config = {}, method = 'get', customBaseURL = null) => {
	  try {
		const requestConfig = {
		  url,
		  method: method.toLowerCase(),
		  ...config,
		  baseURL: customBaseURL || 'https://randomuser.me/api/'
		}
  
		const response = await $axios(requestConfig)
		return response.data || {}
	  } catch (error) {
		console.error('API Request Error:', error)
		throw error
	  }
	}
  
	inject('apiRequest', apiRequest)
  }
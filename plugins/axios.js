// this plugin just for test axios !!
export default function ({ $axios }, inject) {
    $axios.setBaseURL('bace url')
  
    $axios.onRequest(config => {
      console.log('Making request to ' + config.url)
      return config
    })
  
    $axios.onResponse(response => {
      console.log('Received response from ' + response.config.url)
      return response
    })
  
    $axios.onError(error => {
      const code = parseInt(error.response && error.response.status)
      if (code === 404) {
        console.error('404 - Not Found')
      }
      return Promise.reject(error)
    })
  
  
    inject('axios', $axios)
  }
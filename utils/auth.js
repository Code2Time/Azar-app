export function isAuthenticated() {
	if (process.client) {
		return !!localStorage.getItem('authToken') 
	}
}

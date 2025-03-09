<template>
	<Button :value="buttonText" @click="handleAuth" />
</template>

<script>
import { isAuthenticated } from '~/utils/auth'
import Button from '../Common/Button.vue'

export default {
	components: {
		Button,
	},
	data() {
		return {
			isLoggedIn: isAuthenticated(),
		}
	},
	computed: {
		buttonText() {
			return this.isLoggedIn ? this.$i18n.t('Headers.Logout') : this.$i18n.t('Headers.Login') 
		},
		mounted() {
			// وضعیت لاگین فقط در سمت کلاینت بررسی شود
			if (process.client) {
				this.isLoggedIn = isAuthenticated()
			}
		},
	},
	methods: {
		handleAuth() {
			if (this.isLoggedIn) {
				localStorage.removeItem('authToken')
				this.isLoggedIn = false
				this.$router.push('/login')
			} else {
				this.$router.push('/login')
			}
		},
	},
}
</script>

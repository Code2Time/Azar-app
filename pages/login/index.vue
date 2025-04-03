<template>
	<div class="custome-size d-flex justify-center align-center">
		<LoginForm />
	</div>
</template>

<script>
// import Component
import LoginForm from '~/components/Feature/LoginForm.vue'

export default {
	name: 'LoginPage',
	layout: 'login',
	components: {
		LoginForm,
	},
	mounted() {
		this.$toast.info(this.$t('HomePage.User_Pass'), {
			position: 'bottom',
			duration: 5000,
		})
	},
}
</script>

<style scoped>
.custome-size {
	background-color: transparent;
	width: 100%;
	height: 100vh;
}
</style>

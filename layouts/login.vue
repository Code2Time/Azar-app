<template>
	<v-app :dir="isRTL ? 'rtl' : 'ltr'">
		<Navbar />
		<div class="Login_Layout">
			<Nuxt />
		</div>
		<Footer />
	</v-app>
</template>

<script>
// import Components

import Navbar from '~/components/Common/Navbar.vue'
import Footer from '~/components/Common/Footer.vue'

export default {
	name: 'LoginLayout',
	components: {
		Navbar,
		Footer,
	},
	computed: {
		isRTL() {
			return this.$i18n.locale === 'fa'
		},
	},
}
</script>

<style scoped>
.Login_Layout {
	width: 100%;
	height: 100vh;
	background-image: url('~/static/login_bg.jpg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
}
</style>

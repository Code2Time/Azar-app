<template>
	<v-app :dir="isRTL ? 'rtl' : 'ltr'">
		<Navbar />
		<Nuxt />
		<Footer />
	</v-app>
</template>

<script>
// import Components

import Navbar from '~/components/Common/Navbar.vue'
import Footer from '~/components/Common/Footer.vue'

export default {
	name: 'DefaultLayout',
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
/* transition */

.slide-enter-active,
.slide-leave-active {
	transition: transform 0.5s ease;
}
.slide-enter,
.slide-leave-to {
	transform: translateX(100%);
}
</style>

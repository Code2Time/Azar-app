<template>
	<v-app light>
		<Navbar />
		<Nuxt />
		<Footer />
	</v-app>
</template>

<script>
export default {
	name: 'DefaultLayout',
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

<template>
	<v-app>
		<Navbar />
		<div class="Login_Layout">
			<Nuxt />
		</div>
		<Footer />
	</v-app>
</template>
<script>
export default {
	name: 'LoginLayout',
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

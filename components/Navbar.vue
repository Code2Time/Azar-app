<!-- create a basic Navbar  -->
<template>
	<v-app-bar class="blue darken-4">
		<div class="nav-container d-flex justify-space-around align-center">
			<div class="nav-item">
				<div class="d-flex align-center">
					<div class="mx-2">
						<nuxt-link class="link white--text poppins-2" to="/"
							>Home</nuxt-link
						>
					</div>
					<div class="mx-2">
						<nuxt-link class="link white--text poppins-2" to="/login"
							>Login</nuxt-link
						>
					</div>
				</div>
			</div>
			<div class="nav-item">
				<v-avatar>
					<img class="hover" src="@/static/logo.png" alt="logo" />
				</v-avatar>
			</div>
		</div>
	</v-app-bar>
</template>

<script>
export default {
	data() {
		return {}
	},
}
</script>

<style scoped>
.nav-container {
	width: 100%;
	height: 100%;
}
</style>

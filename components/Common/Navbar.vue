<!-- create a basic Navbar  -->
<template>
	<v-app-bar class="grey darken-4">
		<div class="nav-container d-flex justify-space-around align-center">
			<div class="nav-item">
				<div class="d-flex align-center">
					<div class="mx-2">
						<nuxt-link class="link white--text poppins-2" to="/" exact>
							<v-icon color="white">mdi-home</v-icon>
							<span>Home</span>
						</nuxt-link>
					</div>
					<div class="mx-2">
						<nuxt-link class="link white--text poppins-2" to="/login" exact>
							<v-icon color="white">mdi-account</v-icon>
							<span>Login</span>
						</nuxt-link>
					</div>
				</div>
			</div>
			<div class="nav-item">
				<v-avatar size="30">
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

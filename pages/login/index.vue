<template>
	<v-app class="custome-size">
		<div class="custome-size d-flex justify-center align-center">
			<LoginForm />
		</div>
	</v-app>
</template>

<script>
export default {
	name: 'LoginPage',
	layout: 'login',
}
</script>

<style scoped>
.custome-size {
	background-color: transparent;
	width: 100%;
	height: 100vh;
}
</style>

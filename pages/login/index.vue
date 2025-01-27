<template>
	<v-app class="custome-size">
		<div class="custome-size d-flex justify-center align-center">
			<LoginForm />
		</div>
	</v-app>
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
}
</script>



<style scoped>
.custome-size {
	background-color: transparent;
	width: 100%;
	height: 100vh;
}
</style>

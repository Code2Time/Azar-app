<template>
	<v-app>
		<div class="d-flex flex-column justify-center align-center custome-size">
			<h1>Home Page !</h1>
			<h3 class="poppins-2">ther is noting for show yet</h3>
		</div>
	</v-app>
</template>

<script>
import Input from '~/components/Common/Input.vue'
export default {
	name: 'IndexPage',

	components: {
		Input,
	},
	methods: {
		getInputValue(data) {
			this.inputData = data
		},
	}
}
</script>

<style scoped>
.custome-size {
	width: 100%;
	height: 70%;
}
</style>

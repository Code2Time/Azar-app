<template>
	<v-app>
		<div class="d-flex flex-column justify-center align-center custome-size">
			<h1 class="myblue">
				Home Page !
				<span> this color is a test </span>
			</h1>
			<h3 class="poppins-2">ther is noting for show yet</h3>
		</div>
	</v-app>
</template>

<script>
export default {
	name: 'IndexPage',
	methods: {
		getInputValue(data) {
			this.inputData = data
		},
	},
}
</script>

<style scoped>
.custome-size {
	width: 100%;
	height: 70%;
}
</style>

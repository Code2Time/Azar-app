<template>
	<div class="main-container">
		<div class="select-container">
			<Select
				danse
				outlined
				label="Select an option"
				:items="options"
				v-model="selected_value"
			/>
		</div>
	</div>
</template>
<script>
// import component
import Select from '~/components/Common/Select.vue'
export default {
	name: 'SelectPage',
	components: {
		Select,
	},
	data() {
		return {
			options: [
				{ text: 'option1', value: 1 },
				{ text: 'option2', value: 2 },
				{ text: 'option3', value: 3 },
				{ text: 'option4', value: 4 },
			],
			selected_value: '',
		}
	},
}
</script>
<style>
.main-container {
	width: 100%;
	height: 90vh;
}
.select-container {
	width: 50%;
	height: 50%;
	margin: 50px auto;
}
</style>

<template>
	<div class="main-container">
		<div class="select-container d-flex flex-column">
			<Select
				danse
				outlined
				label="Select an option"
				:items="options"
				v-model="selected_value1"
			/>
			<Autocompletes
				:items="options"
				label="search for a option"
				v-model="selected_value2"
				outlined
				dense
			/>
		</div>
	</div>
</template>
<script>
// import component
import Select from '~/components/Common/Select.vue'
import Autocompletes from '~/components/Common/Autocomplate.vue'
export default {
	name: 'SelectPage',
	components: {
		Select,
		Autocompletes,
	},
	data() {
		return {
			options: [
				{ text: 'option1', value: 1 },
				{ text: 'option2', value: 2 },
				{ text: 'option3', value: 3 },
				{ text: 'option4', value: 4 },
			],

			selected_value1: '',
			selected_value1: '',
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

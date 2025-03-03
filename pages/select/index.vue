<template>
	<div class="main-container">
		<div class="select-container">
			<Select :fullWidth="false" label="Select an option" />
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
	border: 1px solid rgba(255, 0, 0, 0.323);
	margin: 50px auto;
}
</style>

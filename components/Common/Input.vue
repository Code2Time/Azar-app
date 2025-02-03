<template>
	<v-text-field
		:label="label"
		:type="type"
		:append-icon="appendIcon"
		:color="color"
		:dark="dark"
		v-model="inputValue"
		@keypress="updateValue"
	>
	</v-text-field>
</template>

<script>
export default {
	// prop validation
	props: {
		label: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			default: 'text',
		},
		appendIcon: {
			type: String,
		},
		color: {
			type: String,
			default: 'primary',
		},
		dark: {
			type: Boolean,
			default: true,
		},
	},
	// data
	data() {
		return {
			inputValue: '',
		}
	},
	// keypress event
	methods: {
		updateValue() {
			this.$emit('GetInputValue', this.inputValue)
		},
	},
}
</script>
<style></style>

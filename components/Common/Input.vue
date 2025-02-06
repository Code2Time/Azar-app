<template>
	<v-text-field
		:label="label"
		:type="type"
		:append-icon="appendIcon"
		:color="color"
		:dark="dark"
		v-model="input_value"
		@input="updateValue"
		@click:append="togglePasswordVisibility"
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
		showPassword: {
			type: Boolean,
			default: false,
		},
	},
	// data
	data() {
		return {
			input_value: '',
		}
	},
	// keypress event
	methods: {
		updateValue() {
			this.$emit('GetInputValue', this.input_value)
		},
		clearInput() {
			this.input_value = ''
			this.$emit('InputCleared')
		},
		togglePasswordVisibility() {
			this.$emit('update:showPassword', !this.showPassword)
		},
	},
}
</script>

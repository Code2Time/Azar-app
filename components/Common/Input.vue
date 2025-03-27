<template>
	<v-text-field
		@click:append="togglePasswordVisibility"
		@keypress.enter="handleEnter"
		:style="{ Color: customColor }"
		:background-color="backgroundColor"
		:validate-on-blur="validateOnBlur"
		:persistent-hint="persistentHint"
		:append-icon="computedAppendIcon"
		:prepend-icon="prependIcon"
		:hide-details="hideDetails"
		:placeholder="placeholder"
		:single-line="singleLine"
		:clear-icon="clearIcon"
		:clearable="clearable"
		:autofocus="autofocus"
		v-model="input_value"
		:outlined="outlined"
		:disabled="disabled"
		:readonly="readonly"
		:counter="counter"
		:loading="loading"
		:rounded="rounded"
		:reverse="reverse"
		:type="inputType"
		:suffix="suffix"
		:prefix="prefix"
		:label="label"
		:color="color"
		:dense="dense"
		:rules="processedRules"
		:value="value"
		:dark="dark"
		:solo="solo"
		:hint="hint"
		:flat="flat"
	>
	</v-text-field>
</template>

<script>
export default {
	// prop validation
	props: {
		// rules for input validate
		rules: {
			type: String,
		},
		customColor: {
			type: String,
			default: 'primary',
		},
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
		placeholder: {
			type: String,
		},
		outlined: {
			type: Boolean,
			default: false,
		},
		//Changes the style of the input
		solo: {
			type: Boolean,
			default: false,
		},
		//Reduces the input height

		dense: {
			type: Boolean,
			default: false,
		},
		disabled: {
			type: Boolean,
			dafault: false,
		},
		readonly: {
			type: Boolean,
			dafault: false,
		},
		prependIcon: {
			type: String,
		},
		clearable: {
			type: Boolean,
			default: false,
		},
		counter: {
			type: Boolean,
			default: false,
		},
		// hint text
		hint: {
			type: String,
		},
		//Forces hint to always be visible
		persistentHint: {
			type: Boolean,
			default: false,
		},
		// error: {
		// 	type: Boolean,
		// 	default: false,
		// },
		// errorMessages: {
		// 	type: String,
		// },
		// success: {
		// 	type: Boolean,
		// },
		// successMessages: {
		// 	type: String,
		// 	default : 'good lock'
		// },
		backgroundColor: {
			type: String,
		},
		autofocus: {
			type: Boolean,
			default: false,
		},
		hideDetails: {
			type: Boolean,
			default: false,
		},
		loading: {
			type: Boolean,
			default: false,
		},

		//Displays prefix text
		prefix: {
			type: String,
		},
		suffix: {
			type: String,
		},
		validateOnBlur: {
			type: Boolean,
			default: false,
		},
		rounded: {
			type: Boolean,
			default: false,
		},
		singleLine: {
			type: Boolean,
			default: false,
		},
		// Removes elevation (shadow) added to element when using the solo or solo-inverted props
		flat: {
			type: Boolean,
			default: false,
		},
		reverse: {
			type: Boolean,
			default: false,
		},

		clearIcon: {
			type: String,
		},
		value: {
			type: [String, Number],
			required: true,
		},
	},
	// data
	data() {
		return {
			input_value: this.value,
			show_password: false,
		}
	},
	watch: {
		input_value(new_value) {
			this.$emit('input', new_value)
		},
		value(new_value) {
			this.input_value = new_value
		},
		rule(new_rule) {
			this.rule = new_rule
		},
	},
	methods: {
		togglePasswordVisibility() {
			this.show_password = !this.show_password
		},
		handleEnter(event) {
			this.$emit('enter', event)
		},
	},
	computed: {
		computedAppendIcon() {
			if (this.type === 'password') {
				return this.show_password ? 'mdi-eye-off' : 'mdi-eye'
			}
			return this.appendIcon
		},
		inputType() {
			if (this.type === 'password') {
				return this.show_password ? 'text' : 'password'
			}
			return this.type
		},
		processedRules() {
			if (!this.rules) return []
			const rulesArray = this.rules.split(',').map((rule) => rule.trim())

			return rulesArray.map((rule) => {
				return this.$validationRules[rule] || (() => true)
			})
		},
	},
}
</script>

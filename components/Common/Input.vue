<template>
	<v-text-field
		:rules="rules"
		:label="label"
		:type="type"
		:append-icon="appendIcon"
		:color="color"
		:dark="dark"
		:placeholder="placeholder"
		:outlined="outlined"
		:filled="filled"
		:solo="solo"
		:dense="dense"
		:disabled="disabled"
		:readonly="readonly"
		:clearable="clearable"
		:counter="counter"
		:hint="hint"
		:persistent-hint="persistentHint"
		:error="error"
		:error-messages="errorMessages"
		:success="success"
		:success-messages="successMessages"
		:background-color="backgroundColor"
		:hide-details="hideDetails"
		:autofocus="autofocus"
		:loading="loading"
		:prefix="prefix"
		:suffix="suffix"
		:validate-on-blur="validateOnBlur"
		:rounded="rounded"
		:prepend-icon="prependIcon"
		:shaped="shaped"
		:single-line="singleLine"
		:flat="flat"
		:reverse="reverse"
		:clear-icon="clearIcon"
		:value="value"
		v-model="input_value"
		@click:append="togglePasswordVisibility"
	>
	</v-text-field>
</template>

<script>
export default {
	// prop validation
	props: {
		rules : {
			type : Array
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
		showPassword: {
			type: Boolean,
			default: false,
		},
		placeholder: {
			type: String,
		},
		outlined: {
			type: Boolean,
			dafault: true,
		},
		filled: {
			type: Boolean,
			dafault: false,
		},
		solo: {
			type: Boolean,
			default: false,
		},
		dense: {
			type: Boolean,
			default: false,
		},
		disabled :{
			type : Boolean,
			dafault : false
		},
		readonly:{
			type : Boolean ,
			dafault : false
		},
		prependIcon :{
			type : String,
		},
		clearable :{
			type : Boolean,
			default : false
		},
		counter :{
			type : Boolean,
			default : false
		},
		hint :{
			type : String,
		},
		persistentHint : {
		 type : Boolean,
		 default : false
		},
		error : {
			type : Boolean,
			default : false
		},
		errorMessages :{
			type : String , 
		},
		success : {
			type : Boolean,
			default : false
		},
		successMessages :  {
			type : String
		},
		backgroundColor :{
			type : String,
		},
		autofocus :{
			type : Boolean,
			default : false
		},
		hideDetails :{
			type : Boolean,
			default : false
		},
		loading : {
			type : Boolean,
			default : false
		},
		prefix :{
			type : String,
		},
		suffix :{
			type : String

		},
		validateOnBlur:{
			type : Boolean,
			default : false
		},
		rounded :{
			type : Boolean,
			default : false
		},
		shaped :{
			type : Boolean,
			default : true
		},
		singleLine : {
			type : Boolean,
			default : false
		},
		flat : {
			type : Boolean,
			default : false
		},
		reverse : {
			type : Boolean,
			default : false
		},
		
		clearIcon : {
			type : String
		},
		value: {
			type : String || Number
		}

	},
	// data
	data() {
		return {
			input_value: '',
		}
	},
	// keypress event
	methods: {
		clearInput() {
			this.input_value = ''
			this.$emit('InputCleared')
		},
		togglePasswordVisibility() {
			this.$emit('update:showPassword', !this.showPassword)
		},
	},
	watch : {
		inputs(){
			console.log(this.input_value)
		}
	}
}
</script>

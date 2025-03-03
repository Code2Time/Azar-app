<template>
	<v-select
		:persistent-placeholder="persistentPlaceholder"
		:prepend-inner-icon="prependInnerIcon"
		:append-outer-icon="appendOuterIcon"
		:background-color="backgroundColor"
		:success-messages="successMessages"
		:validate-on-blur="validateOnBlur"
		:persistent-hint="persistentHint"
		:deletable-chips="deletableChips"
		:disable-lookup="disableLookup"
		:error-messages="errorMessages"
		:item-disabled="itemDisabled"
		:hide-selected="hideSelected"
		:return-object="returnObject"
		:loader-height="loaderHeight"
		:solo-inverted="soloInverted"
		:open-on-clear="openOnClear"
		:hide-details="hideDetails"
		:prepend-icon="prependIcon"
		:placeholder="placeholder"
		:no-data-text="noDataText"
		:cache-items="cacheItems"
		:small-chips="smallChips"
		:single-line="singleLine"
		:error-count="errorCount"
		:append-icon="appendIcon"
		:item-color="itemColor"
		:clear-icon="clearIcon"
		:full-width="fullWidth"
		:menu-props="menuProps"
		:item-value="itemValue"
		:autofocus="autofocus"
		:clearable="clearable"
		:item-text="itemText"
		:multiple="multiple"
		:class="customClass"
		:readonly="readonly"
		:disabled="disabled"
		:messages="messages"
		:outlined="outlined"
		:reverse="reverse"
		:loading="loading"
		:counter="counter"
		:success="success"
		:rounded="rounded"
		v-on="$listeners"
		:prefix="prefix"
		:shaped="shaped"
		:attach="attach"
		:filled="filled"
		:height="height"
		:suffix="suffix"
		v-bind="$attrs"
		:light="light"
		:eager="eager"
		:chips="chips"
		:dense="dense"
		:danse="danse"
		:error="error"
		:color="color"
		:label="label"
		:items="items"
		:value="value"
		:rules="rules"
		:hint="hint"
		:dark="dark"
		:solo="solo"
		:flat="flat"
		:id="id"
	></v-select>
</template>

<script>
export default {
	name: 'Select',
	props: {
		items: {
			type: Array,
			required: true,
			validator: (value) => Array.isArray(value) && value.length > 0,
		},
		label: {
			type: String,
			default: '',
		},
		value: {
			type: [String, Number, Array, Object],
			default: '',
		},
		rules: {
			type: Array,
			default: () => [],
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		eager: {
			type: Boolean,
		},
		readonly: {
			type: Boolean,
		},
		soloInverted: {
			type: Boolean,
		},
		singleLine: {
			type: Boolean,
		},
		disableLookup: {
			type: Boolean,
		},
		persistentPlaceholder: {
			type: Boolean,
		},
		errorCount: {
			type: [Number || String],
		},
		placeholder: {
			type: String,
		},
		suffix: {
			type: String,
		},
		smallChips: {
			type: Boolean,
		},
		fullWidth: {
			type: Boolean,
		},
		validateOnBlur: {
			type: Boolean,
		},
		light: {
			typr: Boolean,
		},
		danse: {
			type: Boolean,
		},
		deletableChips: {
			type: Boolean,
		},
		id: {
			type: String,
		},
		itemColor: {
			type: String,
		},
		reverse: {
			type: Boolean,
		},
		dark: {
			type: Boolean,
		},
		prefix: {
			typr: String,
		},
		prependInnerIcon: {
			type: String,
		},
		counter: {
			type: [Boolean || Number || String],
		},
		loaderHeight: {
			type: [Number || String],
		},
		itemDisabled: {
			type: [String || Array || Function],
		},
		clearIcon: {
			typr: String,
		},
		attach: {
			type: [String || Number || Object || Array],
		},
		appendOuterIcon: {
			type: String,
		},
		height: {
			type: [Number || String],
		},
		loading: {
			type: Boolean,
			default: false,
		},
		multiple: {
			type: Boolean,
			default: false,
		},
		chipped: {
			type: Boolean,
			default: false,
		},
		clearable: {
			type: Boolean,
			default: false,
		},
		error: {
			type: Boolean,
		},
		dense: {
			type: Boolean,
			default: false,
		},
		outlined: {
			type: Boolean,
			default: false,
		},
		solo: {
			type: Boolean,
			default: false,
		},
		flat: {
			type: Boolean,
			default: false,
		},
		rounded: {
			type: Boolean,
			default: false,
		},
		shaped: {
			type: Boolean,
			default: false,
		},
		filled: {
			type: Boolean,
			default: false,
		},
		persistentHint: {
			type: Boolean,
			default: false,
		},
		hint: {
			type: String,
		},
		errorMessages: {
			type: [String, Array],
		},
		success: {
			type: Boolean,
		},
		successMessages: {
			type: [String, Array],
		},
		messages: {
			type: [String, Array],
		},
		appendIcon: {
			type: String,
		},
		prependIcon: {
			type: String,
		},
		menuProps: {
			type: Object,
			default: () => ({}),
		},
		returnObject: {
			type: Boolean,
			default: false,
		},
		itemText: {
			type: String,
			default: 'text',
		},
		itemValue: {
			type: String,
			default: 'value',
		},
		cacheItems: {
			type: Boolean,
			default: false,
		},
		autofocus: {
			type: Boolean,
			default: false,
		},
		noDataText: {
			type: String,
			default: 'No data available',
		},
		openOnClear: {
			type: Boolean,
			default: false,
		},
		hideDetails: {
			type: Boolean,
			default: false,
		},
		hideSelected: {
			type: Boolean,
		},
		color: {
			type: String,
			default: 'primary',
		},
		backgroundColor: {
			type: String,
		},
		customClass: {
			type: String,
		},
	},
}
</script>

<style scoped></style>

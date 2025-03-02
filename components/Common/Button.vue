<template>
	<v-btn
		:exact-active-class="exactActiveClass"
		:active-class="activeClass"
		:input-value="inputValue"
		:min-height="minHeight"
		:max-height="maxHeight"
		:exact-path="exactPath"
		:elevation="elevation"
		:depressed="depressed"
		:max-width="maxWidth"
		:min-width="minWidth"
		:absolute="absolute"
		:disabled="disabled"
		:outlined="outlined"
		@click="handleClick"
		:rounded="rounded"
		:loading="loading"
		:x-large="Xlarge"
		:x-small="Xsmall"
		:ripple="ripple"
		:bottom="bottom"
		:append="append"
		:height="height"
		:block="block"
		:large="large"
		:small="small"
		:light="light"
		:color="color"
		:plain="plain"
		:exact="exact"
		:width="width"
		:value="value"
		:fixed="fixed"
		:right="right"
		:icon="icon"
		:text="text"
		:type="type"
		:dark="dark"
		:href="href"
		:nuxt="nuxt"
		:link="link"
		:left="left"
		:fab="fab"
		:to="to"
	>
		{{ value }}
	</v-btn>
</template>
<script>
export default {
	name: 'customButton',
	props: {
		color: {
			type: String,
			default: 'primary',
		},
		disabled: {
			type: Boolean,
		},
		outlined: {
			type: Boolean,
			default: true,
		},
		text: {
			type: Boolean,
		},
		rounded: {
			type: Boolean,
		},
		icon: {
			type: Boolean,
		},
		loading: {
			type: Boolean,
		},
		block: {
			type: Boolean,
		},
		depressed: {
			// show button without any shadow
			type: Boolean,
		},
		fab: {
			type: Boolean,
		},
		large: {
			type: Boolean,
		},
		small: {
			type: Boolean,
		},
		Xlarge: {
			type: Boolean,
		},
		Xsmall: {
			type: Boolean,
		},
		to: {
			type: [String || Object],
		},
		href: {
			type: [String || Object],
		},
		dark: {
			type: Boolean,
		},
		light: {
			type: Boolean,
		},
		elevation: {
			type: [Number || String],
		},
		ripple: {
			//(ripple effect
			type: [Boolean, Object],
		},
		type: {
			type: String,
		},
		width: {
			type: String,
		},
		minWidth: {
			type: String,
		},
		maxWidth: {
			type: String,
		},
		height: {
			type: String,
		},
		minHeight: {
			type: String,
		},
		maxHeight: {
			type: String,
		},
		value: {
			type: [String || Number],
		},
		activeClass: {
			type: String,
		},
		exact: {
			type: Boolean,
		},
		exactActiveClass: {
			type: String,
		},
		exactPath: {
			type: Boolean,
		},
		absolute: {
			type: Boolean,
		},
		append: {
			// append link
			type: Boolean,
		},
		bottom: {
			type: Boolean,
		},
		fixed: {
			type: Boolean,
		},
		inputValue: {
			type: [String || Number || Object || Array],
		},
		left: {
			type: Boolean,
		},
		right: {
			type: Boolean,
		},
		link: {
			type: Boolean,
		},
		nuxt: {
			// use vue router || use Spa
			type: Boolean,
		},
		plain: {
			// remove background color in hover
			type: Boolean,
		},
	},
	methods: {
		handleClick() {
			this.$emit('click')
		},
	},
}
</script>


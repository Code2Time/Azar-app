<template>
	<v-btn
		:color="color"
		:disabled="disabled"
		:outlined="outlined"
		:text="text"
		:rounded="rounded"
		:icon="icon"
		:loading="loading"
		:block="block"
		:depressed="depressed"
		:fab="fab"
        :large="large"
        :small="small"
        :x-large="Xlarge"
        :x-small="Xsmall"
        :to="to"
        :href="href"
        :dark="dark"
        :light="light"
        :elevation="elevation"
        :ripple="ripple"
        :type="type"
        :width="width"
        :max-width="maxWidth"
        :min-width="minWidth"
        :height="height"
        :max-height="maxHeight"
        :min-height="minHeight"
        :value="value"
        :active-class="activeClass"
        :exact="exact"
        :exact-active-class="exactActiveClass"
        :exact-path="exactPath"
        :absolute="absolute"
        :append="append"
        :bottom="bottom"
        :fixed="fixed"
        :input-value="inputValue"
        :left="left"
        :right="right"
        :link="link"
        :nuxt="nuxt"
        :plain="plain"
	>
		{{value}}
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
            default : true
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
        large : {
            type : Boolean
        },
        small : {
            type : Boolean
        },
        Xlarge : {
            type : Boolean
        },
        Xsmall : {
            type : Boolean
        },
        to :{
            type : [String || Object]
        } ,
         href :{
            type : [String || Object]
        },
        dark :{
            type : Boolean
        },
        light :{
            type : Boolean
        },
        elevation :{
            type : [Number || String]
        },
        ripple :{     //(ripple effect
            type : [Boolean , Object],
        },
        type : {
            type : String
        },
        with :{
            type : String
        },
        minWidth :{
            type : String
        },
        maxWidth :{
            type : String
        },
        height :{
            type : String
        },
        minHeight :{
            type : String
        },
        maxHeight :{
            type : String
        },
        value :{
            type : [String || Number]
        },
        activeClass : {
            type : String
        },
        exact : {
            type : Boolean
        },
        exactActiveClass :{
            type : String
        },
        exactPath : {
            type : Boolean
        },
        absolute :{
            type : Boolean
        },
        append :{    // append link
            type : Boolean
        },
        bottom :{  
            type : Boolean
        },
        fixed : {
            type  : Boolean
        },
        inputValue : {
            type : [String || Number || Object || Array]
        },
        left :{
            type : Boolean
        },
        right :{
            type : Boolean
        },
        link :{
            type : Boolean
        },
        nuxt : {   // use vue router || use Spa
            type : Boolean
        },
        plain : {  // remove background color in hover
            type  : Boolean,
        },

	},
}
</script>
<style></style>

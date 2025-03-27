<template>
	<div class="text-center">
		<v-menu offset-y v-bind="$attrs" v-on="$listeners">
			<template v-slot:activator="{ on, attrs }">
				<v-btn
					:color="Color"
					dark
					v-bind="{ ...attrs, ...activatorProps }"
					v-on="on"
				>
					{{ activatorText }}
				</v-btn>
			</template>
			<v-list>
				<v-list-item
					v-for="(item, index) in items"
					:key="index"
					@click="navigateTo(item)"
				>
					<v-list-item-title>{{ item.title }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
	</div>
</template>

<script>
export default {
	props: {
        Color :{
            type : String,
            default : 'transparent'
        },
		items: {
			type: Array,
			required: true,
			validator: (value) =>
				value.every(
					(item) => typeof item.title !== 'undefined' && (item.to || item.route)
				),
		},
		activatorText: {
			type: String,
			default: 'Dropdown',
		},
		activatorProps: {
			type: Object,
			default: () => ({}),
		},
	},
	methods: {
		navigateTo(item) {
			if (item.to) {
				this.$router.push(item.to)
			}
			this.$emit('item-click', item)
		},
	},
}
</script>

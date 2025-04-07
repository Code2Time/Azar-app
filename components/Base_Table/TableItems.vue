<template>
	<v-data-table
		:headers="headers"
		:items="items"
		:loading="loading"
		hide-default-footer
		disable-pagination
	>
		<template #[`item.avatar`]="{ item }">
			<v-avatar size="36">
				<img :src="item.avatar" :alt="item.name" />
			</v-avatar>
		</template>
	</v-data-table>
</template>

<script>
export default {
	name: 'TableItems',
	props: {
		headers: {
			type: Array,
			required: true,
		},
		items: {
			type: Array,
			required: true,
		},
		loading: {
			type: Boolean,
			default: false,
		},
	},
}
</script>

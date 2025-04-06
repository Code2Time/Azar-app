<template>
	<v-card-actions>
		<v-spacer />
		<Pagination
			:value="page"
			:total-items="totalItems"
			:items-per-page="itemsPerPage"
			@input="handlePageChange"
		/>
		<v-spacer />
	</v-card-actions>
</template>

<script>
import Pagination from '~/components/Feature/Pagination.vue'

export default {
	name: 'TableFooter',
	components: {
		Pagination,
	},
	props: {
		page: {
			type: Number,
			required: true,
		},
		totalItems: {
			type: Number,
			required: true,
		},
		itemsPerPage: {
			type: Number,
			required: true,
		},
	},
	methods: {
		handlePageChange(page) {
			this.$emit('update:page', page)
		},
	},
}
</script>

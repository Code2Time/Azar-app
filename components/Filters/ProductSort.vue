<template>
	<div class="select-container">
		<Select
			class="mt-5 text-caption"
			dir="ltr"
			v-model="sortBy"
			:items="sortOptions"
			label="Sort by "
			color="primary"
			outlined
			dense
			@change="updateSort"
		/>
	</div>
</template>

<script>
import Select from '~/components/Common/Select.vue'

export default {
	components: {
		Select,
	},
	data() {
		return {
			sortOptions: [
				{ text: 'newest', value: 'newest' },
				{ text: 'oldest', value: 'oldest' },
			],
			searchQuery: '',
			sortBy: 'newest',
		}
	},
	mounted() {
		const filters = this.$store.getters['filters/activeFilters']
		this.searchQuery = filters.searchQuery
		this.sortBy = filters.sortBy
	},
	methods: {
		updateSearch() {
			this.$store.dispatch('filters/updateSearchQuery', this.searchQuery)
		},
		updateSort() {
			this.$store.dispatch('filters/updateSortBy', this.sortBy)
		},
	},
}
</script>

<style scoped>
.select-container{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 70px;
}
</style>

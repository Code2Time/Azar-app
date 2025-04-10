<template>
	<div class="select-container">
		<Select
			style="width: 100px; min-width: 100px; margin-top: 20px"
			:items="sortOptions"
			@change="updateSort"
			v-model="sortBy"
			label="Sort by "
			color="primary"
			dir="ltr"
			outlined
			dense
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
.select-container {
  display: flex;
  justify-content: center; /* وسط چین افقی */
  align-items: center; /* وسط چین عمودی (اختیاری) */
  width: 100%;
}
</style>
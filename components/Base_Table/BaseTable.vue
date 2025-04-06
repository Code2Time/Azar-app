<template>
	<v-card>
		<table-header
			:headers="headers"
			:search-values="searchValues"
			@update:search="updateSearch"
		/>
		<table-items
			:items="paginatedItems"
			:headers="headers"
			:loading="loading"
		/>
		<table-footer
			:page="pagination.page"
			:total-items="filteredItems.length"
			:items-per-page="pagination.itemsPerPage"
			@update:page="updatePage"
		/>
	</v-card>
</template>

<script>
import TableHeader from './TableHeader.vue'
import TableItems from './TableItems.vue'
import TableFooter from './TableFooter.vue'

export default {
	name: 'BaseTable',
	components: {
		TableHeader,
		TableItems,
		TableFooter,
	},
	props: {
		headers: {
			type: Array,
			required: true,
			validator: (value) => {
				return value.every(
					(header) =>
						typeof header.text === 'string' &&
						typeof header.value === 'string' &&
						typeof header.searchable === 'boolean'
				)
			},
		},
		items: {
			type: Array,
			required: true,
		},
		loading: {
			type: Boolean,
			default: false,
		},
		initialPagination: {
			type: Object,
			default: () => ({
				page: 1,
				itemsPerPage: 10,
			}),
		},
	},
	data() {
		return {
			searchValues: {},
			pagination: {
				page: this.initialPagination.page,
				itemsPerPage: this.initialPagination.itemsPerPage,
			},
		}
	},
	computed: {
		filteredItems() {
			return this.items.filter((item) => {
				return Object.keys(this.searchValues).every((key) => {
					if (!this.searchValues[key]) return true
					return String(item[key])
						.toLowerCase()
						.includes(this.searchValues[key].toLowerCase())
				})
			})
		},
		paginatedItems() {
			const start = (this.pagination.page - 1) * this.pagination.itemsPerPage
			const end = start + this.pagination.itemsPerPage
			return this.filteredItems.slice(start, end)
		},
	},
	methods: {
		updateSearch({ key, value }) {
			if (value) {
				this.$set(this.searchValues, key, value)
			} else {
				this.$delete(this.searchValues, key)
			}
			this.pagination.page = 1
		},
		updatePage(page) {
			this.pagination.page = page
		},
	},
}
</script>

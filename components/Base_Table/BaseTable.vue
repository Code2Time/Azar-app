<template>
	<v-card dir="rtl">
		<TableHeader
			:headers="headers"
			:search-values="searchValues"
			@update:search="updateSearch"
		/>
		<TableItems :items="paginatedItems" :headers="headers" :loading="loading" />
		<TableFooter
			:page="pagination.page"
			:total-items="filteredItems.length"
			:items-per-page="pagination.itemsPerPage"
			@update:page="updatePage"
			@update:itemsPerPage="updateprepage"
		/>
	</v-card>
</template>

<script>
import TableFooter from './TableFooter.vue'
import TableHeader from './TableHeader.vue'
import TableItems from './TableItems.vue'

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
	mounted() {
		this.$emit('update:page', this.pagination.page)
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
			this.$emit('update:page', page) //ارسال صفحه فعلی برای دریافت داده
			// console.log(page);
		},
		updateprepage(pageprepage) {
			this.pagination.itemsPerPage = pageprepage
		},
	},
}
</script>

<template>
	<div>
		<table class="custom-data-table">
			<TableHeader :headers="processedHeaders" @search="handleSearch" />
			<TableItems :items="filteredItems" :headers="processedHeaders" />
			<TableFooter
				:page="page"
				:page-count="pageCount"
				@page-change="updatePage"
			/>
		</table>
	</div>
</template>

<script>
import TableHeader from '~/components/Base_Table/TableHeader.vue'
import TableItems from '~/components/Base_Table/TableItems.vue'
import TableFooter from '~/components/Base_Table/TableFooter.vue'

export default {
	components: {
		TableHeader,
		TableItems,
		TableFooter,
	},
	props: {
		headers: {
			type: Array,
			required: true,
			default: () => [],
		},
		items: {
			type: Array,
			required: true,
			default: () => [{
        username : 'amir'
      }],
		},
	},
	data() {
		return {
			page: 1,
			itemsPerPage: 5,
			searchValues: {},
		}
	},
	computed: {
		processedHeaders() {
			return this.headers.map((header) => ({
				...header,
				searchable: header.searchable !== false,
				searchValue: this.searchValues[header.value] || '',
			}))
		},
		filteredItems() {
			const start = (this.page - 1) * this.itemsPerPage
			const end = start + this.itemsPerPage
			return this.items
				.filter((item) => {
					return Object.keys(this.searchValues).every((key) => {
						if (!this.searchValues[key]) return true
						return String(item[key])
							.toLowerCase()
							.includes(this.searchValues[key].toLowerCase())
					})
				})
				.slice(start, end)
		},
		pageCount() {
			return Math.ceil(this.items.length / this.itemsPerPage)
		},
	},
	methods: {
		updatePage(newPage) {
			this.page = newPage
		},
		handleSearch({ column, value }) {
			this.$set(this.searchValues, column, value)
			this.page = 1
		},
	},
}
</script>

<style scoped>
.custom-data-table {
	width: 100%;
	border-collapse: collapse;
	box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),
		0 1px 5px 0 rgba(0, 0, 0, 0.12);
}

.custom-data-table th {
	padding: 12px;
	text-align: center;
	background-color: #f5f5f5;
}
</style>

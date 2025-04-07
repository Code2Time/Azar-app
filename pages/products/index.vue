<template>
	<div class="product-container pa-10">
		<BaseTable
			:headers="headers"
			:items="products"
			:loading="loading"
			:initial-pagination="initialPagination"
			@update:page="handlePageUpdate"
		/>
	</div>
</template>

<script>
import BaseTable from '~/components/Base_Table/BaseTable.vue'
import Button from '~/components/Common/Button.vue'
export default {
	layout: 'default',
	components: {
		Button,
		BaseTable,
	},
	data() {
		return {
			loading: false,
			initialPagination: {
				page: 1,
				itemsPerPage: 6,
			},
			headers: [
				{
					text: 'img',
					value: 'avatar',
					searchable: false,
				},
				{
					text: 'product',
					value: 'name',
					searchable: true,
				},
				{
					text: 'price',
					value: 'price',
					searchable: true,
				},
			],
			products: [],
		}
	},
	async mounted() {
		await this.fetch_products()
	},
	methods: {
		change_addres(url) {
			const img_url = 'https://api.sehregoli.com/' + url
			// console.log(img_url)
			return img_url
		},
		async fetch_products(params = {}) {
			try {
				this.loading = true
				const query = {
					page: this.page,
					row_number: this.initialPagination.itemsPerPage,
					...params,
				}
				const response = await this.$api.post('/product', { params: query })
				console.log(response)
				this.products = response.data.data.model.data.map((item) => ({
					avatar: this.change_addres(item.main_picture_path),
					name: item.name,
					slug: item.slug || '------',
					price: item.base_price + '$',
				}))
			} catch (error) {
				console.error('Error fetching users:', error)
			} finally {
				this.loading = false
			}	
		},
		handlePageUpdate(page) {
			this.page = page
			console.log(page)
		},
	},
}
</script>

<style scoped></style>

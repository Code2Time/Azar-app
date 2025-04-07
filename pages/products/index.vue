<template>
	<div class="product-container pa-10">
		<BaseTable
			:headers="headers"
			:items="products"
			:loading="loading"
			:initial-pagination="initialPagination"
		/>
	</div>
</template>

<script>
import Button from '~/components/Common/Button.vue'
import BaseTable from '~/components/Base_Table/BaseTable.vue'
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
			console.log(img_url)
			return img_url
		},
		async fetch_products() {
			try {
				const response = await this.$api.post('/product')
				this.products = response.data.data.model.data.map((item) => ({
					avatar: this.change_addres(item.main_picture_path),
					name: item.name,
					slug: item.slug || '------',
					price: item.base_price + '$',
				}))
			} catch (error) {
				console.error('Error fetching users:', error)
			}
		},
	},
}
</script>

<style scoped></style>

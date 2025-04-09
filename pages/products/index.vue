<template>
<<<<<<< HEAD
	<div class="product-container pa-4">
		<BaseTable
			:headers="headers"
			:items="filteredProducts"
			:loading="loading"
			:initial-pagination="initialPagination"
=======
	<div class="product-container pa-10">
		<BaseTable
			:headers="headers"
			:items="products"
			:loading="loading"
			:initial-pagination="initialPagination"
			@update:page="handlePageUpdate"
>>>>>>> parent of bc8c58b (Delete Products2 Page And Uppdate Nav)
		/>
	</div>
</template>

<script>
<<<<<<< HEAD
import { mapGetters } from 'vuex'

export default {
	components: {},
	data() {
		return {
			loading: false,
			initialPagination: { page: 1, itemsPerPage: 6 },
			headers: [
				{ text: 'img', value: 'avatar', searchable: false },
				{ text: 'product', value: 'name', searchable: true },
				{ text: 'price', value: 'price', searchable: true },
			],
			rawProducts: [],
		}
	},
	computed: {
		...mapGetters('filters', ['sortedItems']),
		filteredProducts() {
			return this.sortedItems(this.rawProducts)
		},
	},
	async mounted() {
		await this.fetchProducts()
	},
	methods: {
		async fetchProducts() {
			try {
				this.loading = true
				const response = await this.$api.post('/product')
				this.rawProducts = response.data.data.model.data.map((item) => ({
					...item,
					created_at: item.created_at,
					avatar: this.getImageUrl(item.main_picture_path),
					price: `${item.base_price} $`,
				}))
			} catch (error) {
				console.error('Error fetching products:', error)
			} finally {
				this.loading = false
			}
		},
		getImageUrl(path) {
			return `https://api.sehregoli.com/${path}`
=======
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
			const img_url = `https://api.sehregoli.com/${url}`
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
>>>>>>> parent of bc8c58b (Delete Products2 Page And Uppdate Nav)
		},
	},
}
</script>
<<<<<<< HEAD
=======

<style scoped></style>
>>>>>>> parent of bc8c58b (Delete Products2 Page And Uppdate Nav)

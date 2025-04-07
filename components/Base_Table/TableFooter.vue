<template>
	<v-card-actions>
		<v-container>
			<v-row>
				<v-col cols="12">
					<Pagination
						:value="page"
						:total-items="totalItems"
						:items-per-page="localItemsPerPage"
						@input="handlePageChange"
					/>
				</v-col>
			</v-row>
			<v-row>
				<v-col>
					<span>show items</span>
					<v-menu offset-y>
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								dark
								text
								color="primary"
								class="ml-2"
								v-bind="attrs"
								v-on="on"
							>
								{{ localItemsPerPage }}
								<v-icon>mdi-chevron-down</v-icon>
							</v-btn>
						</template>
						<v-list>
							<v-list-item
								v-for="(number, index) in itemsPerPageArray"
								:key="index"
								@click="updateItemsPerPage(number)"
							>
								<v-list-item-title>{{ number }}</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</v-col>
			</v-row>
		</v-container>
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
			type: [Number],
			required: true,
		},
	},
	data() {
		return {
			itemsPerPageArray: [5, 10, 15],
			localItemsPerPage: this.itemsPerPage, // مقدار اولیه از prop گرفته می‌شود
		}
	},
	watch: {
		itemsPerPage(newVal) {
			this.localItemsPerPage = newVal
		},
	},
	computed: {
		startItemIndex() {
			return (this.page - 1) * this.localItemsPerPage + 1
		},
		endItemIndex() {
			return Math.min(this.page * this.localItemsPerPage, this.totalItems)
		},
	},
	methods: {
		handlePageChange(page) {
			console.log('Page changed to:', page)
			this.$emit('update:page', page)
		},

		updateItemsPerPage(number) {
			console.log('Items per page changed to:', number)
			this.localItemsPerPage = number // به‌روزرسانی مقدار محلی
			this.$emit('update:itemsPerPage', number)
			this.$emit('update:page', 1)
		},
	},
}
</script>

<style scoped>
.v-card-actions {
	padding: 16px;
}
</style>

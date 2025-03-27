<template>
	<div>
		<ul>
			<li v-for="user in paginatedUsers" :key="user.id">
				{{ user.name }}
			</li>
		</ul>

		<Pagination
			:current-page="currentPage"
			:total-items="users.length"
			:items-per-page="itemsPerPage"
			@page-changed="handlePageChange"
		/>
	</div>
</template>

<script>
import Pagination from '~/components/Feature/Pagination.vue'

export default {
	components: { Pagination },
	data() {
		return {
			users: [{name : 'test'}], // داده‌های دریافتی از API
			currentPage: 1,
			itemsPerPage: 10,
		}
	},
	computed: {
		paginatedUsers() {
			const start = (this.currentPage - 1) * this.itemsPerPage
			const end = start + this.itemsPerPage
			return this.users.slice(start, end)
		},
	},
	methods: {
		handlePageChange(page) {
			this.currentPage = page
			// اینجا می‌توانید درخواست API برای صفحه جدید بزنید (در صورت نیاز)
		},
	},
}
</script>
<style scoped>
ul {
	list-style-type: none;
	text-align: center;
}
</style>
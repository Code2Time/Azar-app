<template>
	<div class="Base-container pa-5">
		<base-table
			:headers="headers"
			:items="userItems"
			:loading="loading"
			:initial-pagination="initialPagination"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			loading: false,
			initialPagination: {
				page: 1,
				itemsPerPage: 8,
			},
			headers: [
				{
					text: this.$i18n.t('Base_Table.Avatar'),
					value: 'avatar',
					searchable: false,
				},
				{
					text: this.$i18n.t('Base_Table.First_Name'),
					value: 'name',
					searchable: true,
				},
				{
					text: this.$i18n.t('Base_Table.Last_Name'),
					value: 'family',
					searchable: true,
				},
				{
					text: this.$i18n.t('Base_Table.Phone_Number'),
					value: 'phone',
					searchable: true,
				},
			],
			userItems: [],
		}
	},
	async mounted() {
		await this.fetchUsers()
	},
	methods: {
		async fetchUsers() {
			this.loading = true
			try {
				// فرض می‌کنیم این داده‌ها از API دریافت می‌شوند
				const response = await this.$api.post('/user')
				this.userItems = response.data.data.model.data.map((user) => ({
					avatar: 'https://avatar.iran.liara.run/public/18',
					name: user.first_name,
					family: user.last_name || '------',
					phone: user.username,
				}))
			} catch (error) {
				console.error('Error fetching users:', error)
			} finally {
				this.loading = false
			}
		},
	},
}
</script>
<style scoped>
.Base-container {
	width: 100%;
	height: auto;
}
</style>

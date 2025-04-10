<template>
	<div class="Base-container pa-5">
		<BaseTable
			:headers="headers"
			:items="userItems"
			:loading="loading"
			:initial-pagination="initialPagination"
			@update:page="handlePageUpdate"
			@selected_date="handleSelectedDate"
		/>
	</div>
</template>

<script>
import BaseTable from '~/components/Base_Table/BaseTable.vue'
export default {
	components: {
		BaseTable,
	},
	data() {
		return {
			loading: false,
			initialPagination: {
				page: 1,
				itemsPerPage: 5,
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
				{
					text: this.$i18n.t('Base_Table.Date'),
					value: 'created_at',
					searchable: false,
					isDate: true,
				},
			],
			userItems: [],
		}
	},
	async mounted() {
		await this.fetchUsers()
	},
	methods: {
		async fetchUsers(params = {}) {
			this.loading = true
			const query = {
				page: this.convertToDoubleQuotedJson(this.initialPagination.page),
				row_number: this.convertToDoubleQuotedJson(
					this.initialPagination.itemsPerPage
				),
				...params,
			}
			try {
				const response = await this.$api.post('/user', { params: query })
				this.userItems = response.data.data.model.data.map((user) => ({
					avatar: 'https://avatar.iran.liara.run/public/18',
					created_at: this.convertIsoToShamsi(user.created_at),
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

		async handleSelectedDate(dateObj) {
			try {
				this.loading = true
				const requestData = {
					filters: {
						created_at: {
							op: 'between',
							from: dateObj.filters.created_at.from,
							to: dateObj.filters.created_at.to,
						},
					},
				}
				const response_data = await this.$api.post('/user', requestData)

				this.userItems = response_data.data.data.model.data.map((user) => ({
					avatar: 'https://avatar.iran.liara.run/public/18',
					created_at: this.convertIsoToShamsi(user.created_at),
					name: user.first_name,
					family: user.last_name || '------',
					phone: user.username,
				}))
			} catch (error) {
				console.error('Error in date filtering:', error)
				this.$toast.error('خطا در فیلتر کردن بر اساس تاریخ')
			} finally {
				this.loading = false
			}
		},

		handlePageUpdate(page) {
			this.initialPagination.page = page
			this.fetchUsers()
		},
		convertToDoubleQuotedJson(params) {
			return JSON.stringify(params, null, 2)
		},
		convertIsoToShamsi(isoDate) {
			const date = new Date(isoDate)
			const year = date.getUTCFullYear()
			const month = date.getUTCMonth() + 1
			const day = date.getUTCDate()
			let shamsiYear = year - 621
			if (month > 3) {
				shamsiYear++
			}
			return `${shamsiYear}/${month}/${day}`
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

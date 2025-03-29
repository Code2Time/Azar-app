<template>
	<div class="user-container" :style="heightStyle">
		<v-container>
			<v-row>
				<v-col cols="12">
					<Input
						v-model="searchQuery"
						:label="this.$i18n.t('Buttons.Search_Users')"
						prepend-inner-icon="mdi-magnify"
						outlined
						clearable
						@input="handleSearch"
					></Input>
				</v-col>
				<v-col cols="12">
					<v-progress-linear
						v-if="loading"
						indeterminate
						color="primary"
					></v-progress-linear>

					<v-row v-else>
						<v-col
							v-for="user in paginatedUsers"
							:key="user.login.uuid"
							cols="12"
							sm="6"
							md="3"
						>
							<v-card class="pa-4 h-100" elevation="2">
								<div class="d-flex align-center mb-3">
									<v-avatar size="64" class="mr-3">
										<img :src="user.picture.large" :alt="user.name.first" />
									</v-avatar>
									<div>
										<v-card-subtitle class="pa-0"
											>@{{ user.login.username }}</v-card-subtitle
										>
									</div>
								</div>

								<v-divider class="my-2"></v-divider>

								<v-list dense>
									<v-list-item>
										<v-list-item-icon>
											<v-icon small>mdi-gender-male-female</v-icon>
										</v-list-item-icon>
										<v-list-item-content>
											<v-list-item-title>{{
												user.gender === 'male'
													? $t(`Gender.Male`)
													: $t(`Gender.Female`)
											}}</v-list-item-title>
										</v-list-item-content>
									</v-list-item>

									<v-list-item>
										<v-list-item-icon>
											<v-icon small>mdi-email</v-icon>
										</v-list-item-icon>
										<v-list-item-content>
											<v-list-item-title>{{ user.email }}</v-list-item-title>
										</v-list-item-content>
									</v-list-item>
								</v-list>
							</v-card>
						</v-col>
					</v-row>

					<Pagination
						v-if="totalPages > 1"
						v-model="currentPage"
						:total-items="filteredUsers.length"
						:items-per-page="itemsPerPage"
						@page-changed="handlePageChange"
						class="mt-4"
					/>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
import Pagination from '@/components/Feature/Pagination.vue'
import Input from '~/components/Common/Input.vue'

export default {
	components: {
		Pagination,
		Input,
	},

	data() {
		return {
			allUsers: [],
			filteredUsers: [],
			loading: false,
			searchQuery: '',
			currentPage: 1,
			itemsPerPage: 12,
		}
	},

	computed: {
		paginatedUsers() {
			const start = (this.currentPage - 1) * this.itemsPerPage
			const end = start + this.itemsPerPage
			return this.filteredUsers.slice(start, end)
		},
		totalPages() {
			return Math.ceil(this.filteredUsers.length / this.itemsPerPage)
		},
		heightStyle() {
			return {
				height: this.$vuetify.breakpoint.lgAndUp ? '100vh' : 'auto',
			}
		},
	},

	async mounted() {
		await this.fetchUsers()
	},

	methods: {
		async fetchUsers() {
			try {
				this.loading = true
				const response = await this.$apiRequest(
					'',
					{
						params: {
							results: 40,
							inc: 'gender,name,login,email,phone,picture',
							nat: 'us,gb,ca,fr,de,ir',
						},
					},
					'get'
				)

				if (response?.results) {
					this.allUsers = response.results
					this.filteredUsers = [...response.results]
				}
			} catch (error) {
				console.error('Error fetching users:', error)
				this.allUsers = []
				this.filteredUsers = []
			} finally {
				this.loading = false
			}
		},

		handleSearch() {
			if (!this.searchQuery) {
				this.filteredUsers = [...this.allUsers]
			} else {
				const query = this.searchQuery.toLowerCase()
				this.filteredUsers = this.allUsers.filter((user) => {
					return (
						user.name.first.toLowerCase().includes(query) ||
						user.name.last.toLowerCase().includes(query) ||
						user.email.toLowerCase().includes(query) ||
						user.login.username.toLowerCase().includes(query)
					)
				})
				this.currentPage = 1
			}
		},

		handlePageChange(page) {
			this.currentPage = page
		},
	},
}
</script>

<style scoped>
.user-container {
	width: 100%;
	height: auto;
}
.v-card {
	transition: transform 0.3s;
	height: 100%;
}

.v-card:hover {
	transform: translateY(-5px);
	box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

.v-avatar img {
	object-fit: cover;
	border: 2px solid #fff;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>

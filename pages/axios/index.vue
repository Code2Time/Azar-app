<template>
	<div class="data-container d-flex align-center justify-space-around">
		<Button :value="this.$i18n.t('Buttons.Get_Data')" @click="fetchData" />
		<v-progress-circular
			v-if="loading"
			indeterminate
			color="primary"
			class="mt-4"
		></v-progress-circular>
		<ul v-else class="d-flex flex-column align-center justify-center">
			<h1 v-if="users">sort users (a-z)</h1>
			<li v-for="(user, index) in sortedUsers" :key="index" class="ma-4">
				{{ user.name }} - {{ user.email }} (ID: {{ user.id }})
			</li>
		</ul>
	</div>
</template>

<script>
// import Components
import Button from '~/components/Common/Button.vue'

export default {
	components: {
		Button,
	},
	data() {
		return {
			users: null,
			loading: false,
		}
	},
	computed: {
		sortedUsers() {
			if (!this.users) return []
			return [...this.users].sort((a, b) => a.name.localeCompare(b.name))
		},
	},
	methods: {
		async fetchData() {
			try {
				this.loading = true
				const response = await this.$apiRequest('users', {}, 'get')
				this.users = response.data
				console.log(this.users)
			} catch (error) {
				console.error('Failed to fetch data:', error)
			} finally {
				this.loading = false
			}
		},
	},
}
</script>

<style scoped>
.data-container {
	width: 100%;
	height: 100vh;
}
ul {
	list-style-type: none;
}
</style>

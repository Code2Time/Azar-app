<template>
	<div class="ma-5">
		<Button value="get users" @click="fetch_users" />

		<ul>
			<li v-for="(user, index) in users" :key="index">
				{{ user.first_name }}
			</li>
		</ul>
	</div>
</template>

<script>
import { isAuthenticated } from '~/utils/auth'
import Button from '~/components/Common/Button.vue'

export default {
	components: {
		Button,
	},
	data() {
		return {
			users: [],
		}
	},
	methods: {
		async fetch_users() {
			try {
				if (isAuthenticated) {
					const user = await this.$api.post('/user')
					this.users = user.data.data.model.data
				}
			} catch (error) {
				console.log('you have an error', error)
			}
		},
	},
}
</script>

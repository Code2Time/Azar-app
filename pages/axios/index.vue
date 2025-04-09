<template>
	<div>
		<h1>Axios Page</h1>
		<Button value="Get Data" @click="fechData" />
	</div>
</template>
<script>
import Button from '~/components/Common/Button.vue'
export default {
	components: {
		Button,
	},
	methods: {
		async fechData() {
			const user_datas = {
				username: '09111111111',
				password: '123456',
			}
			try {
				const user_req = await this.$api.post('/auth/login', user_datas)
				console.log('Post created:', user_req)
				return user_req
			} catch (error) {
				console.error('Error creating post:', error)
				throw error
			}
		},
	},
}
</script>
<style></style>

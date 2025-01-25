<template>
	<form>
		<v-container>
			<v-row>
				<v-col cols="12" xl="6">
					<v-text-field
						:label="input1Label"
						:type="input1Type"
						v-model="user_name"
					/>
				</v-col>
				<v-col cols="12" xl="6">
					<v-text-field
						:label="input2Label"
						:type="input2Type"
						v-model="password"
					/>
				</v-col>
				<v-col cols="12">
					<div class="d-flex align-center justify-space-between">
						<v-checkbox
							color="primary"
							hide-details
							value="Remember me"
							label="Remember me"
						></v-checkbox>

						<a href="">forget password?</a>
					</div>
				</v-col>
			</v-row>
		</v-container>
	</form>
</template>

<script>
export default {
	props: {
		input1Label: {
			type: String,
			default: 'Input 1',
		},
		input1Type: {
			type: String,
			default: 'Email',
		},
		input2Label: {
			type: String,
			default: 'Input 2',
		},
		input2Type: {
			type: String,
			default: 'text',
		},
	},
	data() {
		return {
			user_name: '',
			password: '',
		}
	},
}
</script>

<style scoped>
.v-container {
	margin-bottom: 20px;
}
</style>

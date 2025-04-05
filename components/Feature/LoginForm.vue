<template>
	<div class="login-container d-flex justify-center align-center">
		<v-container>
			<v-row justify="center">
				<v-col cols="12" sm="8" md="6" xl="4" align-self="center">
					<v-card class="login-box-bg white--text d-flex flex-column pa-5">
						<v-card-title class="text-h4 poppins-2 px-2 pb-10 dark--text">
							{{ $t('Headers.Login') }}
						</v-card-title>
						<div class="d-flex justify-space-between align-centeri">
							<p class="px-2">{{ $t('LoginBox.Ask_Account') }}</p>
							<!-- now just go to test -->
							<nuxt-link exact to="/signup" class="text-decoration-none px-3">
								{{ $t('LoginBox.Sign_Up') }}</nuxt-link
							>
						</div>
						<form>
							<v-container>
								<v-row justify="center">
									<v-col col="12" sm="9" md="6" align-self="center">
										<Input
											:label="$t('LoginBox.User_Id')"
											customColor="blue"
											append-icon="mdi-account"
											rules="require , number"
											v-model="user_name"
											:value="user_name"
											type="text"
											dir="ltr"
										/>
									</v-col>
									<v-col cols="12" sm="9" md="6" align-self="center">
										<Input
											:label="$t('LoginBox.Password')"
											customColor="blue"
											rules="require"
											v-model="password"
											:value="password"
											type="password"
											@enter="Submited"
											dir="ltr"
										/>
									</v-col>
									<!-- number input type test -->

									<v-col cols="12">
										<div class="d-flex align-center justify-space-between">
											<v-checkbox
												:label="$t('LoginBox.Remember')"
												hide-details
												color="primary"
												dark
											></v-checkbox>
											<!--now just go to test  -->
											<nuxt-link
												to="/forgetpass"
												class="text-decoration-none"
												>{{ $t('LoginBox.Forget_Pass') }}</nuxt-link
											>
										</div>
									</v-col>
								</v-row>
							</v-container>
						</form>
						<Button
							class="align-self-center poppins-2 rounded-pill ma-5"
							:value="$t('Headers.Login')"
							:disabled="isDisable"
							@click="Submited"
							:rounded="true"
							width="60%"
						/>

						<p class="align-self-center">{{ $t('LoginBox.Countinue') }}</p>

						<div class="d-flex justify-space-around align-center mt-5">
							<v-btn color="primary" elevation="5" outlined>
								<v-icon>mdi-google</v-icon>
								<v-divider vertical class="ma-1" color="blue"></v-divider>
								<h3>{{ $t('LoginBox.Google') }}</h3>
							</v-btn>
							<v-divider vertical class="primary"> </v-divider>
							<v-btn color="red" elevation="5" outlined>
								<v-icon>mdi-facebook</v-icon>
								<v-divider vertical class="ma-1" color="red"></v-divider>
								<h3>{{ $t('LoginBox.Facebook') }}</h3>
							</v-btn>
						</div>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>

<script>
//import input component

import Input from '~/components/Common/Input.vue'
import Button from '../Common/Button.vue'

export default {
	name: 'LoginForm',
	components: {
		Input,
		Button,
	},
	data() {
		return {
			user_name: '',
			password: '',
			token: '',
		}
	},
	methods: {
		async Submited() {
			const user_datas = {
				username: this.user_name,
				password: this.password,
			}
			try {
				const user_req = await this.$api.post('/auth/login', user_datas)
				if (user_req.status == 200) {
					console.log(user_req.data.data.Authorization)
					localStorage.setItem('authToken', user_req.data.data.Authorization)
					this.$router.push('/')
					console.log(user_req)
				} else {
					this.$toast.error('user pass is wrong', {
						position: 'bottom',
						duration: 3000,
					})
					this.user_name = ''
					this.password = ''
				}
				return user_req
			} catch (error) {
				console.error('Error creating post:', error)
				throw error
			}
		},
	},
	computed: {
		isDisable() {
			return this.user_name.trim() === '' || this.password.trim() === ''
		},
	},
}
</script>

<style scoped>
.login-container {
	width: 100%;
	height: 100vh;
}
.login-box-bg {
	width: 100%;
	backdrop-filter: blur(16px) saturate(180%);
	-webkit-backdrop-filter: blur(16px) saturate(180%);
	background-color: rgba(17, 25, 40, 0.405);
	border-radius: 12px;
	border: 1px solid rgba(255, 255, 255, 0.125);
}
</style>

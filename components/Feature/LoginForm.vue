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
											:label="$t('LoginBox.Email_Id')"
											append-icon="mdi-account"
											rules="require , email"
											v-model="user_name"
											:value="user_name"
											color="primary"
											type="email"
											dir="ltr"
										/>
									</v-col>
									<v-col cols="12" sm="9" md="6" align-self="center">
										<Input
											:label="$t('LoginBox.Password')"
											rules="require"
											v-model="password"
											:value="password"
											type="password"
											color="primary"
											dir="ltr"
										/>
									</v-col>
									<!-- number input type test -->
									<v-col cols="12" align-self="center">
										<span class="red__text">this input just for test</span>
										<Input
											type="text"
											label="your number"
											:value="number"
											v-model="formattedNumber"
										/>
									</v-col>
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
						<v-btn
							:disabled="isDisable"
							@click="Submited"
							class="submit-btn poppins-2 grey text-body1 text-center align-self-center rounded-pill"
						>
							{{ $t('Headers.Login') }}
						</v-btn>

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

export default {
	name: 'LoginForm',
	components: {
		Input,
	},
	data() {
		return {
			user_name: '',
			password: '',
			number: '',
		}
	},
	methods: {
		Submited() {
			console.log(this.user_name, this.password)
			this.user_name = ''
			this.password = ''
		},
	},
	computed: {
		isDisable() {
			return this.user_name.trim() === '' || this.password.trim() === ''
		},
		formattedNumber: {
			get() {
				return this.number ? Number(this.number).toLocaleString() : ''
			},
			set(value) {
				this.number = value.replace(/,/g, '')
			},
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

.submit-btn {
	width: 60%;
	margin: 50px auto;
}
</style>

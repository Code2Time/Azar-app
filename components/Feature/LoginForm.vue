<template>
	<div class="login-container d-flex justify-center align-center">
		<v-container>
			<v-row justify="center">
				<v-col cols="12" sm="8" md="6" xl="4" align-self="center">
					<v-card class="login-box-bg white--text d-flex flex-column pa-5">
						<v-card-title class="text-h4 poppins-2 px-0 pb-10 dark--text">
							Login
						</v-card-title>
						<div class="d-flex justify-space-between align-centeri">
							<p>Dont have an accunt yet ?</p>
							<!-- now just go to test -->
							<nuxt-link exact to="/signup" class="text-decoration-none">
								sign up</nuxt-link
							>
						</div>
						<form>
							<v-container>
								<v-row justify="center">
									<v-col col="12" sm="9" md="6" align-self="center">
										<v-text-field
											label="Your Email Id"
											type="Email"
											color="primary"
											append-icon="mdi-account	"
											v-model="user_name"
											dark
										/>
									</v-col>
									<v-col cols="12" sm="9" md="6" align-self="center">
										<v-text-field
											label="Your Password"
											type="password"
											color="primary"
											append-icon="mdi-lock"
											v-model="password"
											dark
										/>
									</v-col>
									<v-col cols="12">
										<div class="d-flex align-center justify-space-between">
											<v-checkbox
												hide-details
												label="Remember me"
												color="primary"
												dark
											></v-checkbox>
											<!--now just go to test  -->
											<nuxt-link to="/forgetpass" class="text-decoration-none"
												>forget password?</nuxt-link
											>
										</div>
									</v-col>
								</v-row>
							</v-container>
						</form>
						<v-btn
							:disabled="isDisable"
							@click="Submited"
							class="submit-btn poppins-2 grey text-h6 text-center align-self-center rounded-pill"
						>
							Login
						</v-btn>

						<p class="align-self-center">Or Continue With....</p>

						<div class="d-flex justify-space-around align-center mt-5">
							<v-btn color="primary" elevation="5" outlined>
								<v-icon>mdi-google</v-icon>
								<v-divider vertical class="ma-1" color="primary"></v-divider>
								<h3>Google</h3>
							</v-btn>
							<v-divider vertical class="primary"> </v-divider>
							<v-btn color="error" elevation="5" outlined>
								<v-icon>mdi-facebook</v-icon>
								<v-divider vertical class="ma-1" color="error"></v-divider>
								<h3>Facebook</h3>
							</v-btn>
						</div>
					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</div>
</template>
<script>
export default {
	name: 'LoginForm',
	data() {
		return {
			user_name: '',
			password: '',
		}
	},
	methods: {
		Submited() {
			alert('click shod')
			this.user_name = ''
			this.password = ''
		},
	},
	computed: {
		isDisable() {
			return !this.user_name || !this.password
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

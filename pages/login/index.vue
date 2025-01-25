<template>
	<v-app>
		<div class="custome-size d-flex justify-center align-center">
			<v-container>
				<v-row class="d-flex align-center">
					<v-col class="d-none d-lg-block">
						<v-card
							class="login-bg white--text d-flex flex-column pa-5"
						>
							<h1 class="my-5 headline poppins-2">Continue with ...</h1>

							<v-chip
								class="ma-5 my-7 "
								color="indigo"
								label
								text-color="white"
							>
								<v-icon left> mdi-linkedin </v-icon>
								LinkedIn
							</v-chip>

							<v-chip
								class="ma-5 my-7 "
								color="blue"
								label
								text-color="white"
							>
								<v-icon left> mdi-facebook </v-icon>
								Facebook
							</v-chip>

							<v-chip
								class="ma-5 my-7 "
								color="blue darken-2"
								label
								text-color="white"
							>
								<v-icon left> mdi-google </v-icon>
								Google
							</v-chip>

							<v-chip
								class="ma-5 my-7 "
								color="cyan"
								label
								text-color="white"
							>
								<v-icon left> mdi-twitter </v-icon>
								Twitter
							</v-chip>
						</v-card>
					</v-col>
					<v-col cols="12" lg="9">
						<v-card class="login-bg white--text d-flex flex-column">
							<v-card-title class="text-h4 poppins-2 my-5">
								Login
							</v-card-title>
							<div class="d-flex pr-3">
								<v-card-text> Dont have an accunt yet ? </v-card-text>
								<a href="#" class="link">sign up</a>
							</div>
							<Inputs
								input1Label="your Email addres "
								input1Type="Email"
								input2Label="your password "
								input2Type="password"
							/>
							<v-btn
								@click="submited"
								class="submit-btn poppins-2 grey text-center align-self-center"
							>
								Login
							</v-btn>
						</v-card>
					</v-col>
				</v-row>
			</v-container>
		</div>
	</v-app>
</template>

<script>
export default {
	name: 'LoginPage',
	methods: {
		submited() {
			alert('just clicked')
		},
	},
}
</script>

<style scoped>
.custome-size {
	width: 100%;
	height: 100vh;
	background-image: url('@/static/login_bg.jpg');
	background-size: cover;
	background-repeat: no-repeat;
}
.login-bg {
	width: 100%;
	backdrop-filter: blur(16px) saturate(180%);
	-webkit-backdrop-filter: blur(16px) saturate(180%);
	background-color: rgba(17, 25, 40, 0.405);
	border-radius: 12px;
	border: 1px solid rgba(255, 255, 255, 0.125);
}
.link {
	width: 100px;
}

.submit-btn {
	width: 80%;
	margin: 60px auto;
}
</style>

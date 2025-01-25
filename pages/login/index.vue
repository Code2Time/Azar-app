<template>
	<v-app>
		<div class="custome-size d-flex justify-center align-center">
			<v-card class="login-container white--text d-flex flex-column">
				<v-card-title class="text-h4 poppins-2 my-5"> Login </v-card-title>
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
.login-container {
	width: 50%;
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

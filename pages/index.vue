<template>
	<v-app>
		<div class="d-flex flex-column justify-center align-center custome-size">
			<h1 class="myblue">
				{{ $t('HomePage.HomeTitle') }}
			</h1>
			<h3 class="poppins-2">{{ $t('HomePage.Home_Discription') }}</h3>
			<div class="d-flex flex-column justify-center align-center pa-3">
				<h1>
					{{ $t('Test') }}
				</h1>
				<v-container>
					<v-row>
						<v-col>
							<v-btn class="primary" @click="changeLang('en')"> English </v-btn>
						</v-col>
						<v-spacer></v-spacer>
						<v-col>
							<v-btn class="primary" @click="changeLang('fa')"> فارسی </v-btn>
						</v-col>
					</v-row>
				</v-container>
			</div>
		</div>
	</v-app>
</template>

<script>
export default {
	name: 'IndexPage',
	methods: {
		changeLang(lang) {
			this.$i18n.setLocale(lang)
		},
	},
}
</script>

<style scoped>
.custome-size {
	width: 100%;
	height: 70%;
}
</style>

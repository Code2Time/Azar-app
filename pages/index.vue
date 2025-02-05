<template>
	<v-app>
		<div class="d-flex flex-column justify-center align-center custome-size">
			<h1 class="myblue">
				{{ $t('HomeTitle') }}
			</h1>
			<h3 class="poppins-2">ther is noting for show yet</h3>
			<div>
				<v-btn primary @click="changelang('en')">English</v-btn>
				<v-btn error @click="changelang('fa')">فارسی</v-btn>
			</div>
		</div>
	</v-app>
</template>

<script>
export default {
	name: 'IndexPage',
	methods: {
		getInputValue(data) {
			this.inputData = data
		},
		changelang(selectedlang) {
			this.$i18n.setLocale(selectedlang)
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

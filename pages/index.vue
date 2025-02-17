<template>
	<v-app>
		<div class="d-flex flex-column justify-center align-center custome-size">
			<h1 class="myblue--text">
				{{ $t('HomePage.HomeTitle') }}
			</h1>
			<h3 class="poppins-2">{{ $t('HomePage.Home_Discription') }}</h3>
			<div class="d-flex flex-column justify-center align-center pa-3">
				<Button value="دکمه تستی"/>
			</div>
		</div>
	</v-app>
</template>

<script>
import Button from '~/components/Common/Button.vue'
export default {
	name: 'IndexPage',
	components : {
		Button
	}
}
</script>

<style scoped>
.custome-size {
	width: 100%;
	height: 70%;
}
</style>

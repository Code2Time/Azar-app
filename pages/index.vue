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
				<ToggleLangBtn />
			</div>
		</div>
	</v-app>
</template>

<script>
import ToggleLangBtn from '~/components/Feature/ToggleLangBtn.vue'
export default {
	name: 'IndexPage',
	components: {
		ToggleLangBtn,
	},
	
}
</script>

<style scoped>
.custome-size {
	width: 100%;
	height: 70%;
}
</style>

<template>
	<v-app>
		<div class="d-flex flex-column justify-center align-center custome-size">
			<h1 class="myblue--text">
				{{ $t('HomePage.HomeTitle') }}
			</h1>
			<h3 class="poppins-2">{{ $t('HomePage.Home_Discription') }}</h3>
			<div class="d-flex flex-column justify-center align-center pa-3">
				<Button value="Test Btn" @click="customClick" />
			</div>
		</div>
	</v-app>
</template>

<script>
import Button from '~/components/Common/Button.vue'

export default {
	name: 'IndexPage',
	data() {
		return {
			num: 100215454,
		}
	},
	components: {
		Button,
	},

	computed: {
		number() {
			return this.num.toLocaleString()
		},
	},
	methods: {
		customClick() {
			alert('custome clicked')
		},
	},
	mounted() {
		this.$toast.info(this.$t('HomePage.User_Pass'), {
			position: 'bottom',
			duration: '3000',

		})
	},
}
</script>

<style scoped>
.custome-size {
	width: 100%;
	height: 70%;
}
</style>

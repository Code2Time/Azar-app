<!-- create a basic Navbar  -->
<template>
	<v-app-bar class="grey darken-4">
		<div class="nav-container d-flex justify-space-around align-center">
			<div class="nav-item">
				<div class="d-flex align-center">
					<div class="mx-2">
						<nuxt-link class="link white--text poppins-2" to="/" exact>
							<v-icon color="white">mdi-home</v-icon>
							<span>{{ $t('Headers.Home') }}</span>
						</nuxt-link>
					</div>
					<div class="mx-2">
						<Menu
							:items="menuItems"
							:activator-text="$t('Headers.Select')"
							:activator-props="{ color: 'primary', dark: true }"
						/>
					</div>
				</div>
			</div>
			<div class="nav-item d-flex justify-center align-center">
				<AuthButton />
				<!-- <ToggleThemeBtn /> -->
				<languageBtn />
			</div>
		</div>
	</v-app-bar>
</template>

<script>
// import component
// import ToggleThemeBtn from '../Feature/ToggleThemeBtn.vue'
import LanguageBtn from '../Feature/LanguageBtn.vue'
import AuthButton from '../Feature/AuthButton.vue'
import Menu from '~/components/Common/Menu.vue'

export default {
	components: {
		// ToggleThemeBtn,
		LanguageBtn,
		AuthButton,
		Menu,
	},
	data() {
		return {
			menuItems: [
				{
					title: this.$i18n.t('Headers.Custom_Component'),
					to: { name: 'more-component' }, // استفاده از object route
				},
				{
					title: this.$i18n.t('Headers.Test_Basetable'),
					to: { name: 'test' },
				},
				// {
				// 	title: this.$i18n.t('Headers.Pagination'),
				// 	to: { name: 'pagination' },
				// },
			],
		}
	},
}
</script>

<style scoped>
.nav-container {
	width: 100%;
	height: 100%;
}
</style>

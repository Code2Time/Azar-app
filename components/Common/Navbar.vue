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
					to: { name: 'more-component' },
				},
				{
					title: this.$i18n.t('Headers.Test_Basetable'),
					to: { name: 'users' },
				},
				{
					title: this.$i18n.t('Headers.Products'),
					to: { name: 'products' },
				},
<<<<<<< HEAD
				{
<<<<<<< HEAD
<<<<<<< HEAD
					title: 'Date',
					to: { name: 'date' },
=======
					title: this.$i18n.t('Headers.Products2'),
					to: { name: 'products2' },
>>>>>>> parent of bc8c58b (Delete Products2 Page And Uppdate Nav)
=======
					title: this.$i18n.t('Headers.Products2'),
					to: { name: 'products2' },
>>>>>>> parent of bc8c58b (Delete Products2 Page And Uppdate Nav)
				},
=======
>>>>>>> parent of b6a16d8 (Add Sort Store And Create SortProduct Component)
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

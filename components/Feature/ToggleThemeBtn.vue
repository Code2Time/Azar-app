<template>
	<v-avatar :dark="isDark">
		<v-btn icon>
			<v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
		</v-btn>
	</v-avatar>
</template>	



<script>
export default {
	name: 'ToggleBtn',
	data() {
		return {
			isDark: false,
		}
	},
	methods: {
		changeTheme() {
			this.isDark = !this.isDark
			this.$vuetify.theme.dark = this.isDark
			localStorage.setItem('darkTheme', this.$vuetify.theme.dark)
		},
	},
}
</script>



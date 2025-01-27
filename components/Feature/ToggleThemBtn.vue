<template>
	<v-avaatar :dark="isDark">
		<v-btn icon @click="toggleTheme" >
			<v-icon>{{ isDark ? 'mdi-weather-sunny' : 'mdi-weather-night' }}</v-icon>
		</v-btn>
	</v-avaatar>
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
		toggleTheme() {
			this.isDark = !this.isDark
			this.$vuetify.theme.dark = this.isDark
			localStorage.setItem('darkTheme', this.$vuetify.theme.dark)
		},
	},
}
</script>

<style></style>

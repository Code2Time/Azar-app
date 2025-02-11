<template>
	<v-menu offset-y>
		<template v-slot:activator="{ on, attrs }">
			<v-btn icon v-bind="attrs" v-on="on">
				<v-icon>mdi-translate</v-icon>
			</v-btn>
		</template>
		<v-list>
			<v-list-item>
				<v-btn @click="changeLanguage('en')" text> English </v-btn>
			</v-list-item>
			<v-list-item>
				<v-btn @click="changeLanguage('fa')" text>  فارسی  </v-btn>
			</v-list-item>
		</v-list>
	</v-menu>
</template>

<script>
export default {
	name: 'LanguageBtn',

	methods: {
		changeLanguage(select_lang) {
			this.$i18n.setLocale(select_lang)
			console.log(select_lang)
		},
	},
}
</script>

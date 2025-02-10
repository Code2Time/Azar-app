<template>
	 <v-container>
      <!-- دکمه اصلی با آیکون زبان -->
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon>mdi-translate</v-icon>
          </v-btn>
        </template>

        <!-- منوی کشویی -->
        <v-list>
          <v-list-item>
            <v-btn @click="changeLanguage('en')" text>
              English
            </v-btn>
          </v-list-item>
          <v-list-item>
            <v-btn @click="changeLanguage('fa')" text>
              فارسی
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-container>
</template>

<script>
export default {
	name: 'ToggleLangBtn',
	data() {
		return {
			drawer : false ,
		}
	},
	methods: {
		changeLanguage(lang) {
			this.$i18n.setLocale(lang)
			console.log(lang)
		},
	},
}
</script>

<style scoped></style>
``
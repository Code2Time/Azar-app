import i18nConfig from './config/i18nConfig'

export default {
	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		titleTemplate: '%s',
		title: 'Azar-app',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: '' },
			{ name: 'format-detection', content: 'telephone=no' },
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
			{
				rel: 'stylesheet',
				href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap',
			},
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: ['@/dist/Styles/globalClass.css'],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		'~/plugins/vuetify.js',
		'~/plugins/validationRules.js',
		'~/plugins/axios.js',
		'~/plugins/token.js',
	],

	i18n: i18nConfig,

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
		// https://go.nuxtjs.dev/vuetify
		'@nuxtjs/vuetify',
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: ['nuxt-i18n', 'cookie-universal-nuxt', '@nuxtjs/axios'],
	axios: {},

	// Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {},
	transition: {
		name: 'slide',
	},
}

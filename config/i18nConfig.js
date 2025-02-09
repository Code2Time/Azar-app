export default {
	strategy: 'no_prefix',
	locales: [
		{
			code: 'en',
			name: 'English',
			file: 'en.js',
			dir: 'ltr',
		},
		{
			code: 'fa',
			name: 'فارسی',
			file: 'fa.js',
			dir: 'rtl',
		},
	],
	defaultLocales: 'en',
	langDir: 'locales/',
	vueI18n: {
		fallbackLocal: 'en',
	},
}

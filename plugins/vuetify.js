// import dependencies

import vue from 'vue'
import Vuetify from 'vuetify'

// srt new Vuetify model

vue.use(Vuetify)

// add custom property

export default new Vuetify({
	theme: {
		dark: true,
		themes: {
			// custom color and theme just for test now
			dark: {
				myblue: '#1119f2',
			},
			light: {
				myblue: '#010336',
			},
		},
	},
})

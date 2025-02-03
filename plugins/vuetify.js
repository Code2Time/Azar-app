import vue from 'vue'
import Vuetify from 'vuetify'

vue.use(Vuetify)

export default new Vuetify({
	theme: {
		dark: true,
		themes: {
            // custom color and theme
			dark: {
				customColor: '#222',
			},
			light: {
				customColor: '#f32122',
			},
		},
	},
})

export default ({ app }, inject) => {
	const require = (value) => !!value ||app.i18n.t('LoginBox.Empty_Input')
	const email = (value) =>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ||app.i18n.t('LoginBox.Input_Error_Username')

	inject('validationRules', {
		require,
		email,
	})
}

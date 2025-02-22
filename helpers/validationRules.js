export const require = (value) => !!value || 'این فیلد اجباری است'
export const email = (value) =>
	/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) ||
	'از ایمیل معتبر استفاده کنید '

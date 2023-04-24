/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}",
		"./app.vue"
	],
	theme: {
		extend: {
			colors: {
				primaryTextColor: '#A56FFE',
				secondaryTextColor: '#59ACFC',
			}
		},
	},
	// plugins: [
	// 	require('@tailwindcss/forms'),
	// ],
	// safelist: [
	// 	{
	// 		pattern: /.*/,
	// 	},
	// ],
	// saud zubedi - 2022-12-31 - 5:17AM IMPORTANT
	// REMOVE THIS IS IN PRODUCTION. THIS ADD 27,000 LINES TO THE CSS FILE AND IS ONLY FOR DEVELOPMENT
	plugins: [],
}

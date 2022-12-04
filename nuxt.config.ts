// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	type: 'spa',
	app: {
		pageTransition: {
			name: 'page',
			mode: 'out-in'
		},
	},

	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	},

	css: [
		'@/assets/css/main.css',
	],

})

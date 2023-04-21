import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({

	type: 'spa',
	ssr: false,
	target: 'static',
	modules: ['nuxt-icon', '@vueuse/nuxt'],
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
		transpile: [
			'@fortawesome/fontawesome-free',
		]
	},

	css: [
		'@/assets/css/main.scss',
		'@/assets/css/styles.scss',
	],

})

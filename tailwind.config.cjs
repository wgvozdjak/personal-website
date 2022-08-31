/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
			'josefin': ['"Josefin Sans"', 'sans-serif'],
			'ibm-plex-sans': ['"IBM Plex Sans"', 'sans-serif'],
			'inter': ['"Inter"', 'sans-serif'],
			'montserrat': ['"Montserrat"', 'sans-serif'],
		},
		extend: {
		},
	},
	plugins: [],
}

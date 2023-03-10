/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				background: "#f6f6f6",
			},
			screens: {
				md: "784px",
				lg: "1080px",
			},
		},
	},
	plugins: [
		function ({ addComponents, theme }) {
			addComponents({
				".link, .tailwind-global a": {
					"@apply underline text-green-900 hover:text-green-700 active:text-green-600 group-hover:text-green-700 group-active:text-green-600": true,
				},
				".tailwind-global li": {
					listStyle: "inside disc",
				},
				".tailwind-global code": {
					"@apply bg-gray-300 p-1 rounded": true,
				},
				".heading, .blog-post h1": {
					"@apply text-3xl font-bold": true,
				},
				".blog-post p": {
					"@apply mt-4": true,
				},
				".large-first-letter::first-letter": {
					"@apply text-5xl font-bold text-green-800": true,
				},
				".blog-post pre": {
					"@apply p-4 mt-4 rounded-lg": true,
				},
				".blog-post hr": {
					"@apply mt-4 border-gray-400": true,
				},
				".blog-post .twitter-tweet": {
					"@apply mx-auto": true,
				},
			});
		},
	],
};

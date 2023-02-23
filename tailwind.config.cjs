/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {},
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
				".heading": {
					"@apply text-3xl font-bold": true,
				},
			});
		},
	],
};

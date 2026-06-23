import { defineConfig, fontProviders } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
	integrations: [icon()],
	site: "https://christianlegge.dev",

	vite: {
		plugins: [tailwindcss()],
	},

	adapter: node({
		mode: "standalone",
	}),
	fonts: [
		{
			provider: fontProviders.fontsource(),
			name: "Newsreader",
			cssVariable: "--font-newsreader",
		},
		{
			provider: fontProviders.google(),
			name: "Cascadia Code",
			cssVariable: "--font-cascadia-code",
		},
		{
			provider: fontProviders.google(),
			name: "Mukta",
			cssVariable: "--font-default",
		},
	],
});

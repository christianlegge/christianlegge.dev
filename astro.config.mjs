import { defineConfig } from "astro/config";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

import NodeFetchCache, { MemoryCache } from "node-fetch-cache";

export const fetch = NodeFetchCache.create({
	cache: new MemoryCache({ ttl: 1000 * 60 * 60 }),
});

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
});


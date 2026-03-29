import { defineMiddleware } from "astro:middleware";
import NodeFetchCache, { MemoryCache } from "node-fetch-cache";

const fetch = NodeFetchCache.create({
	cache: new MemoryCache({ ttl: 1000 * 60 * 60 }),
});

console.log("fetch cache created");

export const onRequest = defineMiddleware((context, next) => {
	context.locals.fetch = fetch;

	return next();
});

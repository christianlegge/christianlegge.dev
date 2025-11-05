import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		tags: z.optional(z.array(z.string())),
		image: z.optional(z.string()),
		description: z.optional(z.string()),
	}),
});

const projectsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		tags: z.optional(z.array(z.string())),
		image: z.optional(z.string()),
		url: z.optional(z.string()),
		icon: z.optional(z.string()),
		sortOrder: z.number(),
	}),
});

const experienceCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		tags: z.optional(z.array(z.string())),
		url: z.optional(z.string()),
		icon: z.optional(z.string()),
		dates: z.string(),
		sortOrder: z.number(),
	}),
});

export const collections = {
	blog: blogCollection,
	projects: projectsCollection,
	experience: experienceCollection,
};

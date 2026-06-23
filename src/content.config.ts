import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		title: z.string(),
		tags: z.optional(z.array(z.string())),
		image: z.optional(z.string()),
		description: z.optional(z.string()),
	}),
});

const projectsCollection = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.{md,mdx}" }),
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
	loader: glob({ base: "./src/content/experience", pattern: "**/*.{md,mdx}" }),
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

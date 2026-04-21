import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    cover: z.string().optional(),
  }),
});

const hosting = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    vendor: z.string(),
    url: z.string().url(),
    affiliate: z.boolean().default(false),
    rating: z.number().min(0).max(5),
    priceFrom: z.string(),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    bestFor: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

const resources = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['hardware', 'software', 'book', 'service', 'tool']),
    url: z.string().url(),
    affiliate: z.boolean().default(false),
    priceFrom: z.string().optional(),
    image: z.string().optional(),
  }),
});

export const collections = { articles, hosting, resources };

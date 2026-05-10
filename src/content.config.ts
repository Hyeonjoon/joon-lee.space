import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const postsCollection = defineCollection({
  loader: glob({ pattern: ['**/*.md', '**/*.mdx'], base: './contents' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        published: z.coerce.date().optional(),
        createdAt: z.coerce.date().optional(),
        updatedAt: z.coerce.date().optional(),
        draft: z.boolean().optional().default(false),
        description: z.string().optional(),
        author: z.string().optional(),
        series: z.string().optional(),
        tags: z.array(z.string()).optional().default([]),
        path: z.string().optional(),
        category: z.string().optional(),
        thumbnailUrl: z.string().optional(),
        coverImage: z
          .strictObject({
            src: image(),
            alt: z.string(),
          })
          .optional(),
        toc: z.boolean().optional().default(true),
      })
      .transform((data) => ({
        ...data,
        published: data.published ?? data.createdAt ?? new Date(0),
      })),
})

const homeCollection = defineCollection({
  loader: glob({ pattern: ['home.md', 'home.mdx'], base: './src/content' }),
  schema: ({ image }) =>
    z.object({
      avatarImage: z
        .object({
          src: image(),
          alt: z.string().optional().default('My avatar'),
        })
        .optional(),
      githubCalendar: z.string().optional(), // GitHub username for calendar
    }),
})

const addendumCollection = defineCollection({
  loader: glob({ pattern: ['addendum.md', 'addendum.mdx'], base: './src/content' }),
  schema: ({ image }) =>
    z.object({
      avatarImage: z
        .object({
          src: image(),
          alt: z.string().optional().default('My avatar'),
        })
        .optional(),
    }),
})

export const collections = {
  posts: postsCollection,
  home: homeCollection,
  addendum: addendumCollection,
}

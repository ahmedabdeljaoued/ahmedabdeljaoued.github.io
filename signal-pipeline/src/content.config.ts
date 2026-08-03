import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const experience = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experience' }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    dates: z.string(),
    order: z.number(),
    technologies: z.array(z.string()).optional(),
    projects: z
      .array(
        z.object({
          title: z.string(),
          summary: z.string(),
          technologies: z.array(z.string()).optional(),
        }),
      )
      .optional(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    image: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
    academic: z.boolean().default(false),
    link: z.string().optional(),
    linkLabel: z.string().optional(),
  }),
});

const certifications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/certifications' }),
  schema: z.object({
    issuer: z.string(),
    title: z.string(),
    dates: z.string(),
    verifyUrl: z.string(),
    verifyLabel: z.string().default('Verify credential'),
    order: z.number(),
  }),
});

export const collections = { experience, projects, certifications };

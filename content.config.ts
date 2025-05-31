import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

const categorySchema = z.object({
  name: z.string(),
  xp: z.number().min(0),
  amount: z.number().min(0),
  projects: z.array(z.number())
})

const specializationSchema = z.object({
  name: z.string(),
  categories: z.array(categorySchema)
})

export default defineContentConfig({
  collections: {
    titles: defineCollection({
      type: 'data',
      source: '*.json',
      schema: z.object({
        code: z.number(),
        name: z.string(),
        groups: z.number().min(0),
        level: z.number().min(0),
        events: z.number().min(0),
        professional: categorySchema,
        suite: categorySchema,
        specializations: z.array(specializationSchema)
      })
    })
  }
})

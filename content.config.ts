import { defineContentConfig, defineCollection } from '@nuxt/content'
import { z } from 'zod'

const categorySchema = z.object({
  name: z.string(),
  xp: z.number().min(0),
  amount: z.number().min(0),
  projects: z.array(z.string())
})

const specializationSchema = z.object({
  name: z.string(),
  categories: z.array(categorySchema)
})

const titleSchema = z.object({
  name: z.string(),
  events: z.number().min(0),
  groups: z.number().min(0),
  professional: z.number().min(0),
  level: z.number().min(0),
  suite: categorySchema,
  specializations: z.array(specializationSchema)
})

export default defineContentConfig({
  collections: {
    rules: defineCollection({
      type: 'data',
      source: '*.json',
      schema: titleSchema
    })
  }
})

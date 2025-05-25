import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core'

export const users = sqliteTable('users', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  login: text('login').notNull(),
  name: text('name').notNull(),
  avatar: text('avatar').notNull(),
})

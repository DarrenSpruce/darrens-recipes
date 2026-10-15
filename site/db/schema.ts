import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
export const kitchenState = sqliteTable('kitchen_state', {id: text('id').primaryKey(), version: integer('version').notNull(), data: text('data').notNull()});

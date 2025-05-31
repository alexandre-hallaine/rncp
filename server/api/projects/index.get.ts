export default defineEventHandler(() => {
    return useDrizzle().select().from(tables.project)
});

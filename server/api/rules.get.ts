export default defineEventHandler(async event => {
  const rules = await queryCollection(event, 'rules').all();
  return rules.map(rule => rule.meta.body);
})

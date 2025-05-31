export default defineEventHandler(event => {
  return queryCollection(event, 'rules').all()
})

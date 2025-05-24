// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxthub/core'],
  hub: { workers: true },
  nitro: { experimental: { openAPI: true } },
  $development: { hub: { remote: true } },
  app: { head: { title: 'RNCP' } },
})

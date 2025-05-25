// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxthub/core',
    '@nuxt/ui-pro',
    '@execrate/nuxt-auth-utils'
  ],
  hub: { workers: true },
  nitro: { experimental: { openAPI: true } },
  app: { head: { title: 'RNCP' } },
  css: ['~/assets/css/main.css']
})
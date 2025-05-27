// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxthub/core',
    '@nuxt/ui-pro',
    '@pinia/nuxt',
    '@pinia/colada-nuxt',
  ],
  hub: {
    workers: true,
    database: true,
    bindings: {
      queue: { REFRESH_QUEUE: { queue_name: '42' } },
      compatibilityDate: '2025-05-05',
    },
  },
  nitro: { experimental: { openAPI: true } },
  app: { head: { title: 'RNCP' } },
  css: ['~/assets/css/main.css'],
  $development: { hub: { remote: true } },
})
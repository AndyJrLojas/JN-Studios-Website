// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  
  // The module added this automatically, or add it manually:
  modules: ['@nuxtjs/sitemap'],

  site: {
    url: 'https://www.jnstudios.demo',
    name: 'JN Studios Photography'
  }
})
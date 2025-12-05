// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: true, // Server Side Rendering
  app: {
    baseURL: '/JN-Studios-Website/' // This must match your repository name
  },
  
  // The module added this automatically, or add it manually:
  modules: ['@nuxtjs/sitemap'],

  site: {
    url: 'https://www.jnstudios.demo',
    name: 'JN Studios Photography'
  }
})
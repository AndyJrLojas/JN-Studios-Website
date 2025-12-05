// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  ssr: true, 
  
  app: {
    baseURL: '/JN-Studios-Website/',
    buildAssetsDir: 'assets' 
  },
  
  modules: ['@nuxtjs/sitemap'],

  site: {
    // Only put the main domain here
    url: 'https://AndyJrLojas.github.io',
    name: 'JN Studios Photography'
  }
})
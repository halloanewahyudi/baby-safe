// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-swiper',  '@vueuse/nuxt'],
  tailwindcss:{
    configPath:'tailwind.config'
  },
  app:{
    baseURL:'/'
  },
  swiper:{
    styleLang:'css'
  },
  css:[
    '~/assets/style.css',
  ]
})
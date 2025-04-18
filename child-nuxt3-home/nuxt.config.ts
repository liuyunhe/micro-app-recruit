// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    baseURL: '/main/',
    head: {
      title: 'child-nuxt3-home',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'format-detection', content: 'telephone=no' }
      ]
    }
  },
  nitro: {
    routeRules: {
      '/**': {
        cors: true,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type, Authorization'
        }
      }
    }
  },
  alias: {
    '@': '/'
  },
  build: {
    transpile: [/^element-plus/]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['element-plus/dist/index.css', 'element-plus/theme-chalk/display.css','./assets/sass/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins

  modules: ['@element-plus/nuxt']
})

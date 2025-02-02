// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss'
  ],
  build: {
    transpile: [
      'trpc-nuxt'
    ]
  },
  typescript: {
    shim: false
  },
  auth: {
    enableGlobalAppMiddleware: true,
    origin: process.env.NEXTAUTH_URL

  },
  runtimeConfig: {
    mongoUrl: process.env.MONGO_URL
  },
  nitro: {
    plugins: ['~/server/index.ts']
  }

})

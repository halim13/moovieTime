// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: {enabled: true},
  modules: ['@nuxtjs/tailwindcss'],

  alias: {
    assets: "<rootDir>/assets",
  },
  css: [
    "~/assets/main.scss",
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern",
        },
      }
    }
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        baseUrl: './',
      },
    },
  },
  ssr: true,
})
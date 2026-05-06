// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/motion/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.json', dir: 'ltr' },
      { code: 'ar', iso: 'ar-EG', file: 'ar.json', dir: 'rtl' },
    ],
    lazy: true,
    langDir: 'locales',
    defaultLocale: 'ar',
    strategy: 'prefix_except_default',
  },
  colorMode: {
    classSuffix: '',
  },
})



<template>
  <div class="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 dark:selection:bg-blue-900 dark:selection:text-blue-100">
    <Navbar />
    <NuxtPage />
    <FloatingActions />
    <Footer />
  </div>
</template>

<script setup>
const { locale, locales, t } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

useHead({
  title: t('nav.home') + ' | Injaz CTC',
  htmlAttrs: {
    lang: head.value.htmlAttrs.lang,
    dir: head.value.htmlAttrs.dir
  },
  meta: [
    { name: 'description', content: t('about.description') }
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;800;900&display=swap');

body, html, * {
  font-family: 'Tajawal', sans-serif !important;
}

html {
  scroll-behavior: smooth;
}
</style>

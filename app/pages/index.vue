<template>
  <main>
    <Hero />
    <Partners />
    <About />
    <Services />
    <Programs />
    
    <!-- CTA Section -->
    <section class="py-24 relative overflow-hidden">
      <div class="absolute inset-0 bg-blue-600 dark:bg-blue-900"></div>
      <div class="absolute top-0 right-0 w-1/2 h-full bg-indigo-500/20 -skew-x-12 translate-x-1/2"></div>
      
      <div class="container mx-auto px-6 relative z-10 text-center">
        <h2 class="text-4xl md:text-5xl font-bold text-white mb-8">{{ t('cta.title') }}</h2>
        <p class="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
          {{ t('cta.description') }}
        </p>
        <div class="flex flex-wrap justify-center gap-4">
          <button class="px-10 py-4 bg-white text-blue-600 rounded-2xl font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-xl">
            {{ t('cta.register') }}
          </button>
          <button class="px-10 py-4 bg-transparent border-2 border-white/30 text-white rounded-2xl font-bold text-lg hover:bg-white/10 transition-all">
            {{ t('cta.contact') }}
          </button>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
const { t } = useI18n()
</script>

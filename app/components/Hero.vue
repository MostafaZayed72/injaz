<template>
  <section class="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
    <!-- Background Image with Overlay -->
    <div class="absolute inset-0 z-0">
      <img 
        src="/images/hero_official.png" 
        class="w-full h-full object-cover opacity-50"
        alt="Hero Background"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/50 to-slate-950"></div>
    </div>

    <!-- Animated Shapes -->
    <div class="absolute top-1/4 -left-20 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute bottom-1/4 -right-20 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

    <div class="container mx-auto px-6 relative z-10">
      <div class="max-w-3xl">
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 200 } }"
          class="text-5xl md:text-7xl font-extrabold text-white leading-[1.15] mb-6"
        >
          {{ t('hero.title') }} <br />
          <span class="inline-block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-primary-light drop-shadow-sm">
            {{ t('hero.titleAccent') }}
          </span>
        </h1>
        
        <p 
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :enter="{ opacity: 1, y: 0, transition: { duration: 800, delay: 400 } }"
          class="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
        >
          {{ t('hero.description') }}
        </p>

        <div 
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :enter="{ opacity: 1, scale: 1, transition: { duration: 600, delay: 600 } }"
          class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
        >
          <NuxtLink 
            :to="localePath('/programs')"
            class="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white rounded-2xl font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-primary/25 flex items-center justify-center gap-2 group"
          >
            {{ t('hero.ctaPrimary') }}
          </NuxtLink>
          <NuxtLink 
            :to="localePath('/about')"
            class="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 rounded-2xl font-bold text-lg transition-all hover:scale-105 flex items-center justify-center gap-2"
          >
            {{ t('hero.ctaSecondary') }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
      <div class="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center pt-2">
        <div class="w-1 h-2 bg-white rounded-full"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
</script>

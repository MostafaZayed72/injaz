<template>
  <div class="pb-12 bg-white dark:bg-slate-950 min-h-screen">
    <!-- Hero Section -->
    <section class="pt-32 pb-24 bg-slate-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="/images/page_header.png" 
          class="w-full h-full object-cover opacity-20"
          alt="Modern Institutional Office"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-primary/20 to-slate-900"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">{{ t('nav.about') }}</h1>
        <div class="h-1 w-20 bg-primary mx-auto rounded-full mb-8"></div>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {{ t('about.description') }}
        </p>
      </div>
    </section>

    <!-- Detailed Content -->
    <About class="!bg-transparent" />

    <!-- Why Choose Us -->
    <section class="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div class="container mx-auto px-6 text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">{{ t('about.whyTitle') }}</h2>
        <p class="text-slate-500 max-w-2xl mx-auto">{{ t('about.whyDesc') }}</p>
      </div>

      <div class="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div class="p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
          <div class="w-14 h-14 bg-primary/10 dark:bg-primary/30 rounded-2xl flex items-center justify-center text-primary mb-6">
            <AwardIcon class="w-8 h-8" />
          </div>
          <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-4">{{ t('about.features.global') }}</h4>
          <p class="text-slate-500 text-sm leading-relaxed">{{ t('about.features.globalDesc') }}</p>
        </div>

        <div class="p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
          <div class="w-14 h-14 bg-secondary/10 dark:bg-secondary/30 rounded-2xl flex items-center justify-center text-secondary mb-6">
            <UsersIcon class="w-8 h-8" />
          </div>
          <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-4">{{ t('about.features.experts') }}</h4>
          <p class="text-slate-500 text-sm leading-relaxed">{{ t('about.features.expertsDesc') }}</p>
        </div>

        <div class="p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
          <div class="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
            <TrendingUpIcon class="w-8 h-8" />
          </div>
          <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-4">{{ t('about.features.results') }}</h4>
          <p class="text-slate-500 text-sm leading-relaxed">{{ t('about.features.resultsDesc') }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { AwardIcon, UsersIcon, TrendingUpIcon } from 'lucide-vue-next'
const { t } = useI18n()
</script>

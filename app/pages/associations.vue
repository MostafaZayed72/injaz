<template>
  <div class="min-h-screen bg-white dark:bg-slate-950 transition-colors">
    <!-- Premium Header -->
    <section class="pt-32 pb-24 bg-slate-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="/images/page_header.png" 
          class="w-full h-full object-cover opacity-20"
          alt="Associations Header"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-primary/40 to-slate-900"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10 text-center">
        <h1 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0 }"
          class="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight"
        >
          {{ t('associations.title') }}
        </h1>
        <div class="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8"></div>
        <p 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          {{ t('associations.welcome') }}
        </p>
      </div>
    </section>

    <div class="container mx-auto px-6 py-20 lg:py-32">
      <div class="max-w-6xl mx-auto">
        <!-- Intro Section -->
        <div class="grid lg:grid-cols-2 gap-16 items-start mb-32">
          <div class="space-y-8">
            <h2 class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
              {{ t('associations.welcome') }}
            </h2>
            <p class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {{ t('associations.description') }}
            </p>
            <div class="p-8 rounded-[2.5rem] bg-primary/5 border border-primary/10 italic text-primary font-bold text-xl leading-relaxed relative overflow-hidden group">
              <QuoteIcon class="absolute -top-4 -right-4 w-24 h-24 text-primary/5 group-hover:scale-110 transition-transform duration-700" />
              "{{ t('associations.quote') }}"
            </div>
          </div>
          
          <div class="space-y-8 lg:pt-4">
            <div class="p-10 rounded-[3rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {{ locale === 'ar' ? 'خبرتنا المهنية' : 'Our Professional Expertise' }}
              </h3>
              <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                {{ t('associations.expertise') }}
              </p>
              <p class="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {{ t('associations.offer') }}
              </p>
            </div>
          </div>
        </div>

        <!-- Partners Section -->
        <div>
          <div class="text-center mb-16">
            <h2 class="text-4xl font-black text-slate-900 dark:text-white mb-4">
              {{ locale === 'ar' ? 'شركاء النجاح' : 'Our Partners' }}
            </h2>
            <div class="h-1 w-20 bg-primary mx-auto rounded-full"></div>
          </div>

          <div class="grid md:grid-cols-2 gap-12">
            <!-- Dubai Quality Group -->
            <div 
              v-motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :enter="{ opacity: 1, scale: 1 }"
              class="bg-white dark:bg-slate-900 rounded-[3rem] p-16 border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none text-center group hover:border-primary transition-all duration-500"
            >
              <div class="h-40 flex items-center justify-center mb-8 grayscale group-hover:grayscale-0 transition-all duration-500 px-8">
                 <!-- Placeholder for Dubai Quality Group Logo -->
                 <div class="flex flex-col items-center">
                   <div class="w-24 h-24 bg-[#E31E24] rounded-full flex items-center justify-center text-white font-black text-5xl mb-4 shadow-xl shadow-red-500/20">Q</div>
                   <div class="text-slate-900 dark:text-white font-black text-2xl tracking-tighter uppercase">Dubai Quality Group</div>
                 </div>
              </div>
              <h4 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">{{ t('associations.list.dqg.name') }}</h4>
              <p class="text-primary font-bold uppercase tracking-widest text-sm">{{ t('associations.list.dqg.type') }}</p>
            </div>

            <!-- EFQM -->
            <div 
              v-motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :enter="{ opacity: 1, scale: 1, transition: { delay: 200 } }"
              class="bg-white dark:bg-slate-900 rounded-[3rem] p-16 border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none text-center group hover:border-primary transition-all duration-500"
            >
              <div class="h-40 flex items-center justify-center mb-8 grayscale group-hover:grayscale-0 transition-all duration-500 px-12">
                 <!-- Placeholder for EFQM Logo -->
                 <div class="flex flex-col items-center">
                   <div class="w-32 h-20 bg-slate-900 dark:bg-white rounded-2xl flex items-center justify-center text-white dark:text-slate-900 font-black text-3xl shadow-xl shadow-slate-900/10 mb-4">EFQM</div>
                   <div class="text-xs font-bold text-slate-400 uppercase tracking-widest">Global Excellence</div>
                 </div>
              </div>
              <h4 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">{{ t('associations.list.efqm.name') }}</h4>
              <p class="text-primary font-bold uppercase tracking-widest text-sm">{{ t('associations.list.efqm.type') }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { QuoteIcon } from 'lucide-vue-next'

const { t, locale } = useI18n()
</script>

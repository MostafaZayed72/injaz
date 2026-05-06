<template>
  <section id="about" class="py-24 bg-white dark:bg-slate-950 overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="flex flex-col lg:flex-row items-center gap-16">
        <!-- Visual Side -->
        <div 
          v-motion-slide-visible-left
          class="lg:w-1/2 relative"
        >
          <div class="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?auto=format&fit=crop&q=80&w=1000" 
              alt="Professional Workspace"
              class="w-full h-auto"
            />
          </div>
          <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl z-0"></div>
          <div class="absolute -top-10 -left-10 w-48 h-48 bg-indigo-600/10 rounded-full blur-3xl z-0"></div>
          
          <!-- Experience Badge -->
          <div class="absolute bottom-10 left-10 z-20 glass p-6 rounded-2xl shadow-xl">
            <div class="text-4xl font-extrabold text-blue-600 mb-1">15+</div>
            <div class="text-sm font-semibold text-slate-600 dark:text-slate-300">
              {{ t('about.yearsExp') }}
            </div>
          </div>
        </div>

        <!-- Content Side -->
        <div 
          v-motion-slide-visible-right
          class="lg:w-1/2"
        >
          <h2 class="text-blue-600 font-bold tracking-wider uppercase text-sm mb-3">{{ t('about.subtitle') }}</h2>
          <h3 class="text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            {{ t('about.title') }} <span class="text-gradient">{{ t('about.titleAccent') }}</span>
          </h3>
          <p class="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            {{ t('about.description') }}
          </p>

          <div class="grid sm:grid-cols-2 gap-6">
            <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                <TargetIcon class="w-6 h-6" />
              </div>
              <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{{ t('about.vision') }}</h4>
              <p class="text-sm text-slate-500 dark:text-slate-400">
                {{ t('about.visionDesc') }}
              </p>
            </div>
            <div class="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
              <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 mb-4">
                <CompassIcon class="w-6 h-6" />
              </div>
              <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{{ t('about.mission') }}</h4>
              <p class="text-sm text-slate-500 dark:text-slate-400">
                {{ t('about.missionDesc') }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { TargetIcon, CompassIcon } from 'lucide-vue-next'
const { t } = useI18n()
</script>

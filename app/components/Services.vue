<template>
  <section id="services" class="py-24 bg-slate-50 dark:bg-slate-900 transition-colors">
    <div class="container mx-auto px-6">
      <div class="text-center max-w-2xl mx-auto mb-16">
        <h2 
          v-motion-slide-visible-bottom
          class="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6"
        >
          {{ t('services.homeTitle') }} <span class="text-primary">{{ t('services.homeTitleAccent') }}</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(service, idx) in services" 
          :key="service.key"
          v-motion
          :initial="{ opacity: 0, y: 50 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: idx * 200 } }"
          class="group p-8 bg-white dark:bg-slate-800 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-slate-100 dark:border-slate-700"
        >
          <div :class="`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-white` ">
            <component :is="service.icon" class="w-8 h-8" />
          </div>
          <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            {{ t(`services.${service.key}.title`) }}
          </h3>
          <p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
            {{ t(`services.${service.key}.homeDesc`) }}
          </p>
          <NuxtLink 
            :to="localePath({ path: '/services', query: { s: service.key } })"
            class="block w-full text-center py-3 rounded-xl border border-slate-200 dark:border-slate-700 font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            {{ t('services.learnMore') }}
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  GraduationCapIcon, 
  CpuIcon, 
  GlobeIcon 
} from 'lucide-vue-next'

const { t } = useI18n()
const localePath = useLocalePath()

const services = [
  {
    key: 'training',
    bg: 'bg-primary shadow-primary/20 dark:shadow-none',
    icon: GraduationCapIcon
  },
  {
    key: 'it',
    bg: 'bg-secondary shadow-secondary/20 dark:shadow-none',
    icon: CpuIcon
  },
  {
    key: 'online',
    bg: 'bg-emerald-500 shadow-emerald-200 dark:shadow-none',
    icon: GlobeIcon
  }
]
</script>

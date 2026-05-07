<template>
  <section id="programs" class="py-24 bg-slate-50 dark:bg-slate-900">
    <div class="container mx-auto px-6">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div class="max-w-2xl">
          <h2 class="text-primary font-bold tracking-wider uppercase text-sm mb-3">{{ t('programs.subtitle') }}</h2>
          <h3 class="text-4xl font-bold text-slate-900 dark:text-white">
            {{ t('programs.title') }} <span class="text-gradient">{{ t('programs.titleAccent') }}</span>
          </h3>
        </div>
        <NuxtLink :to="localePath('/programs')" class="text-primary font-bold flex items-center hover:translate-x-2 transition-transform group">
          <span class="rtl:order-2">{{ t('programs.viewAll') }}</span>
          <ArrowRightIcon class="ml-2 rtl:ml-0 rtl:mr-2 w-5 h-5 rtl:rotate-180 rtl:order-1" />
        </NuxtLink>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div 
          v-for="(cat, idx) in categories" 
          :key="cat.name"
          v-motion
          :initial="{ opacity: 0, scale: 0.9 }"
          :visible="{ opacity: 1, scale: 1, transition: { delay: idx * 100 } }"
          class="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-800 p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700"
        >
          <NuxtLink :to="localePath('/programs')" class="relative z-10">
            <div :class="`w-12 h-12 rounded-xl ${cat.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-current/20` ">
              <component :is="cat.icon" class="w-6 h-6" />
            </div>
            <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{{ t(`programs.categories.${cat.key}`) }}</h4>
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-6 line-clamp-2">
              {{ t(`programs.descriptions.${cat.key}`) }}
            </p>
            <div class="flex items-center text-primary font-bold text-sm">
              {{ t('programs.explore') }} <ChevronRightIcon class="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform rtl:rotate-180" />
            </div>
          </NuxtLink>
          
          <!-- Background Decoration -->
          <div class="absolute -right-10 -bottom-10 w-32 h-32 bg-slate-50 dark:bg-slate-700/30 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  BriefcaseIcon, 
  UsersIcon, 
  BanknoteIcon, 
  ClockIcon,
  TrendingUpIcon,
  VideoIcon,
  LaptopIcon,
  MessageSquareIcon,
  GlobeIcon,
  ArrowRightIcon,
  ChevronRightIcon
} from 'lucide-vue-next'

const { t } = useI18n()
const localePath = useLocalePath()

const categories = [
  { key: 'management', icon: BriefcaseIcon, color: 'bg-primary' },
  { key: 'worklife', icon: ClockIcon, color: 'bg-indigo-600' },
  { key: 'business', icon: TrendingUpIcon, color: 'bg-emerald-600' },
  { key: 'media', icon: VideoIcon, color: 'bg-orange-600' },
  { key: 'hr', icon: UsersIcon, color: 'bg-slate-600' },
  { key: 'finance', icon: BanknoteIcon, color: 'bg-cyan-600' },
  { key: 'it', icon: LaptopIcon, color: 'bg-blue-600' },
  { key: 'customer', icon: MessageSquareIcon, color: 'bg-pink-600' },
  { key: 'languages', icon: GlobeIcon, color: 'bg-yellow-600' }
]
</script>

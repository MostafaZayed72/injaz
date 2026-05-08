<template>
  <section id="about" class="py-24 bg-white dark:bg-slate-950 overflow-hidden">
    <div class="container mx-auto px-6">
      <div class="flex flex-col lg:flex-row items-start gap-16 mb-20">
        <!-- Visual Side -->
        <div 
          v-motion-slide-visible-left
          class="lg:w-1/2 relative"
        >
          <div class="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/images/corporate_meeting_men.png" 
              alt="Professional Institutional Meeting"
              class="w-full h-auto"
            />
          </div>
          <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl z-0"></div>
          
          <!-- Experience Badge -->
          <div class="absolute bottom-10 left-10 z-20 bg-white dark:bg-slate-900 p-6 rounded-2xl shadow-2xl border-l-4 border-primary">
            <div class="text-4xl font-extrabold text-primary mb-1">15+</div>
            <div class="text-sm font-bold text-slate-900 dark:text-white">
              {{ t('about.yearsExp') }}
            </div>
          </div>
        </div>

        <!-- Content Side -->
        <div 
          v-motion-slide-visible-right
          class="lg:w-1/2"
        >
          <h2 class="text-primary font-bold tracking-wider uppercase text-sm mb-3">{{ t('about.subtitle') }}</h2>
          <h3 class="text-4xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            {{ t('about.title') }} <span class="text-gradient">{{ t('about.titleAccent') }}</span>
          </h3>
          <p class="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
            {{ t('about.description') }}
          </p>

          <div class="space-y-8">
            <div>
              <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center">
                <div class="w-2 h-8 bg-primary mr-3 rtl:mr-0 rtl:ml-3 rounded-full"></div>
                {{ t('about.approachTitle') }}
              </h4>
              <p class="text-slate-500 dark:text-slate-400 mb-6">
                {{ t('about.approachDesc') }}
              </p>
              <div class="grid grid-cols-2 gap-4">
                <div v-for="(val, key) in approachItems" :key="key" class="flex items-center p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                  <div class="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mr-3 rtl:mr-0 rtl:ml-3">
                    <CheckIcon class="w-4 h-4" />
                  </div>
                  <span class="font-bold text-slate-700 dark:text-slate-300 text-sm">{{ t(`about.approachItems.${key}`) }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Vision/Mission/Goal Cards -->
      <div class="grid md:grid-cols-3 gap-8">
        <div 
          v-for="(item, idx) in coreValues" 
          :key="item.key"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible="{ opacity: 1, y: 0, transition: { delay: idx * 150 } }"
          class="p-8 rounded-[2rem] bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group"
        >
          <div :class="`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-current/20` ">
            <component :is="item.icon" class="w-7 h-7" />
          </div>
          <h4 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">{{ t(`about.${item.key}`) }}</h4>
          <p class="text-slate-500 dark:text-slate-400 leading-relaxed">
            {{ t(`about.${item.key}Desc`) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  TargetIcon, 
  CompassIcon, 
  FlagIcon,
  CheckIcon
} from 'lucide-vue-next'

const { t } = useI18n()

const approachItems = {
  consulting: 'consulting',
  training: 'training',
  coaching: 'coaching',
  workshops: 'workshops'
}

const coreValues = [
  { key: 'vision', icon: CompassIcon, bg: 'bg-primary' },
  { key: 'mission', icon: TargetIcon, bg: 'bg-secondary' },
  { key: 'goal', icon: FlagIcon, bg: 'bg-primary-light' }
]
</script>

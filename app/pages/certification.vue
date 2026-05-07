<template>
  <div class="min-h-screen bg-white dark:bg-slate-950 transition-colors">
    <!-- Premium Header -->
    <section class="pt-32 pb-24 bg-slate-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="/images/page_header.png" 
          class="w-full h-full object-cover opacity-20"
          alt="Certification Header"
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
          {{ t('nav.certification') }}
        </h1>
        <div class="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8"></div>
        <p 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          {{ locale === 'ar' ? 'ارتقِ بمستقبلك المهني من خلال الحصول على شهادات معتمدة دولياً تفتح لك آفاقاً جديدة في سوق العمل العالمي.' : 'Elevate your professional future by obtaining internationally accredited certifications that open new horizons in the global job market.' }}
        </p>
      </div>
    </section>

    <div class="container mx-auto px-6 py-20 lg:py-32">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center">
          <!-- Text Content -->
          <div class="space-y-10">
            <div>
              <h2 class="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4">
                {{ locale === 'ar' ? 'المستقبل المهني' : 'Career Progression' }}
              </h2>
              <h3 class="text-3xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight">
                {{ t('certification.overview.title') }}
              </h3>
            </div>
            
            <p class="text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
              {{ t('certification.overview.description') }}
            </p>

            <div class="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm">
              <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-4">
                {{ locale === 'ar' ? 'بالتعاون الاستراتيجي مع' : 'In Strategic Collaboration With' }}
              </h4>
              <p class="text-2xl font-black text-primary">
                Milestones Management Training & Consultancy
              </p>
              <p class="mt-4 text-slate-500 font-medium">
                {{ locale === 'ar' ? 'مزود رائد للبرامج التدريبية والشهادات المهنية المعتمدة دولياً.' : 'A leading provider of internationally renowned training programs and professional certifications.' }}
              </p>
            </div>
          </div>

          <!-- Certificates Grid -->
          <div class="grid sm:grid-cols-2 gap-6">
            <div 
              v-for="(cert, idx) in certificationList" 
              :key="idx"
              v-motion
              :initial="{ opacity: 0, scale: 0.9 }"
              :enter="{ opacity: 1, scale: 1, transition: { delay: idx * 100 } }"
              class="group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-none hover:border-primary transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <AwardIcon class="w-8 h-8" />
              </div>
              <h4 class="text-xl font-black text-slate-900 dark:text-white leading-tight group-hover:text-primary transition-colors">
                {{ cert }}
              </h4>
            </div>
          </div>
        </div>

        <!-- Bottom CTA -->
        <div class="mt-32 p-12 md:p-20 rounded-[3.5rem] bg-slate-900 text-white relative overflow-hidden text-center">
          <div class="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 translate-x-1/2"></div>
          <div class="relative z-10 max-w-3xl mx-auto">
            <h3 class="text-3xl md:text-5xl font-bold mb-8">{{ t('cta.title') }}</h3>
            <p class="text-xl text-slate-400 mb-12">{{ t('cta.description') }}</p>
            <NuxtLink :to="localePath('/contact')" class="inline-flex items-center gap-4 px-12 py-5 bg-primary text-white rounded-2xl font-bold text-xl hover:bg-primary-dark transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/40">
              {{ t('nav.getStarted') }}
              <ArrowRightIcon v-if="locale !== 'ar'" class="w-6 h-6" />
              <ArrowLeftIcon v-else class="w-6 h-6" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { AwardIcon, ArrowRightIcon, ArrowLeftIcon } from 'lucide-vue-next'

const { t, locale, tm, rt } = useI18n()
const localePath = useLocalePath()

const certificationList = computed(() => {
  const res = tm('certification.overview.objectives')
  if (!Array.isArray(res)) return []
  return res.map(item => rt(item))
})
</script>

<style scoped>
.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500;
}
</style>

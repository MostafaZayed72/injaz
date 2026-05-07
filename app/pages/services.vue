<template>
  <div class="min-h-screen bg-white dark:bg-slate-950 transition-colors">
    <!-- Premium Header -->
    <section class="pt-32 pb-24 bg-slate-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="/images/page_header.png" 
          class="w-full h-full object-cover opacity-20"
          alt="Services Header"
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
          {{ t('nav.services') }}
        </h1>
        <div class="h-1.5 w-24 bg-primary mx-auto rounded-full mb-8"></div>
        <p 
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 200 } }"
          class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed font-medium"
        >
          {{ locale === 'ar' ? 'نقدم مجموعة متكاملة من الخدمات الاستشارية والتقنية المصممة خصيصاً لدعم نمو مؤسستك ورفع كفاءة كوادرها.' : 'We provide a comprehensive range of consultancy and technical services tailored specifically to support your organization\'s growth and workforce efficiency.' }}
        </p>
      </div>
    </section>

    <!-- Services Content -->
    <div class="container mx-auto px-6 py-20 lg:py-32">
      <div class="flex flex-col lg:flex-row gap-16">
        <!-- Sticky Sidebar Navigation -->
        <aside class="lg:w-1/3 xl:w-1/4">
          <div class="sticky top-32 space-y-4">
            <h2 class="text-xs font-bold text-primary uppercase tracking-[0.2em] mb-4 px-4">
              {{ locale === 'ar' ? 'استكشف خدماتنا' : 'Explore Services' }}
            </h2>
            <div class="bg-slate-50 dark:bg-slate-900/50 rounded-[2.5rem] p-4 border border-slate-100 dark:border-slate-800 shadow-sm backdrop-blur-xl">
              <nav class="space-y-2">
                <button 
                  v-for="(catName, catKey) in categories" 
                  :key="catKey"
                  @click="activeCategory = catKey"
                  class="w-full group flex items-center justify-between p-5 rounded-2xl transition-all duration-300 font-bold text-lg"
                  :class="[activeCategory === catKey ? 'bg-primary text-white shadow-xl shadow-primary/25 scale-[1.02]' : 'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-primary']"
                >
                  <div class="flex items-center gap-4">
                    <div 
                      class="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
                      :class="[activeCategory === catKey ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-800 group-hover:bg-primary/10 group-hover:text-primary']"
                    >
                      <component :is="getIcon(catKey)" class="w-5 h-5" />
                    </div>
                    <span>{{ catName }}</span>
                  </div>
                  <ChevronLeftIcon v-if="locale === 'ar' && activeCategory !== catKey" class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  <ChevronRightIcon v-if="locale !== 'ar' && activeCategory !== catKey" class="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all translate-x-2 group-hover:translate-x-0" />
                </button>
              </nav>
            </div>

            <!-- Side CTA Card -->
            <div class="mt-8 p-8 rounded-[2.5rem] bg-gradient-to-br from-primary to-indigo-700 text-white shadow-2xl shadow-primary/20 overflow-hidden relative group">
              <div class="absolute -top-12 -right-12 w-32 h-32 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <h3 class="text-2xl font-bold mb-4 relative z-10">{{ t('cta.title') }}</h3>
              <p class="text-white/80 mb-6 relative z-10 leading-relaxed">{{ t('cta.description') }}</p>
              <NuxtLink :to="localePath('/contact')" class="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all relative z-10 hover:scale-105 active:scale-95">
                {{ t('cta.contact') }}
                <ArrowRightIcon v-if="locale !== 'ar'" class="w-5 h-5" />
                <ArrowLeftIcon v-else class="w-5 h-5" />
              </NuxtLink>
            </div>
          </div>
        </aside>

        <!-- Dynamic Content Area -->
        <main class="lg:w-2/3 xl:w-3/4">
          <Transition name="page-fade" mode="out-in">
            <div :key="activeCategory" class="space-y-16">
              <!-- Service Detail Card -->
              <div class="bg-white dark:bg-slate-900 rounded-[3.5rem] overflow-hidden border border-slate-100 dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-none">
                <!-- Image Section with Gradient Overlay -->
                <div class="relative h-[400px] md:h-[500px] overflow-hidden">
                  <img 
                    :src="activeImage" 
                    class="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
                    :alt="t(`services.${activeCategory}.title`)"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  <div class="absolute bottom-12 left-12 right-12">
                    <div class="flex items-center gap-4 mb-4">
                      <div class="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/40">
                        <component :is="activeIcon" class="w-6 h-6" />
                      </div>
                      <span class="text-white font-bold tracking-widest uppercase text-sm opacity-80">{{ t('nav.services') }}</span>
                    </div>
                    <h2 class="text-4xl md:text-6xl font-black text-white leading-tight">
                      {{ t(`services.${activeCategory}.title`) }}
                    </h2>
                  </div>
                </div>

                <div class="p-8 md:p-16">
                  <div class="grid lg:grid-cols-2 gap-16">
                    <!-- Text Content -->
                    <div class="space-y-8">
                      <div>
                        <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                          {{ locale === 'ar' ? 'حول الخدمة' : 'About the Service' }}
                        </h3>
                        <p class="text-xl text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
                          {{ t(`services.${activeCategory}.description`) }}
                        </p>
                      </div>

                      <div class="pt-8 border-t border-slate-100 dark:border-slate-800">
                        <NuxtLink :to="localePath('/contact')" class="inline-flex items-center gap-4 px-10 py-5 bg-primary text-white rounded-2xl font-bold text-lg hover:bg-primary-dark transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/25">
                          {{ locale === 'ar' ? 'اطلب استشارة مجانية' : 'Request Free Consultation' }}
                          <component :is="locale === 'ar' ? ArrowLeftIcon : ArrowRightIcon" class="w-5 h-5" />
                        </NuxtLink>
                      </div>
                    </div>

                    <!-- Features Grid -->
                    <div>
                      <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-4">
                        <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                          <CheckCircleIcon class="w-6 h-6" />
                        </div>
                        {{ locale === 'ar' ? 'لماذا تختار إنجاز؟' : 'Why Choose Injaz?' }}
                      </h3>
                      <div class="grid gap-6">
                        <div 
                          v-for="(feature, idx) in featuresList" 
                          :key="idx"
                          v-motion
                          :initial="{ opacity: 0, x: 20 }"
                          :enter="{ opacity: 1, x: 0, transition: { delay: idx * 100 } }"
                          class="flex items-start gap-4 p-6 rounded-[2rem] bg-slate-50 dark:bg-slate-950/50 border border-slate-100 dark:border-slate-800/50 group hover:border-primary/40 transition-all hover:shadow-lg"
                        >
                          <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                            <CheckIcon class="w-4 h-4" />
                          </div>
                          <span class="text-slate-800 dark:text-slate-200 font-bold text-lg leading-relaxed">
                            {{ feature }}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </main>
      </div>
    </div>
  </div>
</template>

<script setup>
import { 
  GraduationCapIcon, 
  CpuIcon, 
  GlobeIcon,
  ShieldCheckIcon,
  CheckIcon,
  CheckCircleIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
  ArrowRightIcon,
  ArrowLeftIcon
} from 'lucide-vue-next'

const { t, locale, tm, rt } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

const activeCategory = ref('training')

const categories = computed(() => ({
  training: t('services.training.title'),
  it: t('services.it.title'),
  online: t('services.online.title'),
  psychometric: t('services.psychometric.title')
}))

const getIcon = (key) => {
  const icons = {
    training: GraduationCapIcon,
    it: CpuIcon,
    online: GlobeIcon,
    psychometric: ShieldCheckIcon
  }
  return icons[key]
}

const activeIcon = computed(() => getIcon(activeCategory.value))

const activeImage = computed(() => {
  const images = {
    training: '/training_service_v2_1778181244893.png',
    it: '/it_solutions_v2_1778181258083.png',
    online: '/online_education_v2_1778181271478.png',
    psychometric: '/psychometric_test_v2_1778181285529.png'
  }
  return images[activeCategory.value]
})

const featuresList = computed(() => {
  const res = tm(`services.${activeCategory.value}.features`)
  if (!Array.isArray(res)) return []
  return res.map(item => rt(item))
})

// Initialize from query if present
onMounted(() => {
  if (route.query.s && categories.value[route.query.s]) {
    activeCategory.value = route.query.s
  }
})

// Handle category changes via URL query if needed
watch(() => route.query.s, (newS) => {
  if (newS && categories.value[newS]) {
    activeCategory.value = newS
  }
})
</script>

<style scoped>
.page-fade-enter-active,
.page-fade-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-fade-enter-from {
  opacity: 0;
  transform: translateY(30px) scale(0.98);
}

.page-fade-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(0.98);
}

.text-gradient {
  @apply bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-500;
}
</style>

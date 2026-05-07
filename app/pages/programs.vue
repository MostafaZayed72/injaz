<template>
  <div class="min-h-screen bg-white dark:bg-slate-950">
    <!-- Page Header (Fixed Header visibility issue) -->
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
        <h1 class="text-4xl md:text-6xl font-bold mb-6">{{ t('nav.programs') }}</h1>
        <div class="h-1 w-20 bg-primary mx-auto rounded-full mb-8"></div>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {{ locale === 'ar' ? 'استكشف برامجنا التدريبية المتخصصة والمصممة لتطوير مهاراتك القيادية والمهنية.' : 'Explore our specialized training programs designed to develop your leadership and professional skills.' }}
        </p>
      </div>
    </section>

    <div class="container mx-auto px-6 py-20">
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Mobile Sidebar Trigger -->
        <div class="lg:hidden">
          <button 
            @click="isMobileMenuOpen = true"
            class="w-full flex items-center justify-between p-6 bg-primary text-white rounded-3xl font-bold shadow-xl shadow-primary/20"
          >
            <div class="flex items-center gap-3">
              <MenuIcon class="w-6 h-6" />
              <span>{{ categories[activeCategory] }}</span>
            </div>
            <ChevronDownIcon class="w-5 h-5" />
          </button>
        </div>

        <!-- Sidebar Navigation (Desktop) -->
        <aside class="hidden lg:block lg:w-1/3 xl:w-1/4">
          <div class="sticky top-32 bg-slate-50 dark:bg-slate-900 rounded-[2rem] p-8 border border-slate-100 dark:border-slate-800 shadow-sm">
            <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-8 border-b border-slate-200 dark:border-slate-800 pb-4">
              {{ t('programs.subtitle') }}
            </h2>
            
            <nav class="space-y-2">
              <div v-for="(catName, catKey) in categories" :key="catKey" class="group">
                <button 
                  @click="activeCategory = catKey"
                  class="w-full text-right rtl:text-right ltr:text-left flex items-center justify-between p-4 rounded-xl transition-all font-bold"
                  :class="[activeCategory === catKey ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-600 dark:text-slate-400 hover:bg-white dark:hover:bg-slate-800 hover:text-primary']"
                >
                  <span>{{ catName }}</span>
                  <ChevronLeftIcon v-if="locale === 'ar'" class="w-4 h-4 transition-transform group-hover:-translate-x-1" :class="{'rotate-180': activeCategory === catKey}" />
                  <ChevronRightIcon v-else class="w-4 h-4 transition-transform group-hover:translate-x-1" :class="{'rotate-180': activeCategory === catKey}" />
                </button>
                
                <!-- Sub Menu -->
                <div v-if="activeCategory === catKey && subCategories[catKey]" class="mt-2 mr-4 rtl:mr-4 ltr:ml-4 space-y-1">
                  <button 
                    v-for="sub in subCategories[catKey]"
                    :key="sub.id"
                    @click="activeSub = sub.id"
                    class="w-full text-right rtl:text-right ltr:text-left p-3 rounded-lg text-sm font-semibold transition-colors"
                    :class="[activeSub === sub.id ? 'text-primary' : 'text-slate-500 hover:text-primary']"
                  >
                    {{ sub.name }}
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </aside>

        <!-- Main Content Area -->
        <main class="lg:w-2/3 xl:w-3/4">
          <Transition name="fade" mode="out-in">
            <div :key="activeSub" class="bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 dark:border-slate-800 shadow-xl">
              <div v-if="activeSub !== 'none'">
                <div class="mb-10">
                  <h1 class="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                    {{ activeProgramContent.title }}
                  </h1>
                  <div class="h-1.5 w-24 bg-primary rounded-full mb-10"></div>
                  
                  <p class="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
                    {{ activeProgramContent.description }}
                  </p>
                </div>

                <div v-if="objectivesList.length > 0" class="space-y-12">
                  <div>
                    <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center gap-3">
                      <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <TargetIcon class="w-6 h-6" />
                      </div>
                      {{ locale === 'ar' ? 'أهداف الورشة' : 'Workshop Objectives' }}
                    </h3>
                    <div class="grid gap-6">
                      <div 
                        v-for="(objective, idx) in objectivesList" 
                        :key="idx"
                        class="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 group hover:border-primary/30 transition-colors"
                      >
                        <div class="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-primary mt-1 shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          <CheckIcon class="w-3 h-3" />
                        </div>
                        <span class="text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
                          {{ objective }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Placeholder for other categories -->
              <div v-else class="flex flex-col items-center justify-center py-20 text-center">
                <div class="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center text-slate-400 mb-6">
                  <InfoIcon class="w-10 h-10" />
                </div>
                <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {{ locale === 'ar' ? 'محتوى قادم قريباً' : 'Content Coming Soon' }}
                </h2>
                <p class="text-slate-500 max-w-md">
                  {{ locale === 'ar' ? 'نحن نعمل حالياً على إضافة تفاصيل هذا البرنامج. يرجى التواصل معنا للحصول على مزيد من المعلومات.' : 'We are currently adding details for this program. Please contact us for more information.' }}
                </p>
              </div>
            </div>
          </Transition>
        </main>
      </div>
    </div>

    <!-- Mobile Sidebar Drawer -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="isMobileMenuOpen" class="fixed inset-0 z-[60] bg-slate-950/50 backdrop-blur-sm lg:hidden" @click="isMobileMenuOpen = false"></div>
    </Transition>

    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="translate-y-full"
      enter-to-class="translate-y-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="translate-y-0"
      leave-to-class="translate-y-full"
    >
      <div v-if="isMobileMenuOpen" class="fixed bottom-0 left-0 right-0 z-[70] bg-white dark:bg-slate-900 rounded-t-[3rem] p-8 lg:hidden max-h-[80vh] overflow-y-auto">
        <div class="w-12 h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full mx-auto mb-8"></div>
        <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-8">{{ t('programs.subtitle') }}</h2>
        
        <nav class="space-y-3">
          <div v-for="(catName, catKey) in categories" :key="catKey">
            <button 
              @click="activeCategory = catKey"
              class="w-full text-right rtl:text-right ltr:text-left flex items-center justify-between p-5 rounded-2xl transition-all font-bold"
              :class="[activeCategory === catKey ? 'bg-primary text-white' : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300']"
            >
              <span>{{ catName }}</span>
              <ChevronDownIcon class="w-5 h-5 transition-transform" :class="{'rotate-180': activeCategory === catKey}" />
            </button>
            
            <div v-if="activeCategory === catKey && subCategories[catKey]" class="mt-2 space-y-2 mr-4">
              <button 
                v-for="sub in subCategories[catKey]"
                :key="sub.id"
                @click="selectSub(sub.id)"
                class="w-full text-right rtl:text-right ltr:text-left p-4 rounded-xl text-lg font-bold border border-slate-100 dark:border-slate-800"
                :class="[activeSub === sub.id ? 'text-primary bg-primary/5 border-primary/20' : 'text-slate-600 dark:text-slate-400']"
              >
                {{ sub.name }}
              </button>
            </div>
            <div v-else-if="activeCategory === catKey" class="mt-2">
               <button 
                @click="isMobileMenuOpen = false"
                class="w-full text-right rtl:text-right ltr:text-left p-4 rounded-xl text-lg font-bold bg-slate-50 dark:bg-slate-800 text-slate-400 italic"
              >
                {{ locale === 'ar' ? 'قريباً...' : 'Coming Soon...' }}
              </button>
            </div>
          </div>
        </nav>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { 
  ChevronLeftIcon, 
  ChevronRightIcon, 
  ChevronDownIcon,
  TargetIcon, 
  CheckIcon,
  InfoIcon,
  MenuIcon,
  XIcon
} from 'lucide-vue-next'

const { t, locale, tm, rt } = useI18n()

const activeCategory = ref('management')
const activeSub = ref('leadingTeams')
const isMobileMenuOpen = ref(false)

// Dynamic content based on selection
const activeProgramContent = computed(() => {
  if (activeSub.value === 'none') return {}
  return {
    title: t(`programs.${activeCategory.value}.${activeSub.value}.title`),
    description: t(`programs.${activeCategory.value}.${activeSub.value}.description`)
  }
})

// Fixed objectives retrieval
const objectivesList = computed(() => {
  if (activeSub.value === 'none') return []
  const res = tm(`programs.${activeCategory.value}.${activeSub.value}.objectives`)
  if (!Array.isArray(res)) return []
  return res.map(item => rt(item))
})

const selectSub = (id) => {
  activeSub.value = id
  isMobileMenuOpen.value = false
}

// Computed properties to keep reactive translations
const categories = computed(() => ({
  management: t('programs.categories.management'),
  worklife: t('programs.categories.worklife'),
  business: t('programs.categories.business'),
  media: t('programs.categories.media'),
  hr: t('programs.categories.hr'),
  finance: t('programs.categories.finance'),
  it: t('programs.categories.it'),
  customer: t('programs.categories.customer'),
  languages: t('programs.categories.languages')
}))

const subCategories = computed(() => ({
  management: [
    { id: 'leadingTeams', name: t('programs.management.leadingTeams.title') },
    { id: 'managementSkills', name: t('programs.management.managementSkills.title') },
    { id: 'strategicPlanning', name: t('programs.management.strategicPlanning.title') },
    { id: 'changeManagement', name: t('programs.management.changeManagement.title') },
    { id: 'problemSolving', name: t('programs.management.problemSolving.title') },
    { id: 'coachingPerformance', name: t('programs.management.coachingPerformance.title') }
  ],
  worklife: [
    { id: 'personalDev', name: t('programs.worklife.personalDev.title') },
    { id: 'stressManagement', name: t('programs.worklife.stressManagement.title') },
    { id: 'creativeThinking', name: t('programs.worklife.creativeThinking.title') },
    { id: 'emotionalIntelligence', name: t('programs.worklife.emotionalIntelligence.title') },
    { id: 'bodyLanguage', name: t('programs.worklife.bodyLanguage.title') }
  ]
}))

// Watch category change to reset sub
watch(activeCategory, (newCat) => {
  if (subCategories.value[newCat]) {
    activeSub.value = subCategories.value[newCat][0].id
  } else {
    activeSub.value = 'none'
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>

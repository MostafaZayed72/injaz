<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[scrolled ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl py-3 shadow-xl border-b border-slate-200 dark:border-slate-800' : 'bg-transparent py-5']"
  >
    <div class="container mx-auto px-6 flex items-center justify-between">
      <!-- Logo with Fixed White Background -->
      <NuxtLink to="/" class="relative group">
        <div class="relative px-4 py-2 bg-white backdrop-blur-md rounded-xl border-2 border-blue-500/20 shadow-lg shadow-blue-500/5">
          <img src="/logo.png" alt="Injaz CTC Logo" class="h-12 w-auto transition-all group-hover:scale-105" />
        </div>
      </NuxtLink>

      <!-- Desktop Nav -->
      <div class="hidden lg:flex items-center gap-x-12">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.name"
          :to="link.href"
          class="text-sm font-medium hover:text-blue-500 transition-colors"
          :class="[scrolled ? 'text-slate-600 dark:text-slate-300' : 'text-white/90']"
        >
          {{ t(`nav.${link.key}`) }}
        </NuxtLink>
      </div>

      <!-- Actions -->
      <div class="flex items-center space-x-2 md:space-x-4">
        <!-- Language Switcher -->
        <button 
          @click="setLocale(locale === 'ar' ? 'en' : 'ar')"
          class="px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-xs font-bold transition-all hover:bg-slate-50 dark:hover:bg-slate-800"
          :class="[scrolled ? 'text-slate-900 dark:text-white' : 'text-white border-white/20 hover:bg-white/10']"
        >
          {{ locale === 'ar' ? 'EN' : 'العربية' }}
        </button>

        <ClientOnly>
          <button 
            @click="toggleColorMode"
            class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-blue-500"
          >
            <SunIcon v-if="colorMode.value === 'dark'" class="w-5 h-5" />
            <MoonIcon v-else class="w-5 h-5" />
          </button>
        </ClientOnly>
        
        <button class="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-blue-500/30">
          {{ t('nav.getStarted') }}
        </button>


        <!-- Burger Menu Button -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="lg:hidden p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          :class="[scrolled ? 'text-slate-900 dark:text-white' : 'text-white']"
        >
          <MenuIcon v-if="!isMenuOpen" class="w-6 h-6" />
          <XIcon v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Menu Overlay -->
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 translate-x-full"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 translate-x-full"
    >
      <div v-if="isMenuOpen" class="fixed inset-0 z-[100] lg:hidden bg-white dark:bg-slate-950 p-6 flex flex-col overflow-y-auto">
        <!-- Close & Header -->
        <div class="flex items-center justify-between mb-12">
          <img src="/logo.png" alt="Injaz Logo" class="h-10 w-auto" />
          <button 
            @click="isMenuOpen = false"
            class="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
          >
            <XIcon class="w-6 h-6" />
          </button>
        </div>

        <div class="flex flex-col space-y-4">
          <template v-for="link in navLinks" :key="link.name">
            <NuxtLink 
              :to="link.href"
              @click="isMenuOpen = false"
              class="text-3xl font-bold text-slate-900 dark:text-white hover:text-blue-500 transition-colors py-2 border-b border-slate-50 dark:border-slate-900"
            >
              {{ t(`nav.${link.key}`) }}
            </NuxtLink>
          </template>
        </div>

        <!-- Mobile Controls -->
        <div class="mt-auto pt-10 space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <button 
              @click="setLocale(locale === 'ar' ? 'en' : 'ar')"
              class="flex items-center justify-center gap-3 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 font-bold text-slate-900 dark:text-white"
            >
              <GlobeIcon class="w-5 h-5 text-blue-500" />
              {{ locale === 'ar' ? 'English' : 'العربية' }}
            </button>
            <button 
              @click="toggleColorMode"
              class="flex items-center justify-center gap-3 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 font-bold text-slate-900 dark:text-white"
            >
              <SunIcon v-if="colorMode.value === 'dark'" class="w-5 h-5 text-yellow-500" />
              <MoonIcon v-else class="w-5 h-5 text-indigo-500" />
              {{ colorMode.value === 'dark' ? 'Light' : 'Dark' }}
            </button>
          </div>
          
          <button class="w-full bg-blue-600 text-white py-5 rounded-2xl font-bold text-xl shadow-xl shadow-blue-500/30">
            {{ t('nav.getStarted') }}
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { SunIcon, MoonIcon, MenuIcon, XIcon, GlobeIcon } from 'lucide-vue-next'

const { locale, setLocale, t } = useI18n()
const colorMode = useColorMode()
const scrolled = ref(false)
const isMenuOpen = ref(false)

// Re-calculate direction when locale changes
watch(locale, (newLocale) => {
  if (process.client) {
    document.documentElement.dir = newLocale === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = newLocale
  }
}, { immediate: true })

const navLinks = [
  { name: 'Home', href: '/', key: 'home' },
  { name: 'About', href: '/about', key: 'about' },
  { name: 'Programs', href: '/#programs', key: 'programs' },
  { name: 'Services', href: '/#services', key: 'services' },
  { name: 'Contact', href: '/contact', key: 'contact' },
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 20
  })
})

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

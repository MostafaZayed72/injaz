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
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-x-full"
      enter-to-class="translate-x-0"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="translate-x-0"
      leave-to-class="translate-x-full"
    >
      <div v-if="isMenuOpen" class="fixed inset-0 z-40 lg:hidden bg-white dark:bg-slate-950 p-8 pt-24">
        <div class="flex flex-col space-y-6">
          <template v-for="link in navLinks" :key="link.name">
            <NuxtLink 
              :to="link.href"
              @click="isMenuOpen = false"
              class="text-2xl font-bold text-slate-900 dark:text-white hover:text-blue-500 transition-colors"
            >
              {{ link.name }}
            </NuxtLink>
          </template>
          <hr class="border-slate-100 dark:border-slate-800" />
          <button class="w-full bg-blue-600 text-white py-4 rounded-2xl font-bold text-lg shadow-lg">
            Get Started Now
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { SunIcon, MoonIcon, MenuIcon, XIcon } from 'lucide-vue-next'

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
  { name: 'About', href: '#about', key: 'about' },
  { name: 'Programs', href: '#programs', key: 'programs' },
  { name: 'Services', href: '#services', key: 'services' },
  { name: 'Contact', href: '#contact', key: 'contact' },
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

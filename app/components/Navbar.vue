<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[scrolled ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl py-3 shadow-xl border-b border-slate-200 dark:border-slate-800' : 'bg-transparent py-5']"
  >
    <div class="container mx-auto px-6 flex items-center justify-between">
      <!-- Logo Container -->
      <NuxtLink :to="localePath('/')" class="relative group">
        <div class="relative px-4 py-2 bg-white backdrop-blur-md rounded-xl border-2 border-primary/20 shadow-lg shadow-primary/5">
          <img src="/logo.png" alt="Injaz CTC Logo" class="h-10 md:h-12 w-auto transition-all group-hover:scale-105" />
        </div>
      </NuxtLink>

      <!-- Desktop Navigation Links -->
      <div class="hidden lg:flex items-center gap-x-10">
        <NuxtLink 
          v-for="link in navLinks" 
          :key="link.key"
          :to="localePath(link.href)"
          class="text-sm font-bold transition-colors"
          :class="[
            scrolled ? 'hover:text-primary' : 'hover:text-primary-light',
            route.fullPath === localePath(link.href) || (link.href === '/' && route.path === localePath('/'))
              ? (scrolled ? 'text-primary' : 'text-primary-light')
              : (scrolled ? 'text-slate-700 dark:text-slate-200' : 'text-white')
          ]"
        >
          {{ t(`nav.${link.key}`) }}
        </NuxtLink>
      </div>

      <!-- Actions (Theme, Language, CTA) -->
      <div class="flex items-center gap-3">
        <!-- Language Switch -->
        <button 
          @click="setLocale(locale === 'ar' ? 'en' : 'ar')"
          class="px-3 py-1.5 rounded-lg border text-xs font-bold transition-all"
          :class="[scrolled ? 'text-slate-900 border-slate-200 dark:text-white dark:border-slate-800' : 'text-white border-white/20 hover:bg-white/10']"
        >
          {{ locale === 'ar' ? 'EN' : 'العربية' }}
        </button>

        <ClientOnly>
          <button 
            @click="toggleColorMode"
            class="p-2 rounded-full transition-colors"
            :class="[scrolled ? 'hover:bg-slate-100 dark:hover:bg-slate-800 text-primary' : 'text-white hover:bg-white/10']"
          >
            <SunIcon v-if="colorMode.value === 'dark'" class="w-5 h-5" />
            <MoonIcon v-else class="w-5 h-5" />
          </button>
        </ClientOnly>
        
        <NuxtLink 
          :to="localePath('/contact')"
          exact-active-class="!bg-primary-dark"
          class="hidden md:block bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/30"
        >
          {{ t('nav.getStarted') }}
        </NuxtLink>

        <!-- Mobile Menu Toggle -->
        <button 
          @click="isMenuOpen = !isMenuOpen"
          class="lg:hidden p-2 rounded-xl transition-colors"
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
          <NuxtLink 
            v-for="link in navLinks" 
            :key="link.key"
            :to="localePath(link.href)"
            @click="isMenuOpen = false"
            class="text-3xl font-bold transition-colors py-2 border-b border-slate-50 dark:border-slate-900"
            :class="[
              route.fullPath === localePath(link.href) || (link.href === '/' && route.path === localePath('/'))
                ? 'text-primary' 
                : 'text-slate-900 dark:text-white'
            ]"
          >
            {{ t(`nav.${link.key}`) }}
          </NuxtLink>
        </div>

        <div class="mt-auto pt-10 space-y-6">
          <div class="grid grid-cols-2 gap-4">
            <button @click="setLocale(locale === 'ar' ? 'en' : 'ar')" class="flex items-center justify-center gap-3 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 font-bold text-slate-900 dark:text-white">
              <GlobeIcon class="w-5 h-5 text-blue-500" />
              {{ locale === 'ar' ? 'English' : 'العربية' }}
            </button>
            <button @click="toggleColorMode" class="flex items-center justify-center gap-3 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 font-bold text-slate-900 dark:text-white">
              <SunIcon v-if="colorMode.value === 'dark'" class="w-5 h-5 text-yellow-500" />
              <MoonIcon v-else class="w-5 h-5 text-indigo-500" />
              {{ colorMode.value === 'dark' ? 'Light' : 'Dark' }}
            </button>
          </div>
          <NuxtLink to="/contact" @click="isMenuOpen = false" class="block w-full text-center bg-primary text-white py-5 rounded-2xl font-bold text-xl shadow-xl shadow-primary/30">
            {{ t('nav.getStarted') }}
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { SunIcon, MoonIcon, MenuIcon, XIcon, GlobeIcon } from 'lucide-vue-next'

const { locale, setLocale, t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const colorMode = useColorMode()
const scrolled = ref(false)
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', href: '/', key: 'home' },
  { name: 'About', href: '/about', key: 'about' },
  { name: 'Programs', href: '/programs', key: 'programs' },
  { name: 'Services', href: '/services', key: 'services' },
  { name: 'Certification', href: '/certification', key: 'certification' },
  { name: 'Associations', href: '/associations', key: 'associations' },
  { name: 'Contact', href: '/contact', key: 'contact' }
]

// Update direction and scroll state
onMounted(() => {
  if (process.client) {
    document.documentElement.dir = locale.value === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = locale.value
    
    scrolled.value = window.scrollY > 20
    window.addEventListener('scroll', () => {
      scrolled.value = window.scrollY > 20
    })
  }
})

watch(locale, (newVal) => {
  if (process.client) {
    document.documentElement.dir = newVal === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = newVal
  }
})

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

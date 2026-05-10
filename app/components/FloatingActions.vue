<template>
  <div class="fixed bottom-8 right-8 z-[100] flex flex-col space-y-4">
    <!-- Scroll Up Button -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="translate-y-10 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-300 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-10 opacity-0"
    >
      <button 
        v-if="showScroll"
        @click="scrollToTop"
        class="w-12 h-12 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-full shadow-2xl flex items-center justify-center hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all border border-slate-200 dark:border-slate-700 group"
      >
        <ChevronUpIcon class="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </button>
    </Transition>

    <!-- WhatsApp Button -->
    <a 
      href="https://wa.me/971507180464" 
      target="_blank"
      class="w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all animate-bounce-slow"
    >
      <MessageCircleIcon class="w-8 h-8" />
      <span class="absolute -top-1 -right-1 flex h-4 w-4">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
      </span>
    </a>
  </div>
</template>

<script setup>
import { ChevronUpIcon, MessageCircleIcon } from 'lucide-vue-next'

const showScroll = ref(false)

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', () => {
    showScroll.value = window.scrollY > 500
  })
})
</script>

<style scoped>
.animate-bounce-slow {
  animation: bounce 3s infinite;
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(-5%);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: translateY(0);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
}
</style>

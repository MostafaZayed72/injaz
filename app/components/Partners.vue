<template>
  <section class="py-20 bg-white dark:bg-slate-950 border-y border-slate-100 dark:border-slate-900">
    <div class="container mx-auto px-6">
      <div class="text-center mb-10">
        <p class="text-slate-400 dark:text-slate-500 font-medium tracking-widest uppercase text-xs">
          {{ t('partners.title') }}
        </p>
      </div>
      
      <div class="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        <!-- Dubai Quality Group -->
        <div class="flex items-center space-x-3 group">
          <div class="w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
            <AwardIcon class="w-6 h-6" />
          </div>
          <span class="text-slate-800 dark:text-slate-200 font-bold tracking-wider">DQG</span>
        </div>
        <!-- EFQM -->
        <div class="flex items-center space-x-3 group">
          <div class="w-10 h-10 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
            <ShieldCheckIcon class="w-6 h-6" />
          </div>
          <span class="text-slate-800 dark:text-slate-200 font-bold tracking-wider">EFQM</span>
        </div>
        <!-- ISO -->
        <div class="flex items-center space-x-3 group">
          <div class="w-10 h-10 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all">
            <CheckCircleIcon class="w-6 h-6" />
          </div>
          <span class="text-slate-800 dark:text-slate-200 font-bold tracking-wider">{{ t('partners.iso') }}</span>
        </div>
        <!-- PMI -->
        <div class="flex items-center space-x-3 group">
          <div class="w-10 h-10 bg-orange-50 dark:bg-orange-900/20 rounded-xl flex items-center justify-center text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all">
            <FileBadgeIcon class="w-6 h-6" />
          </div>
          <span class="text-slate-800 dark:text-slate-200 font-bold tracking-wider">PMI</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  AwardIcon, 
  ShieldCheckIcon, 
  CheckCircleIcon, 
  FileBadgeIcon 
} from 'lucide-vue-next'

const { t } = useI18n()
</script>

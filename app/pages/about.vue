<template>
  <div class="pt-24 pb-12 bg-white dark:bg-slate-950 min-h-screen">
    <!-- Hero Section -->
    <section class="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000" 
          class="w-full h-full object-cover opacity-20"
          alt="Modern Office"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-slate-900"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">{{ t('nav.about') }}</h1>
        <div class="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-8"></div>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {{ t('about.description') }}
        </p>
      </div>
    </section>

    <!-- Detailed Content -->
    <About class="!bg-transparent" />

    <!-- Why Choose Us -->
    <section class="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div class="container mx-auto px-6 text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">لماذا تختار إنجاز CTC؟</h2>
        <p class="text-slate-500 max-w-2xl mx-auto">نحن نؤمن بأن التدريب ليس مجرد نقل للمعلومات، بل هو رحلة تحول شاملة للفرد والمؤسسة.</p>
      </div>

      <div class="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div class="p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
          <div class="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
            <AwardIcon class="w-8 h-8" />
          </div>
          <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-4">خبرة عالمية</h4>
          <p class="text-slate-500 text-sm leading-relaxed">نقدم برامج تدريبية معتمدة دولياً تتماشى مع أرقى المعايير العالمية في الإدارة والتقنية.</p>
        </div>

        <div class="p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
          <div class="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
            <UsersIcon class="w-8 h-8" />
          </div>
          <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-4">نخبة الخبراء</h4>
          <p class="text-slate-500 text-sm leading-relaxed">فريقنا يضم مستشارين ومدربين ذوي خبرة ميدانية واسعة في مختلف قطاعات الأعمال.</p>
        </div>

        <div class="p-10 bg-white dark:bg-slate-900 rounded-[2.5rem] border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all">
          <div class="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/30 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
            <TrendingUpIcon class="w-8 h-8" />
          </div>
          <h4 class="text-xl font-bold text-slate-900 dark:text-white mb-4">نتائج ملموسة</h4>
          <p class="text-slate-500 text-sm leading-relaxed">نركز على التطبيق العملي لضمان تحقيق عائد حقيقي ومستدام على الاستثمار في التدريب.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { AwardIcon, UsersIcon, TrendingUpIcon } from 'lucide-vue-next'
const { t } = useI18n()
</script>

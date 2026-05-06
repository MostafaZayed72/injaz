<template>
  <div class="pb-12 bg-white dark:bg-slate-950 min-h-screen">
    <!-- Header Section -->
    <section class="pt-32 pb-24 bg-slate-900 text-white relative overflow-hidden">
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&q=80&w=2000" 
          class="w-full h-full object-cover opacity-20"
          alt="Contact Us Background"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-slate-900"></div>
      </div>
      
      <div class="container mx-auto px-6 relative z-10 text-center">
        <h1 class="text-4xl md:text-6xl font-bold mb-6">{{ t('nav.contact') }}</h1>
        <div class="h-1 w-20 bg-blue-500 mx-auto rounded-full mb-8"></div>
        <p class="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {{ t('contact.subtitle') }}
        </p>
      </div>
    </section>

    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="flex flex-col lg:flex-row gap-16">
          <!-- Contact Info & Map -->
          <div class="lg:w-1/3">
            <div class="bg-slate-50 dark:bg-slate-900 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 mb-8">
              <h2 class="text-2xl font-bold text-slate-900 dark:text-white mb-8">{{ t('footer.contact') }}</h2>
              
              <ul class="space-y-8">
                <li class="flex items-start">
                  <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 mr-4 rtl:mr-0 rtl:ml-4 shrink-0">
                    <MapPinIcon class="w-5 h-5" />
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-900 dark:text-white mb-1">{{ t('contact.address') }}</h4>
                    <p class="text-sm text-slate-500">{{ t('footer.address') }}</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl flex items-center justify-center text-indigo-600 mr-4 rtl:mr-0 rtl:ml-4 shrink-0">
                    <PhoneIcon class="w-5 h-5" />
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-900 dark:text-white mb-1">{{ t('contact.phone') }}</h4>
                    <p class="text-sm text-slate-500" dir="ltr">+971 4 385 1666</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 mr-4 rtl:mr-0 rtl:ml-4 shrink-0">
                    <MailIcon class="w-5 h-5" />
                  </div>
                  <div>
                    <h4 class="font-bold text-slate-900 dark:text-white mb-1">{{ t('contact.email') }}</h4>
                    <p class="text-sm text-slate-500">info@injazctc.com</p>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Map Placeholder -->
            <div class="rounded-3xl overflow-hidden h-64 bg-slate-200 dark:bg-slate-800 relative group border border-slate-100 dark:border-slate-800 shadow-lg">
              <div class="absolute inset-0 bg-blue-600/10 group-hover:bg-transparent transition-colors"></div>
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=600" 
                class="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="Map location"
              />
              <div class="absolute inset-0 flex items-center justify-center">
                <div class="p-3 bg-white dark:bg-slate-900 rounded-full shadow-2xl animate-bounce">
                  <MapPinIcon class="w-8 h-8 text-blue-600" />
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:w-2/3">
            <div class="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl border border-slate-100 dark:border-slate-800 shadow-xl">
              <h3 class="text-3xl font-bold text-slate-900 dark:text-white mb-4">{{ t('contact.formTitle') }}</h3>
              <p class="text-slate-500 mb-10">{{ t('contact.formDesc') }}</p>

              <form class="space-y-6">
                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-slate-700 dark:text-slate-300">{{ t('contact.name') }}</label>
                    <input type="text" class="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" :placeholder="t('contact.namePlaceholder')">
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-slate-700 dark:text-slate-300">{{ t('contact.company') }}</label>
                    <input type="text" class="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" :placeholder="t('contact.companyPlaceholder')">
                  </div>
                </div>

                <div class="grid md:grid-cols-2 gap-6">
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-slate-700 dark:text-slate-300">{{ t('contact.email') }}</label>
                    <input type="email" class="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" :placeholder="t('contact.emailPlaceholder')">
                  </div>
                  <div class="space-y-2">
                    <label class="text-sm font-bold text-slate-700 dark:text-slate-300">{{ t('contact.phone') }}</label>
                    <input type="tel" class="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" :placeholder="t('contact.phonePlaceholder')">
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-sm font-bold text-slate-700 dark:text-slate-300">{{ t('contact.comments') }}</label>
                  <textarea rows="5" class="w-full px-5 py-4 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none transition-all" :placeholder="t('contact.commentsPlaceholder')"></textarea>
                </div>

                <button type="submit" class="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-95">
                  {{ t('contact.submit') }}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { MapPinIcon, PhoneIcon, MailIcon } from 'lucide-vue-next'
const { t } = useI18n()
</script>

<template>
  <footer id="contact" class="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
    <div class="container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <!-- Brand -->
        <div class="col-span-1 lg:col-span-1">
          <div class="mb-8">
            <div class="inline-block p-4 bg-white rounded-2xl shadow-lg border border-white/10">
              <img src="/logo.png" alt="Injaz CTC Logo" class="h-16 w-auto" />
            </div>
          </div>
          <p class="text-sm leading-relaxed mb-8">
            {{ t('about.description') }}
          </p>
          <div class="flex space-x-4 rtl:space-x-reverse">
            <a href="#" class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <FacebookIcon class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <TwitterIcon class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <LinkedinIcon class="w-5 h-5" />
            </a>
            <a href="#" class="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
              <InstagramIcon class="w-5 h-5" />
            </a>
          </div>
        </div>

        <!-- Links -->
        <div>
          <h4 class="text-white font-bold mb-6 uppercase text-sm tracking-wider">{{ t('footer.quickLinks') }}</h4>
          <ul class="space-y-4">
            <li><NuxtLink :to="localePath('/about')" class="hover:text-primary transition-colors">{{ t('nav.about') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/#programs')" class="hover:text-primary transition-colors">{{ t('nav.programs') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/#services')" class="hover:text-primary transition-colors">{{ t('nav.services') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/contact')" class="hover:text-primary transition-colors">{{ t('nav.contact') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h4 class="text-white font-bold mb-6 uppercase text-sm tracking-wider">{{ t('footer.support') }}</h4>
          <ul class="space-y-4">
            <li><a href="#" class="hover:text-primary transition-colors">{{ t('footer.help') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">{{ t('footer.terms') }}</a></li>
            <li><a href="#" class="hover:text-primary transition-colors">{{ t('footer.privacy') }}</a></li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="text-white font-bold mb-6 uppercase text-sm tracking-wider">{{ t('footer.contact') }}</h4>
          <ul class="space-y-6">
            <li class="flex items-start">
              <MapPinIcon class="w-5 h-5 text-primary mr-3 rtl:mr-0 rtl:ml-3 shrink-0" />
              <div class="flex flex-col gap-1">
                <span class="text-sm font-bold text-white">{{ t('footer.address') }}</span>
                <span class="text-xs">{{ t('footer.pobox') }}</span>
              </div>
            </li>
            <li class="flex items-center">
              <PhoneIcon class="w-5 h-5 text-primary mr-3 rtl:mr-0 rtl:ml-3 shrink-0" />
              <div class="flex flex-col gap-1">
                <span class="text-sm" dir="ltr">{{ t('footer.phone') }}</span>
                <span class="text-xs opacity-70" dir="ltr">Fax: {{ t('footer.fax') }}</span>
              </div>
            </li>
            <li class="flex items-center">
              <MailIcon class="w-5 h-5 text-primary mr-3 rtl:mr-0 rtl:ml-3 shrink-0" />
              <div class="flex flex-col gap-1">
                <span class="text-sm">{{ t('footer.email') }}</span>
                <span class="text-xs opacity-70">Skype: {{ t('footer.skype') }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div class="pt-8 border-t border-slate-900 text-center text-xs">
        <p>© 2026 Injaz CTC. {{ t('footer.rights') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { 
  FacebookIcon, 
  TwitterIcon, 
  LinkedinIcon, 
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  MailIcon
} from 'lucide-vue-next'

const { t } = useI18n()
const localePath = useLocalePath()
</script>


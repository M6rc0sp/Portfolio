<template>
    <header class="bg-white/4 backdrop-blur-md border-b border-white/8 sticky top-0 z-30">
        <div class="container mx-auto px-6 py-3">
            <nav class="flex items-center justify-between">
                <router-link to="/" class="flex items-center space-x-3">
                    <div
                        class="w-10 h-10 rounded-md bg-gradient-to-br from-primary-600 to-accent-500 flex items-center justify-center text-white font-bold shadow-md">
                        MP
                    </div>
                    <div>
                        <div class="text-lg font-semibold text-white">Marcos Paulo</div>
                        <div class="text-xs text-white/70">{{ t('fullStackDeveloper') }}</div>
                    </div>
                </router-link>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center space-x-6">
                    <router-link to="/about" class="text-white/90 hover:text-white/100 font-medium transition-colors">{{
                        t('about') }}</router-link>
                    <router-link to="/projects"
                        class="text-white/90 hover:text-white/100 font-medium transition-colors">{{ t('projects')
                        }}</router-link>
                    <a target="_blank" rel="noopener noreferrer" :href="resumeUrl"
                        class="ml-4 inline-block bg-accent-500 hover:bg-accent-600 text-white px-3 py-2 rounded-md text-sm shadow-md hover:shadow-lg transition-colors hover:text-white">{{
                            t('resume')
                        }}</a>
                </div>

                <!-- Mobile Menu Button -->
                <button @click="toggleMobileMenu" class="md:hidden text-white p-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path v-if="!isMobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>

                <!-- Language Selector -->
                <div class="flex items-center space-x-2">
                    <button @click="setLanguage('pt')" :class="['px-2 py-1 rounded text-sm transition-colors',
                        currentLanguage === 'pt' ? 'bg-accent-500 text-white' : 'text-white/70 hover:text-white']">
                        PT
                    </button>
                    <button @click="setLanguage('en')" :class="['px-2 py-1 rounded text-sm transition-colors',
                        currentLanguage === 'en' ? 'bg-accent-500 text-white' : 'text-white/70 hover:text-white']">
                        EN
                    </button>
                </div>
            </nav>

            <!-- Mobile Menu -->
            <div v-if="isMobileMenuOpen" class="md:hidden mt-4 pb-4 border-t border-white/10">
                <div class="flex flex-col space-y-4 pt-4">
                    <router-link to="/about" @click="closeMobileMenu"
                        class="text-white/90 hover:text-white font-medium transition-colors py-2">{{ t('about')
                        }}</router-link>
                    <router-link to="/projects" @click="closeMobileMenu"
                        class="text-white/90 hover:text-white font-medium transition-colors py-2">{{ t('projects')
                        }}</router-link>
                    <a target="_blank" rel="noopener noreferrer" :href="resumeUrl" @click="closeMobileMenu"
                        class="inline-block bg-accent-500 hover:bg-accent-600 text-white px-4 py-2 rounded-md text-sm shadow-md hover:shadow-lg transition-colors text-center">
                        {{ t('resume') }}
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t, setLanguage, currentLanguage } = useI18n()

const isMobileMenuOpen = ref(false)

const resumeUrl = computed(() => {
    const basePath = import.meta.env.BASE_URL || '/'
    const fileName = currentLanguage.value === 'pt' ? 'currículo.pdf' : 'résumé.pdf'
    return `${basePath}assets/${fileName}`
})

const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
}
</script>

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

                <div class="hidden md:flex items-center space-x-6">
                    <router-link to="/about" class="text-white/90 hover:text-white/100 font-medium transition-colors">{{
                        t('about') }}</router-link>
                    <router-link to="/projects"
                        class="text-white/90 hover:text-white/100 font-medium transition-colors">{{ t('projects')
                        }}</router-link>
                    <a target="_blank" rel="noopener noreferrer" :href="resumeUrl"
                        class="ml-4 inline-block bg-accent-500 hover:bg-accent-600 text-white px-3 py-2 rounded-md text-sm shadow-md hover:shadow-lg transition-colors">{{
                            t('resume')
                        }}</a>
                </div>

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
        </div>
    </header>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t, setLanguage, currentLanguage } = useI18n()

const resumeUrl = computed(() => {
    return currentLanguage.value === 'pt'
        ? '/currículo.pdf'
        : '/résumé.pdf'
})
</script>

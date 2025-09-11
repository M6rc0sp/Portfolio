<template>
    <footer class="border-t border-white/10 mt-16 py-8 bg-transparent">
        <div class="container mx-auto px-6">
            <div class="flex flex-col items-center space-y-6 md:flex-row md:justify-between md:space-y-0">
                <div class="text-sm text-white/60 text-center md:text-left">
                    &copy; {{ year }} Marcos Paulo Barbosa
                </div>

                <div class="flex items-center justify-center space-x-6">
                    <a href="https://github.com/m6rc0sp" target="_blank"
                        class="text-white/60 hover:text-white transition-colors">
                        <i class="devicon-github-plain text-lg"></i>
                    </a>
                    <a href="https://linkedin.com/in/marcos-paulo-barbosa" target="_blank"
                        class="text-white/60 hover:text-white transition-colors">
                        <i class="devicon-linkedin-plain text-lg"></i>
                    </a>
                    <a href="mailto:paulo.marcos0108@gmail.com"
                        class="text-white/60 hover:text-white transition-colors">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path
                                d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                        </svg>
                    </a>
                </div>

                <button @click="scrollToTop"
                    class="text-white/60 hover:text-white transition-colors text-center md:text-right">
                    <svg class="w-4 h-4 mx-auto md:mx-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M7 14l5-5 5 5z" />
                    </svg>
                    <span class="text-xs block md:hidden mt-1">{{ t('backToTop') }}</span>
                </button>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const year = ref(new Date().getFullYear())

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

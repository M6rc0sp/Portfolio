<template>
    <div class="site-container py-20">
        <div class="max-w-4xl mx-auto text-center">
            <!-- Hero Section -->
            <div class="mb-12">
                <div
                    class="w-32 h-32 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full mx-auto mb-8 flex items-center justify-center card-shadow">
                    <span class="text-4xl font-bold text-white">MP</span>
                </div>

                <h1 class="text-5xl font-bold text-white mb-4">
                    {{ t('heroTitle') }}
                </h1>
                <p class="text-2xl text-accent-400 mb-6 font-semibold">
                    {{ t('heroSubtitle') }}
                </p>
                <p class="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl mx-auto">
                    {{ t('heroDescription') }}
                </p>
            </div>

            <!-- Tech Stack -->
            <div class="mb-12">
                <h2 class="text-2xl font-bold text-white mb-8">{{ t('mainStack') }}</h2>
                <div class="hidden md:grid grid-cols-3 gap-4">
                    <div
                        class="bg-white/70 backdrop-blur-sm rounded-lg p-6 card card-shadow hover:shadow-lg transition-all hover:scale-105 text-center">
                        <i class="devicon-vuejs-plain colored text-4xl mb-2"></i>
                        <h3 class="font-semibold text-white">Vue.js</h3>
                        <p class="text-sm text-accent-300">Frontend</p>
                    </div>
                    <div
                        class="bg-white/70 backdrop-blur-sm rounded-lg p-6 card card-shadow hover:shadow-lg transition-all hover:scale-105 text-center">
                        <i class="devicon-react-original colored text-4xl mb-2"></i>
                        <h3 class="font-semibold text-white">React.js</h3>
                        <p class="text-sm text-accent-300">Frontend</p>
                    </div>
                    <div
                        class="bg-white/70 backdrop-blur-sm rounded-lg p-6 card card-shadow hover:shadow-lg transition-all hover:scale-105 text-center">
                        <i class="devicon-nodejs-plain colored text-4xl mb-2"></i>
                        <h3 class="font-semibold text-white">Node.js</h3>
                        <p class="text-sm text-accent-300">Backend</p>
                    </div>
                    <div
                        class="bg-white/70 backdrop-blur-sm rounded-lg p-6 card card-shadow hover:shadow-lg transition-all hover:scale-105 text-center">
                        <i class="devicon-laravel-plain colored text-4xl mb-2"></i>
                        <h3 class="font-semibold text-white">Laravel</h3>
                        <p class="text-sm text-accent-300">Framework</p>
                    </div>
                    <div
                        class="bg-white/70 backdrop-blur-sm rounded-lg p-6 card card-shadow hover:shadow-lg transition-all hover:scale-105 text-center">
                        <i class="devicon-docker-plain colored text-4xl mb-2"></i>
                        <h3 class="font-semibold text-white">Docker</h3>
                        <p class="text-sm text-accent-300">DevOps</p>
                    </div>
                    <div
                        class="bg-white/70 backdrop-blur-sm rounded-lg p-6 card card-shadow hover:shadow-lg transition-all hover:scale-105 text-center">
                        <i class="devicon-github-plain text-white text-4xl mb-2"></i>
                        <h3 class="font-semibold text-white">GitHub Actions</h3>
                        <p class="text-sm text-accent-300">CI/CD</p>
                    </div>
                </div>
                <!-- Mobile: horizontal scroll to keep all items visible -->
                <div class="md:hidden overflow-x-auto">
                    <div class="flex gap-4 min-w-max px-1">
                        <div class="w-44 bg-white/70 backdrop-blur-sm rounded-lg p-4 card card-shadow text-center">
                            <i class="devicon-vuejs-plain colored text-3xl mb-1"></i>
                            <h3 class="font-semibold text-white text-sm">Vue.js</h3>
                            <p class="text-xs text-accent-300">Frontend</p>
                        </div>
                        <div class="w-44 bg-white/70 backdrop-blur-sm rounded-lg p-4 card card-shadow text-center">
                            <i class="devicon-react-original colored text-3xl mb-1"></i>
                            <h3 class="font-semibold text-white text-sm">React.js</h3>
                            <p class="text-xs text-accent-300">Frontend</p>
                        </div>
                        <div class="w-44 bg-white/70 backdrop-blur-sm rounded-lg p-4 card card-shadow text-center">
                            <i class="devicon-nodejs-plain colored text-3xl mb-1"></i>
                            <h3 class="font-semibold text-white text-sm">Node.js</h3>
                            <p class="text-xs text-accent-300">Backend</p>
                        </div>
                        <div class="w-44 bg-white/70 backdrop-blur-sm rounded-lg p-4 card card-shadow text-center">
                            <i class="devicon-laravel-plain colored text-3xl mb-1"></i>
                            <h3 class="font-semibold text-white text-sm">Laravel</h3>
                            <p class="text-xs text-accent-300">Framework</p>
                        </div>
                        <div class="w-44 bg-white/70 backdrop-blur-sm rounded-lg p-4 card card-shadow text-center">
                            <i class="devicon-docker-plain colored text-3xl mb-1"></i>
                            <h3 class="font-semibold text-white text-sm">Docker</h3>
                            <p class="text-xs text-accent-300">DevOps</p>
                        </div>
                        <div class="w-44 bg-white/70 backdrop-blur-sm rounded-lg p-4 card card-shadow text-center">
                            <i class="devicon-github-plain text-white text-3xl mb-1"></i>
                            <h3 class="font-semibold text-white text-sm">GitHub Actions</h3>
                            <p class="text-xs text-accent-300">CI/CD</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Social Links (sem emails) -->
            <div class="flex justify-center space-x-8 mb-12">
                <a href="https://github.com/m6rc0sp" target="_blank"
                    class="flex items-center space-x-2 text-white hover:text-accent-400 transition-colors font-medium">
                    <i class="devicon-github-plain text-2xl"></i>
                    <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/marcos-paulo-barbosa" target="_blank"
                    class="flex items-center space-x-2 text-white hover:text-accent-400 transition-colors font-medium">
                    <i class="devicon-linkedin-plain text-2xl"></i>
                    <span>LinkedIn</span>
                </a>
            </div>

            <!-- CTAs -->
            <div class="flex items-center justify-center gap-4">
                <router-link to="/projects"
                    class="inline-block bg-gradient-to-r from-primary-600 to-accent-500 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:from-primary-700 hover:to-accent-600 transition-all transform hover:scale-105 hover:text-white">
                    {{ t('viewProjects') }}
                </router-link>
                <button type="button" @click="showContact = true"
                    class="inline-block bg-white/10 border border-white/20 text-white px-8 py-4 rounded-lg font-semibold shadow-lg hover:shadow-xl hover:bg-white/15 transition-all transform hover:scale-105 hover:text-white">
                    {{ t('talkToMe') }}
                </button>
            </div>

            <!-- Contact Modal -->
            <Modal v-model="showContact" :title="t('contactTitle')" width-class="max-w-lg" body-class="p-8">
                <ContactModalContent />
            </Modal>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Modal from '../components/ui/Modal.vue'
import ContactModalContent from '../components/ContactModalContent.vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
const showContact = ref(false)
// Clean and simple home page
</script>

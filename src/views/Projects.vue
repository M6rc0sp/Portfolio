<template>
    <div class="site-container py-12">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-white mb-4">{{ t('projectsTitle') }}</h1>
                <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded"></div>
            </div>

            <div class="relative">
                <!-- Timeline line central -->
                <div
                    class="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500">
                </div>

                <!-- Projects in timeline alternada -->
                <div class="space-y-16">
                    <!-- App de Assinaturas - 2025 - Direita -->
                    <div class="relative flex flex-col md:flex-row items-center">
                        <div class="hidden md:block w-1/2"></div>
                        <div
                            class="flex-shrink-0 w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 border-4 border-white/30 mb-4 md:mb-0">
                            2025
                        </div>
                        <div class="w-full md:w-1/2 md:pl-8">
                            <article
                                class="bg-white/70 backdrop-blur-sm rounded-lg p-6 md:p-8 card card-shadow hover:shadow-xl transition-all hover:scale-105">
                                <div class="flex items-center mb-4">
                                    <span class="text-3xl mr-3">💳</span>
                                    <h3 class="text-xl md:text-2xl font-bold text-white">{{ t('appAssinaturas') }}</h3>
                                </div>
                                <p class="text-white/90 mb-4 leading-relaxed text-sm md:text-base">{{
                                    t('appAssinaturasDesc') }}</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <TechBadge v-for="(tech, index) in appAssinaturasTech" :key="index"
                                        :name="tech.name" :icon="tech.icon" :bgClass="tech.bgClass"
                                        :textClass="tech.textClass" />
                                </div>
                                <div class="border-t pt-4"><span class="text-sm text-accent-300 font-semibold">📱 {{
                                    t('eCommerce') }}</span></div>
                            </article>
                        </div>
                    </div>

                    <!-- Portal Municipal - 2023 - Esquerda -->
                    <div class="relative flex flex-col md:flex-row items-center">
                        <div class="w-full md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                            <article
                                class="bg-white/70 backdrop-blur-sm rounded-lg p-6 md:p-8 card card-shadow hover:shadow-xl transition-all hover:scale-105">
                                <div class="flex items-center mb-4 justify-start md:justify-end">
                                    <span class="text-3xl mr-3 md:ml-3 md:mr-0 md:order-2">🏛️</span>
                                    <h3 class="text-xl md:text-2xl font-bold text-white md:mr-3">{{ t('portalMunicipal')
                                        }}</h3>
                                </div>
                                <p class="text-white/90 mb-4 leading-relaxed text-sm md:text-base">{{
                                    t('portalMunicipalDesc') }}</p>
                                <div class="flex flex-wrap gap-2 mb-4 justify-start md:justify-end">
                                    <TechBadge v-for="(tech, index) in portalMunicipalTech" :key="index"
                                        :name="tech.name" :icon="tech.icon" :bgClass="tech.bgClass"
                                        :textClass="tech.textClass" />
                                </div>
                                <div class="border-t pt-4"><span class="text-sm text-accent-300 font-semibold">🏛️ {{
                                    t('government') }}</span></div>
                            </article>
                        </div>
                        <div
                            class="flex-shrink-0 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 border-4 border-white/30 mb-4 md:mb-0 order-1 md:order-2">
                            2023
                        </div>
                        <div class="hidden md:block w-1/2 order-3"></div>
                    </div>

                    <!-- Sistema Educacional - 2023 - Direita -->
                    <div class="relative flex flex-col md:flex-row items-center">
                        <div class="hidden md:block w-1/2"></div>
                        <div
                            class="flex-shrink-0 w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 border-4 border-white/30 mb-4 md:mb-0">
                            2023
                        </div>
                        <div class="w-full md:w-1/2 md:pl-8">
                            <article
                                class="bg-white/70 backdrop-blur-sm rounded-lg p-6 md:p-8 card card-shadow hover:shadow-xl transition-all hover:scale-105">
                                <div class="flex items-center mb-4">
                                    <span class="text-3xl mr-3">🎓</span>
                                    <h3 class="text-xl md:text-2xl font-bold text-white">{{ t('sistemaEducacional') }}
                                    </h3>
                                </div>
                                <p class="text-white/90 mb-4 leading-relaxed text-sm md:text-base">{{
                                    t('sistemaEducacionalDesc') }}</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <TechBadge v-for="(tech, index) in sistemaEducacionalTech" :key="index"
                                        :name="tech.name" :icon="tech.icon" :bgClass="tech.bgClass"
                                        :textClass="tech.textClass" />
                                </div>
                                <div class="border-t pt-4"><span class="text-sm text-accent-300 font-semibold">📚 {{
                                    t('projectEducation') }}</span></div>
                            </article>
                        </div>
                    </div>

                    <!-- Fundo Águia - 2023 - Esquerda -->
                    <div class="relative flex flex-col md:flex-row items-center">
                        <div class="w-full md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                            <article
                                class="bg-white/70 backdrop-blur-sm rounded-lg p-6 md:p-8 card card-shadow hover:shadow-xl transition-all hover:scale-105">
                                <div class="flex items-center mb-4 justify-start md:justify-end">
                                    <span class="text-3xl mr-3 md:ml-3 md:mr-0 md:order-2">🦅</span>
                                    <h3 class="text-xl md:text-2xl font-bold text-white md:mr-3">{{ t('fundoAguia') }}
                                    </h3>
                                </div>
                                <p class="text-white/90 mb-4 leading-relaxed text-sm md:text-base">{{
                                    t('fundoAguiaDesc') }}</p>
                                <div class="flex flex-wrap gap-2 mb-4 justify-start md:justify-end">
                                    <TechBadge v-for="(tech, index) in fundoAguiaTech" :key="index" :name="tech.name"
                                        :icon="tech.icon" :bgClass="tech.bgClass" :textClass="tech.textClass" />
                                </div>
                                <div class="border-t pt-4"><span class="text-sm text-accent-300 font-semibold">💰 {{
                                    t('financialSystem') }}</span></div>
                            </article>
                        </div>
                        <div
                            class="flex-shrink-0 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 border-4 border-white/30 mb-4 md:mb-0 order-1 md:order-2">
                            2023
                        </div>
                        <div class="hidden md:block w-1/2 order-3"></div>
                    </div>

                    <!-- Sistema de Automação Governamental - 2022 - Direita -->
                    <div class="relative flex flex-col md:flex-row items-center">
                        <div class="hidden md:block w-1/2"></div>
                        <div
                            class="flex-shrink-0 w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 border-4 border-white/30 mb-4 md:mb-0">
                            2022
                        </div>
                        <div class="w-full md:w-1/2 md:pl-8">
                            <article
                                class="bg-white/70 backdrop-blur-sm rounded-lg p-6 md:p-8 card card-shadow hover:shadow-xl transition-all hover:scale-105">
                                <div class="flex items-center mb-4">
                                    <span class="text-3xl mr-3">🛠️</span>
                                    <h3 class="text-xl md:text-2xl font-bold text-white">{{ t('sistemaAutomacao') }}
                                    </h3>
                                </div>
                                <p class="text-white/90 mb-4 leading-relaxed text-sm md:text-base">{{
                                    t('sistemaAutomacaoDesc') }}</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <TechBadge v-for="(tech, index) in sistemaAutomacaoTech" :key="index"
                                        :name="tech.name" :icon="tech.icon" :bgClass="tech.bgClass"
                                        :textClass="tech.textClass" />
                                </div>
                                <div class="border-t pt-4"><span class="text-sm text-accent-300 font-semibold">🏛️ {{
                                    t('government') }}</span></div>
                            </article>
                        </div>
                    </div>

                    <!-- Sistema de Palestras - 2019 - Esquerda -->
                    <div class="relative flex flex-col md:flex-row items-center">
                        <div class="w-full md:w-1/2 md:pr-8 md:text-right order-2 md:order-1">
                            <article
                                class="bg-white/70 backdrop-blur-sm rounded-lg p-6 md:p-8 card card-shadow hover:shadow-xl transition-all hover:scale-105">
                                <div class="flex items-center mb-4 justify-start md:justify-end">
                                    <span class="text-3xl mr-3 md:ml-3 md:mr-0 md:order-2">🎤</span>
                                    <h3 class="text-xl md:text-2xl font-bold text-white md:mr-3">{{
                                        t('sistemaPalestras') }}</h3>
                                </div>
                                <p class="text-white/90 mb-4 leading-relaxed text-sm md:text-base">{{
                                    t('sistemaPalestrasDesc') }}</p>
                                <div class="flex flex-wrap gap-2 mb-4 justify-start md:justify-end">
                                    <TechBadge v-for="(tech, index) in sistemaPalestrasTech" :key="index"
                                        :name="tech.name" :icon="tech.icon" :bgClass="tech.bgClass"
                                        :textClass="tech.textClass" />
                                </div>
                                <div class="border-t pt-4"><span class="text-sm text-accent-300 font-semibold">📚 {{
                                    t('projectEducation') }}</span></div>
                            </article>
                        </div>
                        <div
                            class="flex-shrink-0 w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 border-4 border-white/30 mb-4 md:mb-0 order-1 md:order-2">
                            2019
                        </div>
                        <div class="hidden md:block w-1/2 order-3"></div>
                    </div>

                    <!-- Brinkids - 2018 - Direita -->
                    <div class="relative flex flex-col md:flex-row items-center">
                        <div class="hidden md:block w-1/2"></div>
                        <div
                            class="flex-shrink-0 w-16 h-16 bg-accent-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg z-10 border-4 border-white/30 mb-4 md:mb-0">
                            2018
                        </div>
                        <div class="w-full md:w-1/2 md:pl-8">
                            <article
                                class="bg-white/70 backdrop-blur-sm rounded-lg p-6 md:p-8 card card-shadow hover:shadow-xl transition-all hover:scale-105">
                                <div class="flex items-center mb-4">
                                    <span class="text-3xl mr-3">🧸</span>
                                    <h3 class="text-xl md:text-2xl font-bold text-white">{{ t('brinkids') }}</h3>
                                </div>
                                <p class="text-white/90 mb-4 leading-relaxed text-sm md:text-base">{{ t('brinkidsDesc')
                                    }}</p>
                                <div class="flex flex-wrap gap-2 mb-4">
                                    <TechBadge v-for="(tech, index) in brinkidsTech" :key="index" :name="tech.name"
                                        :icon="tech.icon" :bgClass="tech.bgClass" :textClass="tech.textClass" />
                                </div>
                                <div class="border-t pt-4"><span class="text-sm text-accent-300 font-semibold">🧸
                                        {{ t('recreioInfantil') }}</span></div>
                            </article>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import TechBadge from '../components/ui/TechBadge.vue'

const { t } = useI18n()

// Definir tecnologias para cada projeto
const fundoAguiaTech = [
    { name: 'Laravel', icon: 'devicon-laravel-plain colored', bgClass: 'bg-red-100', textClass: 'text-red-800' },
    { name: 'AdminLTE', icon: '', bgClass: 'bg-orange-100', textClass: 'text-orange-800' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', bgClass: 'bg-blue-100', textClass: 'text-blue-800' },
    { name: 'Docker', icon: 'devicon-docker-plain colored', bgClass: 'bg-blue-100', textClass: 'text-blue-800' }
]

const sistemaEducacionalTech = [
    { name: 'Laravel', icon: 'devicon-laravel-plain colored', bgClass: 'bg-red-100', textClass: 'text-red-800' },
    { name: 'AdminLTE', icon: '', bgClass: 'bg-orange-100', textClass: 'text-orange-800' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', bgClass: 'bg-blue-100', textClass: 'text-blue-800' },
    { name: 'Docker', icon: 'devicon-docker-plain colored', bgClass: 'bg-blue-100', textClass: 'text-blue-800' }
]

const portalMunicipalTech = [
    { name: 'Laravel', icon: 'devicon-laravel-plain colored', bgClass: 'bg-red-100', textClass: 'text-red-800' },
    { name: 'AdminLTE', icon: '', bgClass: 'bg-orange-100', textClass: 'text-orange-800' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', bgClass: 'bg-blue-100', textClass: 'text-blue-800' },
    { name: 'Docker', icon: 'devicon-docker-plain colored', bgClass: 'bg-blue-100', textClass: 'text-blue-800' }
]

const appAssinaturasTech = [
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored', bgClass: 'bg-yellow-100', textClass: 'text-yellow-800' },
    { name: 'Vue.js', icon: 'devicon-vuejs-plain colored', bgClass: 'bg-green-100', textClass: 'text-green-800' },
    { name: 'React', icon: 'devicon-react-original colored', bgClass: 'bg-cyan-100', textClass: 'text-cyan-800' },
    { name: 'MySQL', icon: 'devicon-mysql-plain colored', bgClass: 'bg-blue-100', textClass: 'text-blue-800' },
    { name: 'PM2', icon: '', bgClass: 'bg-green-100', textClass: 'text-green-800' }
]

const brinkidsTech = [
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored', bgClass: 'bg-yellow-100', textClass: 'text-yellow-800' },
    { name: 'Express.js', icon: '', bgClass: 'bg-gray-100', textClass: 'text-gray-800' },
    { name: 'React.js', icon: 'devicon-react-original colored', bgClass: 'bg-cyan-100', textClass: 'text-cyan-800' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', bgClass: 'bg-green-100', textClass: 'text-green-800' },
]

const sistemaPalestrasTech = [
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored', bgClass: 'bg-yellow-100', textClass: 'text-yellow-800' },
    { name: 'Express.js', icon: '', bgClass: 'bg-gray-100', textClass: 'text-gray-800' },
    { name: 'React.js', icon: 'devicon-react-original colored', bgClass: 'bg-cyan-100', textClass: 'text-cyan-800' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored', bgClass: 'bg-green-100', textClass: 'text-green-800' }
]

const sistemaAutomacaoTech = [
    { name: 'Python', icon: 'devicon-python-plain colored', bgClass: 'bg-yellow-100', textClass: 'text-yellow-800' },
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored', bgClass: 'bg-yellow-100', textClass: 'text-yellow-800' },
    { name: 'Laravel', icon: 'devicon-laravel-plain colored', bgClass: 'bg-red-100', textClass: 'text-red-800' },
    { name: 'AdminLTE', icon: '', bgClass: 'bg-orange-100', textClass: 'text-orange-800' },
    { name: 'PostgreSQL', icon: 'devicon-postgresql-plain colored', bgClass: 'bg-blue-100', textClass: 'text-blue-800' },
    { name: 'Docker', icon: 'devicon-docker-plain colored', bgClass: 'bg-blue-100', textClass: 'text-blue-800' }
]
</script>
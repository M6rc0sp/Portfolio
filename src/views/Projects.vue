<template>
    <div class="site-container py-12">
        <div class="max-w-6xl mx-auto">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-white mb-4">{{ t('projectsTitle') }}</h1>
                <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded"></div>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <!-- Fundo Águia -->
                <article
                    class="bg-white/70 backdrop-blur-sm rounded-lg p-8 card card-shadow hover:shadow-xl transition-all hover:scale-105">
                    <div class="flex items-center mb-4">
                        <span class="text-3xl mr-3">🦅</span>
                        <h3 class="text-2xl font-bold text-white">{{ t('fundoAguia') }}</h3>
                    </div>
                    <p class="text-white/90 mb-4 leading-relaxed">
                        {{ t('fundoAguiaDesc') }}
                    </p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <TechBadge v-for="(tech, index) in fundoAguiaTech" :key="index" :name="tech.name"
                            :icon="tech.icon" :bgClass="tech.bgClass" :textClass="tech.textClass" />
                    </div>
                    <div class="border-t pt-4"><span class="text-sm text-accent-300 font-semibold">💰 {{
                        t('financialSystem') }}</span></div>
                </article>

                <!-- Sistema Educacional -->
                <article
                    class="bg-white/70 backdrop-blur-sm rounded-lg p-8 card card-shadow hover:shadow-xl transition-all hover:scale-105">
                    <div class="flex items-center mb-4">
                        <span class="text-3xl mr-3">🎓</span>
                        <h3 class="text-2xl font-bold text-white">{{ t('sistemaEducacional') }}</h3>
                    </div>
                    <p class="text-white/90 mb-4 leading-relaxed">{{ t('sistemaEducacionalDesc') }}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <TechBadge v-for="(tech, index) in sistemaEducacionalTech" :key="index" :name="tech.name"
                            :icon="tech.icon" :bgClass="tech.bgClass" :textClass="tech.textClass" />
                    </div>
                    <div class="border-t pt-4"><span class="text-sm text-accent-300 font-semibold">📚 {{
                        t('projectEducation') }}</span>
                    </div>
                </article>

                <!-- Portal Municipal -->
                <article
                    class="bg-white/70 backdrop-blur-sm rounded-lg p-8 card card-shadow hover:shadow-xl transition-all hover:scale-105">
                    <div class="flex items-center mb-4">
                        <span class="text-3xl mr-3">🏛️</span>
                        <h3 class="text-2xl font-bold text-white">{{ t('portalMunicipal') }}</h3>
                    </div>
                    <p class="text-white/90 mb-4 leading-relaxed">{{ t('portalMunicipalDesc') }}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <TechBadge v-for="(tech, index) in portalMunicipalTech" :key="index" :name="tech.name"
                            :icon="tech.icon" :bgClass="tech.bgClass" :textClass="tech.textClass" />
                    </div>
                    <div class="border-t pt-4"><span class="text-sm text-accent-300 font-semibold">🏛️ {{
                        t('government') }}</span>
                    </div>
                </article>

                <!-- App de Assinaturas -->
                <article
                    class="bg-white/70 backdrop-blur-sm rounded-lg p-8 card card-shadow hover:shadow-xl transition-all hover:scale-105">
                    <div class="flex items-center mb-4">
                        <span class="text-3xl mr-3">💳</span>
                        <h3 class="text-2xl font-bold text-white">{{ t('appAssinaturas') }}</h3>
                    </div>
                    <p class="text-white/90 mb-4 leading-relaxed">{{ t('appAssinaturasDesc') }}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <TechBadge v-for="(tech, index) in appAssinaturasTech" :key="index" :name="tech.name"
                            :icon="tech.icon" :bgClass="tech.bgClass" :textClass="tech.textClass" />
                    </div>
                    <div class="border-t pt-4"><span class="text-sm text-accent-300 font-semibold">📱 {{ t('eCommerce')
                    }}</span>
                    </div>
                </article>

                <!-- Brinkids - occupying two columns -->
                <article
                    class="md:col-span-2 bg-white/70 backdrop-blur-sm rounded-lg p-8 card card-shadow hover:shadow-xl transition-all hover:scale-105">
                    <div class="flex items-center mb-4">
                        <span class="text-3xl mr-3">🧸</span>
                        <h3 class="text-2xl font-bold text-white">{{ t('brinkids') }}</h3>
                    </div>
                    <p class="text-white/90 mb-4 leading-relaxed">{{ t('brinkidsDesc') }}</p>
                    <div class="flex flex-wrap gap-2 mb-4">
                        <TechBadge v-for="(tech, index) in brinkidsTech" :key="index" :name="tech.name"
                            :icon="tech.icon" :bgClass="tech.bgClass" :textClass="tech.textClass" />
                    </div>
                    <div class="border-t pt-4"><span class="text-sm text-accent-300 font-semibold">🧸 Recreio
                            Infantil</span>
                    </div>
                </article>
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
</script>
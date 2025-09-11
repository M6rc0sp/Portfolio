<template>
    <div class="site-container py-12">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-white mb-4">{{ t('aboutTitle') }}</h1>
                <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded"></div>
            </div>

            <!-- Foto e Introdução -->
            <div class="bg-white/70 backdrop-blur-sm rounded-lg p-8 card card-shadow mb-8">
                <div class="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                    <!-- Foto -->
                    <div class="flex-shrink-0">
                        <div class="w-48 h-48 rounded-full overflow-hidden border-4 border-accent-500 shadow-xl">
                            <img src="/assets/images/profile.jpg" alt="Marcos Paulo Barbosa"
                                class="w-full h-full object-cover">
                        </div>
                    </div>

                    <!-- Introdução -->
                    <div class="flex-1 text-center md:text-left">
                        <h2 class="text-2xl font-bold text-white mb-4">{{ t('fullName') }}</h2>
                        <p class="text-lg text-white/90 leading-relaxed mb-4">
                            {{ t('aboutIntro') }}
                        </p>
                        <div class="flex flex-wrap justify-center md:justify-start gap-3">
                            <span class="px-3 py-1 bg-accent-500/20 text-accent-300 rounded-full text-sm font-medium">
                                {{ t('focusedOnResults') }}
                            </span>
                            <span class="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium">
                                {{ t('alwaysLearning') }}
                            </span>
                            <span class="px-3 py-1 bg-accent-500/20 text-accent-300 rounded-full text-sm font-medium">
                                {{ t('creativeSolutions') }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-white/70 backdrop-blur-sm rounded-lg p-8 card card-shadow mb-8">
                <p class="text-lg text-white/90 leading-relaxed mb-6">
                    {{ t('aboutDescription') }}
                </p>
            </div>

            <div class="grid md:grid-cols-2 gap-8">
                <!-- Tecnologias -->
                <div class="bg-white/70 backdrop-blur-sm rounded-lg p-8 card card-shadow">
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
                        <i class="devicon-devicon-plain text-accent-500 text-3xl mr-3"></i>
                        {{ t('technologies') }}
                    </h3>
                    <div class="space-y-4">
                        <div class="flex items-center space-x-3">
                            <i class="devicon-vuejs-plain colored text-2xl"></i>
                            <span class="text-sm text-white/90">{{ t('techStack1') }}</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i class="devicon-postgresql-plain colored text-2xl"></i>
                            <span class="text-sm text-white/90">{{ t('techStack2') }}</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <i class="devicon-git-plain text-white text-2xl"></i>
                            <span class="text-sm text-white/90">{{ t('techStack3') }}</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <span class="text-2xl">📐</span>
                            <span class="text-sm text-white/90">{{ t('principles') }}</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <span class="text-2xl">🏗️</span>
                            <span class="text-sm text-white/90">{{ t('patterns') }}</span>
                        </div>
                    </div>
                </div>

                <!-- Integrações -->
                <div class="bg-white/70 backdrop-blur-sm rounded-lg p-8 card card-shadow">
                    <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
                        <span class="text-3xl mr-3">🔗</span>
                        {{ t('integrations') }}
                    </h3>
                    <div class="space-y-4">
                        <div class="flex items-center space-x-3">
                            <span class="text-2xl">🖥️</span>
                            <span class="text-sm text-white/90">{{ t('ssrInertia') }}</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <span class="text-2xl">🤖</span>
                            <span class="text-sm text-white/90">{{ t('automations') }}</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <span class="text-2xl">💳</span>
                            <span class="text-sm text-white/90">{{ t('payments') }}</span>
                        </div>
                        <div class="flex items-center space-x-3">
                            <span class="text-2xl">🔌</span>
                            <span class="text-sm text-white/90">{{ t('apis') }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Experiência -->
            <div class="bg-white/70 backdrop-blur-sm rounded-lg p-8 card card-shadow mt-8">
                <h3 class="text-2xl font-bold text-white mb-6 flex items-center">
                    <span class="text-3xl mr-3">💼</span>
                    {{ t('aboutExperience') }}
                </h3>
                <div class="text-white/90">
                    <p class="mb-4">
                        <strong class="text-accent-300">{{ t('yearsExperience') }}</strong> {{ t('complexSystems') }}.
                    </p>
                    <p class="mb-4">
                        {{ t('experienceIn') }} <strong class="text-accent-300">{{ t('governmentProjects') }}</strong>
                        {{ t('and') }} <strong class="text-accent-300">{{ t('financialSystems') }}</strong>
                        {{ t('withHighSecurityStandards') }}.
                    </p>
                    <p>
                        <strong class="text-accent-300">{{ t('specialistIn') }}</strong> <strong
                            class="text-accent-300">{{ t('softwareArchitecture') }}</strong> {{ t('and') }} <strong
                            class="text-accent-300">{{ t('bestPractices') }}</strong>.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()
</script>

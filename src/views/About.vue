<template>
    <div class="site-container py-12">
        <div class="max-w-4xl mx-auto">
            <div class="text-center mb-12">
                <h1 class="text-4xl font-bold text-white mb-4">{{ t('aboutTitle') }}</h1>
                <div class="w-24 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded"></div>
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

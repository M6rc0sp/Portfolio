<template>
    <div class="flex justify-center items-center gap-8">
        <a href="mailto:paulo.marcos0108@gmail.com" target="_blank"
            class="flex flex-col items-center gap-2 bg-white/85 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 no-underline group">
            <img :src="gmailIcon" alt="Gmail" class="w-10 h-10 object-contain" />
            <h3 class="font-semibold text-primary-900 text-base">{{ t('gmail') }}</h3>
            <p class="text-sm text-accent-500">{{ t('sendEmail') }}</p>
        </a>

        <a href="mailto:paulo.marcos0108@live.com" target="_blank"
            class="flex flex-col items-center gap-2 bg-white/85 backdrop-blur-sm rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 no-underline group">
            <img :src="outlookIcon" alt="Outlook" class="w-10 h-10 object-contain" />
            <h3 class="font-semibold text-primary-900 text-base">{{ t('outlook') }}</h3>
            <p class="text-sm text-accent-500">{{ t('sendEmail') }}</p>
        </a>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from '../composables/useI18n'
import gmailIcon from '../assets/icons/gmail.svg'
import outlookIcon from '../assets/icons/outlook.svg'

const { t } = useI18n()
</script>

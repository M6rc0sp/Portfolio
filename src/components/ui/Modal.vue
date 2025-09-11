<template>
    <teleport to="body">
        <transition name="fade">
            <div v-if="modelValue" class="fixed inset-0 z-[1000] flex items-center justify-center" role="dialog"
                aria-modal="true" @keydown.esc.prevent.stop="onEsc">
                <!-- Backdrop -->
                <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="onBackdrop" />

                <!-- Panel -->
                <transition name="scale-in">
                    <div v-if="modelValue"
                        class="relative w-full mx-4 bg-primary-900/95 border border-white/10 rounded-xl shadow-2xl card-shadow"
                        :class="widthClass">
                        <!-- Header -->
                        <div class="flex items-center justify-between px-5 py-4 border-b border-white/10">
                            <h3 v-if="title" class="text-lg font-semibold text-white">{{ title }}</h3>
                            <button type="button"
                                class="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition"
                                aria-label="Fechar" @click="close">
                                <svg viewBox="0 0 24 24" class="w-5 h-5" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M6.225 4.811L4.811 6.225 10.586 12l-5.775 5.775 1.414 1.414L12 13.414l5.775 5.775 1.414-1.414L13.414 12l5.775-5.775-1.414-1.414L12 10.586 6.225 4.811z" />
                                </svg>
                            </button>
                        </div>

                        <!-- Body -->
                        <div :class="bodyClass">
                            <slot />
                        </div>
                    </div>
                </transition>
            </div>
        </transition>
    </teleport>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'

const props = withDefaults(defineProps<{
    modelValue: boolean
    title?: string
    closeOnEsc?: boolean
    closeOnBackdrop?: boolean
    widthClass?: string
    bodyClass?: string
}>(), {
    closeOnEsc: true,
    closeOnBackdrop: true,
    widthClass: 'max-w-xl',
    bodyClass: 'p-8'
})

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
    (e: 'opened'): void
    (e: 'closed'): void
}>()

const close = () => {
    emit('update:modelValue', false)
    emit('closed')
}

const onEsc = () => {
    if (props.closeOnEsc) close()
}

const onBackdrop = () => {
    if (props.closeOnBackdrop) close()
}

const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && props.modelValue && props.closeOnEsc) {
        e.preventDefault()
        e.stopPropagation()
        close()
    }
}

onMounted(() => {
    window.addEventListener('keydown', onKeyDown)
})

onBeforeUnmount(() => {
    window.removeEventListener('keydown', onKeyDown)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity .15s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.scale-in-enter-active,
.scale-in-leave-active {
    transition: transform .18s ease, opacity .18s ease;
}

.scale-in-enter-from {
    transform: scale(.98);
    opacity: 0;
}

.scale-in-leave-to {
    transform: scale(.98);
    opacity: 0;
}
</style>

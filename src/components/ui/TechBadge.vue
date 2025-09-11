<template>
    <span :class="[
        'px-3 py-1 rounded-full text-sm font-medium flex items-center',
        bgClass,
        textClass
    ]">
        <i v-if="icon" :class="icon" class="mr-2"></i>
        {{ name }}
    </span>
</template>

<script setup lang="ts">
interface Props {
    name: string
    icon?: string
    bgClass: string
    textClass: string
}

defineProps<Props>()
</script>

<template>
    <div class="min-h-screen bg-sunset text-default flex flex-col">
        <Header />

        <main class="flex-1">
            <router-view />
        </main>

        <Footer />
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import { useI18n } from './composables/useI18n'

const { initLanguage } = useI18n()

onMounted(() => {
    initLanguage()
})
</script>

<style>
/* Estilos globais centralizados no tailwind.config.cjs e em src/styles/tailwind.css */
</style>

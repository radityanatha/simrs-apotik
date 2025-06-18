<template>
    <aside class="flex flex-col items-center w-24 py-4 text-white bg-blue-900">
        <img :src="logo" alt="Logo Rumah Sakit" class="w-16 h-16 mb-8 rounded-full shadow-lg" />

        <nav class="space-y-4">
            <!-- Dashboard -->
            <router-link to="/dashboard"
                class="flex flex-col items-center text-sm p-2 rounded-lg transition-colors duration-200"
                :class="isActive('/dashboard')">
                <div class="p-2 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l7-7 7 7M19 10v10a1 1 0 01-1 1h-3m-11 0a1 1 0 01-1 1h-3m8-14v-2m-3 2V6M6 18h.01M6 6h.01" />
                    </svg>
                </div>
                Dashboard
            </router-link>

            <!-- Stok Obat -->
            <router-link to="/obat"
                class="flex flex-col items-center text-sm p-2 rounded-lg transition-colors duration-200"
                :class="isActive('/obat')">
                <div class="p-2 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h7.5c.621 0 1.125-.504 1.125-1.125m-9.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625..." />
                    </svg>
                </div>
                Stok Obat
            </router-link>

            <!-- Riwayat -->
            <router-link to="/riwayat"
                class="flex flex-col items-center text-sm p-2 rounded-lg transition-colors duration-200"
                :class="isActive('/riwayat')">
                <div class="p-2 mb-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194..." />
                    </svg>
                </div>
                Riwayat
            </router-link>
        </nav>
    </aside>
</template>

<script setup>
import { useRoute } from 'vue-router'
import logo from '@/assets/images/logo-rsi-banjarmasin.png'

const route = useRoute()

const isActive = (path) => {
    return route.path === path
        ? 'bg-blue-800 text-white shadow-md'
        : 'text-gray-200 hover:bg-blue-800 hover:text-white'
}
</script>

<style scoped>
/* Tambahan styling jika diperlukan */
</style>

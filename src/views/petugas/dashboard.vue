<template>
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        <div class="rounded-2xl bg-white p-6 shadow-md">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-sm text-gray-500">Menunggu</h2>
                    <p class="text-2xl font-bold text-gray-900">{{ stats.menunggu }}</p>
                </div>
                <div class="rounded-full bg-yellow-100 p-3">
                    <ClockIcon class="h-6 w-6 text-yellow-500" />
                </div>
            </div>
        </div>

        <div class="rounded-2xl bg-white p-6 shadow-md">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-sm text-gray-500">Dilayani</h2>
                    <p class="text-2xl font-bold text-gray-900">{{ stats.dilayani }}</p>
                </div>
                <div class="rounded-full bg-blue-100 p-3">
                    <ActivityIcon class="h-6 w-6 text-blue-500" />
                </div>
            </div>
        </div>

        <div class="rounded-2xl bg-white p-6 shadow-md">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-sm text-gray-500">Selesai</h2>
                    <p class="text-2xl font-bold text-gray-900">{{ stats.selesai }}</p>
                </div>
                <div class="rounded-full bg-green-100 p-3">
                    <CheckIcon class="h-6 w-6 text-green-500" />
                </div>
            </div>
        </div>

        <div class="rounded-2xl bg-white p-6 shadow-md">
            <div class="flex items-center justify-between">
                <div>
                    <h2 class="text-sm text-gray-500">Batal</h2>
                    <p class="text-2xl font-bold text-gray-900">{{ stats.batal }}</p>
                </div>
                <div class="rounded-full bg-red-100 p-3">
                    <XIcon class="h-6 w-6 text-red-500" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { ClockIcon, ActivityIcon, CheckIcon, XIcon } from 'lucide-vue-next'

const stats = ref({
    menunggu: 0,
    dilayani: 0,
    selesai: 0,
    batal: 0,
})

// Bisa ditambahkan API call untuk update data secara dinamis nanti
</script>

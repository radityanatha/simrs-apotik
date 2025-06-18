<template>
    <div class="flex min-h-screen bg-gray-100 font-sans">
        <!-- Sidebar -->
        <SidebarComponent />

        <!-- Main Content -->
        <main class="flex-1 p-6 bg-white rounded shadow-md">
            <!-- Header -->
            <div class="relative flex items-center justify-between px-4 mb-6">
                <h1 class="text-2xl font-semibold text-gray-800">Riwayat E-Resep</h1>
                <div class="flex items-center space-x-4 text-sm text-gray-700">
                    <span>{{ currentDate }}</span>
                    <!-- Notification Icon -->
                    <NotificationIcon />
                    <!-- Profile Button -->
                    <div class="relative">
                        <button @click="toggleProfilePopup" class="focus:outline-none">
                            <UserIcon />
                        </button>
                        <div v-if="showProfilePopup"
                            class="absolute z-50 w-64 p-4 bg-white border shadow-lg top-10 right-0 rounded-xl">
                            <div class="flex items-center mb-3 space-x-3">
                                <img src="/assets/img/download (3).jpg" alt="Profile"
                                    class="object-cover w-12 h-12 rounded-full" />
                                <div>
                                    <p class="text-base font-semibold text-gray-800">Violet Evergarden</p>
                                    <p class="text-xs text-gray-500">Petugas Apotek</p>
                                </div>
                            </div>
                            <hr class="mb-3" />
                            <button
                                class="flex items-center mb-3 space-x-2 text-sm text-gray-800 hover:underline w-full px-2 py-2 rounded transition">
                                <UserIcon class="w-5 h-5 mr-2" />
                                <span>Profil Saya</span>
                            </button>
                            <button
                                class="w-full py-2 text-sm text-white bg-blue-900 rounded-md hover:bg-blue-800">Keluar</button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Search -->
            <div class="flex justify-end mb-4">
                <input v-model="searchQuery" type="text" placeholder="Cari Pasien..."
                    class="px-3 py-1 text-sm border border-gray-300 rounded" />
            </div>

            <!-- Table -->
            <div class="overflow-auto">
                <table class="min-w-full text-sm border-collapse border rounded-lg overflow-hidden">
                    <thead class="bg-blue-900 text-white">
                        <tr>
                            <th class="border px-4 py-2">Kode E-Resep</th>
                            <th class="border px-4 py-2">Rekam Medis</th>
                            <th class="border px-4 py-2">Nama Pasien</th>
                            <th class="border px-4 py-2">Tanggal Diterima</th>
                            <th class="border px-4 py-2">Tanggal Selesai</th>
                            <th class="border px-4 py-2">Status</th>
                            <th class="border px-4 py-2"></th>
                        </tr>
                    </thead>
                    <tbody class="text-gray-800">
                        <tr v-for="(items, id_resep) in filteredRiwayat" :key="id_resep">
                            <td class="border px-4 py-2">{{ id_resep }}</td>
                            <td class="border px-4 py-2">{{ items[0]?.antrean?.rm || '-' }}</td>
                            <td class="border px-4 py-2">{{ items[0]?.riwayat?.nama_pasien || '-' }}</td>
                            <td class="border px-4 py-2">{{ items[0]?.riwayat?.tanggal_diterima || '-' }}</td>
                            <td class="border px-4 py-2">{{ items[0]?.riwayat?.tanggal_selesai || '-' }}</td>
                            <td class="px-4 py-2 text-green-600 border">{{ items[0]?.riwayat?.status || '-' }}</td>
                            <td class="border px-4 py-2 relative">
                                <button @click="toggleMenu(id_resep)">⋮</button>
                                <div v-if="activeMenu === id_resep"
                                    class="absolute right-0 z-10 mt-2 w-40 bg-white border rounded shadow-lg">
                                    <button @click="openModal(id_resep)"
                                        class="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100">
                                        <span class="mr-2">📝</span>
                                        Lihat Obat
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>

        <!-- Modal Detail Obat -->
        <ModalDetailObat v-for="(items, id_resep) in riwayat" :key="id_resep" :id="id_resep" :items="items"
            :isOpen="openModalId === id_resep" @close="closeModal" />
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SidebarComponent from '@/components/SidebarComponent.vue'
import ModalDetailObat from '@/components/ModalDetailObat.vue'
import UserIcon from '@/components/icons/UserIcon.vue'
import NotificationIcon from '@/components/icons/NotificationIcon.vue'

const searchQuery = ref('')
const showProfilePopup = ref(false)
const activeMenu = ref(null)
const openModalId = ref(null)

// Simulasi data, ganti dengan props / fetch API
const riwayat = ref({
    // "RSP123": [ ... ],
})

const toggleProfilePopup = () => {
    showProfilePopup.value = !showProfilePopup.value
}

const toggleMenu = (id) => {
    activeMenu.value = activeMenu.value === id ? null : id
}

const openModal = (id) => {
    openModalId.value = id
    activeMenu.value = null
}

const closeModal = () => {
    openModalId.value = null
}

const filteredRiwayat = computed(() => {
    const term = searchQuery.value.toLowerCase()
    if (!term || term.length < 3) return riwayat.value
    const result = {}
    for (const [id, items] of Object.entries(riwayat.value)) {
        const nama = items?.[0]?.riwayat?.nama_pasien?.toLowerCase() || ''
        if (nama.startsWith(term)) result[id] = items
    }
    return result
})

const currentDate = new Date().toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
})
</script>

<style scoped>
/* Optional styling */
</style>

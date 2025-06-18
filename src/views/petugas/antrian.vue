<template>
    <div>
        <!-- Header Halaman -->
        <div class="flex justify-between items-center mb-6 relative">
            <h1 class="text-2xl font-semibold text-gray-800">Antrean Pasien</h1>
            <div class="text-sm text-gray-700 flex items-center space-x-4">
                <span class="text-gray-700 text-sm">{{ currentDate }}</span>

                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-blue-900">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>

                <button @click="toggleProfilePopup" class="flex items-center space-x-2 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 text-blue-900">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                </button>

                <!-- Popup Profil -->
                <div v-if="showProfilePopup"
                    class="absolute top-10 right-0 w-64 bg-white rounded-xl shadow-lg border p-4 z-50">
                    <div class="flex items-center space-x-3 mb-3">
                        <img src="/assets/img/download (3).jpg" alt="Profile"
                            class="w-12 h-12 rounded-full object-cover" />
                        <div>
                            <p class="text-sm font-semibold text-gray-800">Mr. Roc</p>
                            <p class="text-xs text-gray-500">Petugas Apotek</p>
                        </div>
                    </div>
                    <hr class="mb-3" />
                    <button class="flex items-center space-x-2 text-sm text-blue-900 hover:underline mb-3">
                        <span>Profil Saya</span>
                    </button>
                    <form @submit.prevent="logout">
                        <button type="submit"
                            class="w-full bg-blue-900 text-white text-sm py-2 rounded-md hover:bg-blue-800">
                            Keluar
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <!-- Search -->
        <div class="flex justify-end mb-4">
            <input v-model="search" @input="fetchAntrian" placeholder="Cari Pasien..."
                class="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm w-full sm:w-1/3 focus:ring-blue-500 focus:border-blue-500" />
        </div>

        <!-- Tabel -->
        <section>
            <div class="overflow-x-auto border rounded-lg shadow-sm">
                <table class="min-w-full text-sm divide-y divide-gray-200">
                    <thead class="bg-blue-900 text-white">
                        <tr>
                            <th class="py-2 px-4 text-left font-medium">No</th>
                            <th class="py-2 px-4 text-left font-medium">Rekam Medis</th>
                            <th class="py-2 px-4 text-left font-medium">ID Resep</th>
                            <th class="py-2 px-4 text-left font-medium">No. Registrasi</th>
                            <th class="py-2 px-4 text-left font-medium">Nama Poli</th>
                            <th class="py-2 px-4 text-left font-medium">Antrean</th>
                            <th class="py-2 px-4 text-left font-medium">Status</th>
                            <th class="py-2 px-4 text-center font-medium">Aksi</th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 text-gray-800">
                        <tr v-for="(a, index) in antrian" :key="a.id_resep" class="hover:bg-gray-50">
                            <td class="py-2 px-4 whitespace-nowrap">{{ index + 1 }}</td>
                            <td class="py-2 px-4 whitespace-nowrap">{{ a.rm || '-' }}</td>
                            <td class="py-2 px-4 whitespace-nowrap">{{ a.id_resep || '-' }}</td>
                            <td class="py-2 px-4 whitespace-nowrap">{{ a.no_registrasi || '-' }}</td>
                            <td class="py-2 px-4 whitespace-nowrap">{{ a.nama_poli || '-' }}</td>
                            <td class="py-2 px-4 whitespace-nowrap">{{ a.no_antrian || '-' }}</td>
                            <td class="py-2 px-4 whitespace-nowrap">
                                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"
                                    :class="a.status === 'Sudah Bayar' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'">
                                    {{ a.status || '-' }}
                                </span>
                            </td>
                            <td class="py-2 px-4 text-center">
                                <a :href="`/petugas/antrian/${a.id_resep}`"
                                    :class="a.status === 'Sudah Bayar' ? 'text-blue-600 hover:text-blue-900' : 'text-gray-400'">
                                    Detail
                                </a>
                            </td>
                        </tr>
                        <tr v-if="antrian.length === 0">
                            <td colspan="8" class="py-4 px-4 text-center text-gray-500">Belum ada data antrean.</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import dayjs from 'dayjs'
import 'dayjs/locale/id'

dayjs.locale('id')

const search = ref('')
const antrian = ref([])
const showProfilePopup = ref(false)

const toggleProfilePopup = () => {
    showProfilePopup.value = !showProfilePopup.value
}

const currentDate = dayjs().format('D MMMM YYYY')

const fetchAntrian = async () => {
    try {
        const response = await axios.get('/api/petugas/antrian', {
            params: { search: search.value }
        })
        antrian.value = response.data
    } catch (error) {
        console.error('Gagal memuat data:', error)
    }
}

const logout = () => {
    // Buat permintaan logout sesuai endpoint backend
    axios.post('/logout').then(() => {
        window.location.href = '/login'
    })
}

onMounted(() => {
    fetchAntrian()
})
</script>

<style scoped>
/* Tambahkan style tambahan jika dibutuhkan */
</style>

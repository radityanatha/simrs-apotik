<template>
  <div class="flex min-h-screen bg-gray-100 font-sans">
    <!-- Sidebar component -->
    <SidebarPetugas />

    <!-- Main Content -->
    <main class="flex-1 p-6 bg-white rounded shadow-md">
      <!-- Header -->
      <div class="flex justify-between items-center mb-6 relative px-4">
        <h1 class="text-2xl font-semibold text-gray-800">Stok Obat</h1>
        <div class="text-sm text-gray-700 flex items-center space-x-4">
          <span>{{ today }}</span>
          <!-- icon notifikasi -->
          <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24"
            stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="..." />
          </svg>
          <!-- icon user -->
          <button @click="toggleProfile" class="flex items-center space-x-2 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-blue-900" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="..." />
            </svg>
          </button>

          <!-- Pop-up -->
          <div v-if="showProfile" class="absolute top-10 right-4 w-64 bg-white rounded-xl shadow-lg border p-4 z-50">
            <div class="flex items-center space-x-3 mb-3">
              <img src="/assets/img/download (3).jpg" alt="Profile" class="w-12 h-12 rounded-full object-cover" />
              <div>
                <p class="text-sm font-semibold text-gray-800">Mr. Roc</p>
                <p class="text-xs text-gray-500">Petugas Apotek</p>
              </div>
            </div>
            <hr class="mb-3" />
            <button class="flex items-center space-x-2 text-sm text-blue-900 hover:underline mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="..." />
              </svg>
              <span>Profil Saya</span>
            </button>
            <button @click="logout" class="w-full bg-blue-900 text-white text-sm py-2 rounded-md hover:bg-blue-800">
              Keluar
            </button>
          </div>
        </div>
      </div>

      <!-- Search -->
      <div class="flex justify-end mb-4">
        <input type="text" v-model="search" placeholder="Cari Obat..." class="px-4 py-2 border rounded-md text-sm" />
      </div>

      <!-- Table -->
      <div class="overflow-auto">
        <table class="min-w-full text-sm border-collapse border rounded-lg overflow-hidden">
          <thead class="bg-blue-900 text-white">
            <tr>
              <th class="border px-4 py-2">Kode</th>
              <th class="border px-4 py-2">Nama Obat</th>
              <th class="border px-4 py-2">Kategori</th>
              <th class="border px-4 py-2">Bentuk Satuan</th>
              <th class="border px-4 py-2">Stok</th>
              <th class="border px-4 py-2">Harga Jual</th>
              <th class="border px-4 py-2">Kedaluwarsa</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="o in filteredObat" :key="o.id_obat">
              <td class="border px-4 py-2">{{ o.id_obat }}</td>
              <td class="border px-4 py-2">{{ o.nama_obat }}</td>
              <td class="border px-4 py-2">{{ o.kategori.nama_kategori }}</td>
              <td class="border px-4 py-2">{{ o.bentuk_satuan }}</td>
              <td class="border px-4 py-2">{{ o.stok }}</td>
              <td class="border px-4 py-2">Rp. {{ o.harga_jual }}</td>
              <td class="border px-4 py-2">{{ o.kadaluarsa }}</td>
            </tr>
          </tbody>
        </table>

        <!-- Pagination placeholder -->
        <div class="mt-6 text-sm text-gray-600">
          <!-- Ganti dengan komponen pagination jika menggunakan Vue router atau library pagination -->
          {{ filteredObat.length }} hasil ditemukan.
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import dayjs from 'dayjs'
import 'dayjs/locale/id'
import SidebarPetugas from '@/components/SidebarPetugas.vue'

dayjs.locale('id')
const today = dayjs().format('DD MMMM YYYY')

const showProfile = ref(false)
const search = ref('')

// Contoh data dummy
const stokObat = ref([
  {
    id_obat: 'OBT001',
    nama_obat: 'Paracetamol',
    kategori: { nama_kategori: 'Analgesik' },
    bentuk_satuan: 'Tablet',
    stok: 120,
    harga_jual: 5000,
    kadaluarsa: '2025-12-31',
  },
  // Tambahkan data lain di sini
])

const toggleProfile = () => {
  showProfile.value = !showProfile.value
}

const logout = () => {
  // Tambahkan logika logout (misalnya redirect atau API logout)
  console.log('Logout clicked')
}

const filteredObat = computed(() => {
  if (search.value.length < 3) return stokObat.value
  return stokObat.value.filter((o) =>
    o.nama_obat.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<style scoped>
/* Tambahkan style tambahan jika diperlukan */
</style>

<template>
    <div>
        <div class="relative flex items-center justify-between px-4 mb-6">
            <h1 class="text-2xl font-semibold text-gray-800">Inventaris Obat</h1>
            <div class="flex items-center space-x-4 text-sm text-gray-700">
                <span>{{ currentDate }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-blue-900">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082..." />
                </svg>
                <button @click="toggleProfile" class="flex items-center space-x-2 focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6 text-blue-900">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725..." />
                    </svg>
                </button>
                <div v-if="showProfile"
                    class="absolute z-50 w-64 p-4 bg-white border shadow-lg top-10 right-4 rounded-xl">
                    <div class="flex items-center mb-3 space-x-3">
                        <img src="assets/img/download (3).jpg" alt="Profile"
                            class="object-cover w-12 h-12 rounded-full" />
                        <div>
                            <p class="text-base font-semibold text-gray-800">Mr. Roc</p>
                            <p class="text-xs text-gray-500">Admin Apotek</p>
                        </div>
                    </div>
                    <hr class="mb-3" />
                    <button
                        class="flex items-center mb-3 space-x-2 text-sm text-gray-800 hover:underline w-full px-2 py-2 rounded transition">
                        <svg class="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                        <span>Profil Saya</span>
                    </button>
                    <button
                        class="w-full py-2 text-sm text-white bg-blue-900 rounded-md hover:bg-blue-800">Keluar</button>
                </div>
            </div>
        </div>

        <div class="flex justify-end mb-4 space-x-2">
            <input type="text" v-model="searchQuery" placeholder="Cari Obat..."
                class="w-1/4 px-3 py-1 text-sm border border-gray-300 rounded" />
            <select v-model="sortOption" class="w-1/4 px-3 py-1 text-sm border border-gray-300 rounded">
                <option>Stok (Terbanyak)</option>
                <option>Stok (Tersedikit)</option>
                <option>Kadaluwarsa</option>
            </select>
            <button class="w-1/4 px-3 py-1 text-sm border border-gray-300 rounded hover:bg-gray-100 text-gray-800"
                @click="openModal('tambahObat')">
                + Tambahkan Obat
            </button>
        </div>

        <div class="overflow-auto">
            <table class="min-w-full overflow-hidden text-sm border border-collapse rounded-lg">
                <thead class="text-white bg-blue-900">
                    <tr>
                        <th class="px-4 py-2 border">Kode</th>
                        <th class="px-4 py-2 border">Nama Obat</th>
                        <th class="px-4 py-2 border">Kategori</th>
                        <th class="px-4 py-2 border">Bentuk Satuan</th>
                        <th class="px-4 py-2 border">Stok</th>
                        <th class="px-4 py-2 border">Harga Jual</th>
                        <th class="px-4 py-2 border">Kedaluwarsa</th>
                        <th class="px-4 py-2 border"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(o, index) in filteredObat" :key="index">
                        <td class="px-4 py-2 border">{{ o.id_obat }}</td>
                        <td class="px-4 py-2 border">{{ o.nama_obat }}</td>
                        <td class="px-4 py-2 border">{{ o.kategori.nama_kategori }}</td>
                        <td class="px-4 py-2 border">{{ o.bentuk_satuan }}</td>
                        <td class="px-4 py-2 border">{{ o.stok }}</td>
                        <td class="px-4 py-2 border">Rp. {{ o.harga_jual }}</td>
                        <td class="px-4 py-2 border">{{ o.kadaluarsa }}</td>
                        <td class="px-4 py-2 border text-center relative">
                            <button @click="toggleDropdown(index)"
                                class="text-lg text-blue-600 hover:underline focus:outline-none">⋮</button>
                            <transition name="fade">
                                <div v-if="dropdownIndex === index"
                                    class="absolute right-0 z-10 w-48 mt-2 bg-white border rounded-md shadow-lg">
                                    <ul class="text-sm text-gray-700">
                                        <li><button @click="openModal('ubahStok', o)">Ubah Stok</button></li>
                                        <li><button @click="openModal('ubahHarga', o)">Ubah Harga</button></li>
                                        <li><button @click="openModal('ubahKedaluwarsa', o)">Ubah Kedaluwarsa</button>
                                        </li>
                                        <li><button @click="openModal('hapusObat', o)" class="text-red-600">Hapus
                                                Obat</button></li>
                                    </ul>
                                </div>
                            </transition>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Modals -->
        <UbahStokModal v-if="modal === 'ubahStok'" :obat="selectedObat" @close="closeModal" />
        <UbahHargaModal v-if="modal === 'ubahHarga'" :obat="selectedObat" @close="closeModal" />
        <UbahKedaluwarsaModal v-if="modal === 'ubahKedaluwarsa'" :obat="selectedObat" @close="closeModal" />
        <HapusObatModal v-if="modal === 'hapusObat'" :obat="selectedObat" @close="closeModal" />
    </div>
</template>

<script>
import UbahStokModal from './modals/UbahStokModal.vue'
import UbahHargaModal from './modals/UbahHargaModal.vue'
import UbahKedaluwarsaModal from './modals/UbahKedaluwarsaModal.vue'
import HapusObatModal from './modals/HapusObatModal.vue'

export default {
    name: 'Obat',
    components: {
        UbahStokModal,
        UbahHargaModal,
        UbahKedaluwarsaModal,
        HapusObatModal
    },
    data() {
        return {
            currentDate: new Date().toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }),
            showProfile: false,
            dropdownIndex: null,
            modal: null,
            selectedObat: null,
            searchQuery: '',
            sortOption: 'Stok (Terbanyak)',
            stokObat: [] // Diisi dari API atau props
        }
    },
    computed: {
        filteredObat() {
            let result = this.stokObat.filter(obat =>
                obat.nama_obat.toLowerCase().includes(this.searchQuery.toLowerCase())
            )
            // Sort bisa ditambahkan sesuai sortOption
            return result
        }
    },
    methods: {
        toggleProfile() {
            this.showProfile = !this.showProfile
        },
        toggleDropdown(index) {
            this.dropdownIndex = this.dropdownIndex === index ? null : index
        },
        openModal(type, obat = null) {
            this.modal = type
            this.selectedObat = obat
        },
        closeModal() {
            this.modal = null
            this.selectedObat = null
        }
    }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.2s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

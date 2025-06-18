<template>
    <div class="dashboard-container">
        <!-- Dashboard content goes here -->
        <h1>Admin Dashboard</h1>

        <!-- Profile button and popup -->
        <div class="relative">
            <button id="profileBtn" @click="toggleProfilePopup" class="flex items-center space-x-2 focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6 text-blue-900">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
            </button>

            <div v-show="showProfilePopup" id="profilePopup"
                class="absolute z-50 w-64 p-4 bg-white border shadow-lg top-10 right-4 rounded-xl">
                <div class="flex items-center mb-3 space-x-3">
                    <img src="/assets/img/download (3).jpg" alt="Profile" class="object-cover w-12 h-12 rounded-full" />
                    <div>
                        <p class="text-base font-semibold text-gray-800">Mr. Roc</p>
                        <p class="text-xs text-gray-500">Admin Apotek</p>
                    </div>
                </div>
                <hr class="mb-3" />
                <button
                    class="flex items-center mb-3 space-x-2 text-sm text-gray-800 hover:underline w-full px-2 py-2 rounded transition">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-5 h-5 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                    <span>Profil Saya</span>
                </button>
                <button @click="logout" class="w-full py-2 text-sm text-white bg-blue-900 rounded-md hover:bg-blue-800">
                    Keluar
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive data
const showProfilePopup = ref(false)

// Methods
const toggleProfilePopup = (event) => {
    event.stopPropagation()
    showProfilePopup.value = !showProfilePopup.value
}

const closeProfilePopup = (event) => {
    const profilePopup = document.getElementById('profilePopup')
    const profileBtn = document.getElementById('profileBtn')

    if (profilePopup && !profilePopup.contains(event.target) && event.target !== profileBtn) {
        showProfilePopup.value = false
    }
}

const logout = () => {
    // Handle logout logic here
    // You might want to emit an event or call an API
    console.log('Logging out...')
}

// Lifecycle hooks
onMounted(() => {
    document.addEventListener('click', closeProfilePopup)
})

onUnmounted(() => {
    document.removeEventListener('click', closeProfilePopup)
})
</script>

<style scoped>
.dashboard-container {
    padding: 1rem;
}
</style>
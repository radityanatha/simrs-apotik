<template>
  <div
    class="relative min-h-screen flex items-center justify-center bg-cover bg-center before:absolute before:inset-0 before:bg-black/40"
    :style="{ backgroundImage: `url(${bgApotik})` }">
    <!-- Login Card -->
    <div class="relative z-10 bg-white bg-opacity-100 p-8 rounded-lg shadow-md w-full max-w-md">
      <!-- Logo -->
      <div class="flex justify-center mb-4">
        <img :src="logo" alt="Logo" class="h-16 w-16 rounded-full border" />
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="email" class="block text-gray-700 text-sm font-medium mb-1">Email</label>
          <input type="text" id="email" name="email"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>

        <div class="mb-4">
          <label for="password" class="block text-gray-700 text-sm font-medium mb-1">Kata Sandi</label>
          <input type="password" id="password" name="password"
            class="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
        </div>

        <button type="submit" class="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800">
          Masuk
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import logo from '/assets/images/logo-rsi-banjarmasin.png'
import bgApotik from '/assets/images/bg-apotik.jpg'

const handleSubmit = () => {
  // Tambahkan logic login di sini
  console.log('Login submitted')
}
</script>

<style scoped>
/* Tambah style tambahan jika perlu */
</style>

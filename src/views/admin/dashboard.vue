<template>
// @extends('layouts.admin')

<template>('title', 'Admin - Dashboard')

<template>('content')
    {{-- ... Konten Dashboard Admin Anda ... --}}
</template>

@push('scripts')
    {{-- Script dashboard spesifik --}}
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const profileBtn = document.getElementById('profileBtn');
            const profilePopup = document.getElementById('profilePopup');

            if (profileBtn && profilePopup) {
                profileBtn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    profilePopup.classList.toggle('hidden');
                });
                document.addEventListener('click', function(e) {
                    if (!profilePopup.contains(e.target) && e.target !== profileBtn) {
                        profilePopup.classList.add('hidden');
                    }
                });
            }
        });
    </script>
@endpush

</template>

<script setup>
// Add your JS logic here
</script>

<style scoped>
/* Add your styles here */
</style>
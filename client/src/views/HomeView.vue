<script setup lang="ts">
import NavbarCard from '@/components/Card/NavbarCard.vue'
import FooterCard from '@/components/Card/FooterCard.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <NavbarCard />
    <div class="min-h-screen bg-base-100 text-base-content">
      <!-- Hero Section -->
      <section class="hero min-h-[80vh] bg-gradient-to-br from-primary to-secondary text-white">
        <div class="hero-content text-center">
          <div class="max-w-2xl">
            <h1 class="text-5xl font-bold">Selamat Datang di Unitify 🎓</h1>
            <p class="py-6">
              Platform digital untuk Unit Mahasiswa — kelola tugas, jadwal kuliah, dan pengingat
              dengan mudah. Terintegrasi dengan WhatsApp bot, modern, dan fleksibel!
            </p>
            <RouterLink to="/about" class="btn btn-accent mt-4">Pelajari Lebih Lanjut</RouterLink>
          </div>
        </div>
      </section>

      <!-- Fitur Unggulan -->
      <section class="py-16 bg-base-200">
        <div class="max-w-6xl mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12">Fitur Unggulan</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="card bg-base-100 shadow-lg">
              <div class="card-body">
                <h3 class="card-title">Reminder Kuliah</h3>
                <p>Catat jadwal kuliah, atur pengingat otomatis lewat WhatsApp.</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-lg">
              <div class="card-body">
                <h3 class="card-title">Reminder Tugas</h3>
                <p>Takut lupa deadline? Unitify akan bantu kamu mengingatkannya!</p>
              </div>
            </div>
            <div class="card bg-base-100 shadow-lg">
              <div class="card-body">
                <h3 class="card-title">Bot WhatsApp</h3>
                <p>Integrasi dengan Fonnte atau API lainnya. Notifikasi langsung ke HP kamu!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA -->
      <section class="text-center py-20 bg-gradient-to-br from-secondary to-accent text-white">
        <h2 class="text-4xl font-bold mb-4">Siap untuk produktif bersama Unitify?</h2>
        <p class="mb-6">Gabung sekarang dan jadikan waktu belajarmu lebih teratur 🚀</p>
        <RouterLink to="/login" class="btn btn-primary">Mulai Sekarang</RouterLink>
      </section>
    </div>
    <FooterCard />
  </main>
</template>

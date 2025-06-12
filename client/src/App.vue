<script setup lang="ts">
import { RouterView } from 'vue-router'
import { Analytics } from '@vercel/analytics/vue';
import { SpeedInsights } from '@vercel/speed-insights/vue';

import { useHead } from '@vueuse/head'

useHead({
  title: 'Unitify',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/unitify.png',
    },
  ],
  meta: [
    {
      name: 'description',
      content: 'Aplikasi reminder kuliah dan tugas',
    },
  ],
})
</script>

<template>
  <Analytics />
  <SpeedInsights />
  <RouterView />
</template>

<style scoped></style>

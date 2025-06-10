<script setup lang="ts">
import { RouterView } from 'vue-router'

import { useHead } from '@vueuse/head'

useHead({
  title: 'Unitify',
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: 'public/unitify.png',
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
  <RouterView />
</template>

<style scoped></style>

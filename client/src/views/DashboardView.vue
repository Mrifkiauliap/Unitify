<!-- src/views/DashboardView.vue -->
<template>
  <DashboardLayout>
    <div class="welcome-message text-center justify-center items-center mt-8">
      <h2 class="text-xl font-semibold">Welcome to your Dashboard!</h2>
      <p class="text-gray-500 mt-2">Konten masih dalam pengembangan...</p>
      <div class="text-center mt-2 text-lg">🚧 Dashboard masih kosong.</div>
    </div>

    <!-- Display a list of recent notifications -->
    <div class="notifications mt-8">
      <h3 class="text-lg font-medium">Random Notifications</h3>
      <ul class="list-disc pl-5">
        <li class="mt-2">You have 7 new emails.</li>
        <li class="mt-2">Your account was accessed from a new device.</li>
        <li class="mt-2">Update: Scheduled maintenance on Sunday.</li>
      </ul>
    </div>
  </DashboardLayout>
</template>

<script setup lang="ts">
import DashboardLayout from '@/components/Dashboard/DashboardLayout.vue'
</script>

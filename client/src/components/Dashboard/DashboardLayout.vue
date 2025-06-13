<template>
  <div class="drawer lg:drawer-open min-h-screen">
    <!-- Checkbox trigger utk mobile -->
    <input id="sidebar-toggle" type="checkbox" class="drawer-toggle" />

    <!-- =====================  KONTEN  ===================== -->
    <div class="drawer-content flex flex-col">
      <!-- Topbar -->
      <header class="navbar bg-base-100 shadow px-4 justify-between">
        <div class="flex items-center gap-2">
          <!-- Hamburger -->
          <label for="sidebar-toggle" class="btn btn-ghost lg:hidden">
            <HamburgerIcon />
          </label>
          <span class="text-lg font-bold">Halo, {{ userName }}</span>
        </div>

        <div class="flex gap-2 items-center">
          <button class="btn btn-sm btn-ghost" @click="toggleTheme">
            <span v-if="theme === 'dark'">☀️</span>
            <span v-else>🌙</span>
          </button>
          <button class="btn btn-sm btn-outline" @click="logout">Logout</button>
        </div>
      </header>

      <!-- Slot halaman -->
      <main class="p-4 flex-1 overflow-y-auto">
        <slot />
      </main>
    </div>

    <!-- =====================  SIDEBAR  ===================== -->
    <div class="drawer-side">
      <label for="sidebar-toggle" class="drawer-overlay"></label>
      <!-- Pakai komponen Sidebar di sini -->
      <AppSidebar />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { jwtDecode } from 'jwt-decode'
import HamburgerIcon from '@/components/Dashboard/Icon/HamburgerIcon.vue'
import AppSidebar from '@/components/Dashboard/Widgets/AppSidebar.vue'

const router = useRouter()
const userName = ref('Admin')
const theme = ref<'light' | 'dark'>('light')

/** ambil user & theme di mount */
onMounted(() => {
  const token = localStorage.getItem('token')
  if (!token) return router.push('/login')

  try {
    const decoded = jwtDecode(token) as { name?: string }
    userName.value = decoded.name ?? 'User'
  } catch {
    return router.push('/login')
  }

  theme.value = (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
  document.documentElement.setAttribute('data-theme', theme.value)
})

/** toggle dark / light */
const toggleTheme = () => (theme.value = theme.value === 'dark' ? 'light' : 'dark')

watch(theme, (val) => {
  document.documentElement.setAttribute('data-theme', val)
  localStorage.setItem('theme', val)
})

/** logout */
const logout = () => {
  localStorage.removeItem('token')
  document.documentElement.setAttribute('data-theme', 'light')
  router.push('/login')
}
</script>

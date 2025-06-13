<template>
  <aside class="h-full w-64 bg-base-200 p-4">
    <RouterLink
      to="/dashboard"
      class="text-lg font-semibold mb-4"
      @click="handleSidebarClick"
    >
      UNITIFY
    </RouterLink>

    <ul class="menu space-y-1">
      <li>
        <RouterLink
          to="/dashboard"
          class="btn btn-ghost justify-start"
          @click="handleSidebarClick"
        >
          🏠 Dashboard
        </RouterLink>
      </li>

      <li class="menu-item">
        <details class="collapse">
          <summary class="collapse-title btn btn-ghost justify-start">
            <span class="flex items-center space-x-2">
              <span>⚙️ Settings</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </summary>
          <ul class="collapse-content">
            <li>
              <RouterLink to="/settings" @click="handleSidebarClick">
                <span class="flex items-center space-x-2">
                  <span>Umum</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/profile" @click="handleSidebarClick">
                <span class="flex items-center space-x-2">
                  <span>Profil</span>
                  <ProfileIcon />
                </span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/security" @click="handleSidebarClick">
                <span class="flex items-center space-x-2">
                  <span>Keamanan</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 15v2m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </span>
              </RouterLink>
            </li>
          </ul>
        </details>
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import ProfileIcon from '@/components/Dashboard/Icon/ProfileIcon.vue'
import SettingIcon from '@/components/Dashboard/Icon/SettingIcon.vue'

/** Tutup drawer otomatis setelah klik menu di mobile */
function handleSidebarClick() {
  const cb = document.getElementById('sidebar-toggle') as HTMLInputElement | null
  if (cb && window.innerWidth < 1024) cb.checked = false
}
</script>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

const form = reactive({
  name: '',
  email: '',
  password: '',
})

const error = ref('')

const handleRegister = async () => {
  error.value = ''
  if (!form.name || !form.email || !form.password) {
    error.value = 'Semua field wajib diisi.'
    return
  }

  // Simulasi API request
  await new Promise((resolve) => setTimeout(resolve, 1000))
  alert(`Registrasi berhasil!\nNama: ${form.name}\nEmail: ${form.email}`)
}
</script>

<template>
  <div
    class="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 px-4"
  >
    <div class="card w-full max-w-md shadow-2xl bg-base-100 p-8 rounded-xl">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Buat Akun Baru</h2>

      <form @submit.prevent="handleRegister" class="space-y-4">
        <div class="form-control">
          <label class="label">
            <span class="label-text font-medium">Nama Lengkap</span>
          </label>
          <input
            type="text"
            v-model="form.name"
            placeholder="Nama lengkap"
            class="input input-bordered w-full"
          />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text font-medium">Email</span>
          </label>
          <input
            type="email"
            v-model="form.email"
            placeholder="email@example.com"
            class="input input-bordered w-full"
          />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text font-medium">Password</span>
          </label>
          <input
            type="password"
            v-model="form.password"
            placeholder="••••••••"
            class="input input-bordered w-full"
          />
        </div>

        <button class="btn btn-primary w-full mt-2" type="submit">Daftar</button>

        <p v-if="error" class="text-error text-sm text-center mt-2 animate-pulse">
          {{ error }}
        </p>
      </form>

      <p class="text-center mt-6 text-sm text-gray-600">
        Sudah punya akun?
        <RouterLink to="/login" class="text-primary font-semibold hover:underline"
          >Masuk</RouterLink
        >
      </p>
    </div>
  </div>
</template>

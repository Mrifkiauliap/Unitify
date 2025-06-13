<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')

const handleLogin = () => {
  error.value = ''
  if (email.value === 'admin@example.com' && password.value === 'password') {
    alert('Login berhasil!')
  } else {
    error.value = 'Email atau password salah.'
  }
}
</script>


<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100 px-4">
    <div class="card w-full max-w-md shadow-2xl bg-base-100 p-8 rounded-xl">
      <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>

      <form @submit.prevent="handleLogin" class="space-y-4">
        <div class="form-control">
          <label class="label">
            <span class="label-text font-medium">Email</span>
          </label>
          <input
            type="email"
            v-model="email"
            placeholder="email@example.com"
            class="input input-bordered w-full"
            required
          />
        </div>

        <div class="form-control">
          <label class="label">
            <span class="label-text font-medium">Password</span>
          </label>
          <input
            type="password"
            v-model="password"
            placeholder="••••••••"
            class="input input-bordered w-full"
            required
          />
        </div>

        <button class="btn btn-primary w-full mt-2" type="submit">
          Masuk
        </button>

        <p v-if="error" class="text-error text-sm text-center mt-2 animate-pulse">
          {{ error }}
        </p>
      </form>

      <p class="text-center mt-6 text-sm text-gray-600">
        Belum punya akun?
        <RouterLink to="/register" class="text-primary font-semibold hover:underline">Daftar</RouterLink>
      </p>
    </div>
  </div>
</template>

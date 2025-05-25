<script setup>
  import BaseModal from '../components/BaseModal.vue'

  const tools = [
    'Vue 3',
    'Vue Router',
    'Pinia',
    'Vitest',
    'ESLint',
    'Tailwind CSS',
    'DaisyUI',
    'Progressive Web App (PWA) Support',
    'Search Engine Optimization (SEO)',
  ]
</script>

<template>
  <div class="hero bg-base-200 flex-1 overflow-auto">
    <div class="hero-content text-center flex-col">
      <div class="max-w-md">
        <h1 class="text-4xl font-bold">
          Hello there
        </h1>
        <p class="py-4">
          Project Starter 
        </p>
        <ul class="flex flex-wrap justify-center items-center py-2 text-md gap-2">
          <li
            v-for="(tool, index) in tools"
            :key="index"
          >
            {{ tool }}
          </li>
        </ul>
      </div>
      <BaseModal />
    </div>
  </div>
</template>

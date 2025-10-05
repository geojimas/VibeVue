<template>
  <div class="hero bg-base-200 flex-1 overflow-auto">
    <div class="hero-content text-center flex-col">
      <div class="max-w-md">
        <h1 class="text-2xl font-bold">
          {{ $t('home.page') }}
        </h1>
        <p class="py-4 text-md">
          {{ $t('home.template') }}
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

<script setup>
  import { defineAsyncComponent } from 'vue'
  
  const BaseModal = defineAsyncComponent(() => import('../components/BaseModal.vue'))

  const tools = [
    'Vue 3',
    'Vue Router',
    'Pinia',
    'Vitest',
    'vue-i18n',
    'ESLint',
    'Tailwind CSS',
    'DaisyUI',
    'Progressive Web App (PWA) Support',
    'Search Engine Optimization (SEO)',
  ]
</script>

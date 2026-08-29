<template>
  <div class="hero min-h-128 bg-base-200 text-base-content flex-1 overflow-auto">
    <BaseFade
      :duration="600"
      :appear="true"
    >
      <div class="hero-content min-h-80 text-center flex-col">
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
    </BaseFade>
  </div>
</template>

<script setup>
import BaseFade from '../components/BaseFade.vue'
import BaseModal from '../components/BaseModal.vue'

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

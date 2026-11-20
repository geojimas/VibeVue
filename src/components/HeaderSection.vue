<template>
  <nav class="border-b border-line bg-canvas">
    <div class="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-4">
      <div class="flex items-center gap-6">
        <RouterLink
          class="app-link font-sans text-sm"
          to="/"
        >
          {{ $t('nav.main') }}
        </RouterLink>
        <RouterLink
          class="app-link font-sans text-sm"
          to="/about"
        >
          {{ $t('nav.second') }}
        </RouterLink>
      </div>
      <div class="flex items-center gap-4">
        <ThemeToggle />
        <SwitchLanguage />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { defineAsyncComponent } from 'vue'

  const ThemeToggle = defineAsyncComponent(() => import('./ThemeToggle.vue'))
  const SwitchLanguage = defineAsyncComponent(() => import('./SwitchLanguage.vue'))
</script>

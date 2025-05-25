
<script setup>
  import BaseButton from './BaseButton.vue'
  import { RouterLink } from 'vue-router'
  import ThemeToggle from './ThemeToggle.vue'
</script>


<template>
  <nav class="flex justify-center items-center flex-row p-2">
    <RouterLink
      class="mx-4"
      to="/"
    >
      <BaseButton
        theme="info"
        label="Primary Page"
      />
    </RouterLink>
    <RouterLink
      class="mx-4"
      to="/second-page"
    >
      <BaseButton
        theme="info"
        label="Secondary Page"
      />
    </RouterLink>
    <ThemeToggle class="mx-4" />
  </nav>
</template>


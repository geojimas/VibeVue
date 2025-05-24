
<script setup>
  import BaseButton from './BaseButton.vue'
  import { RouterLink } from 'vue-router'
  import ThemeToggle from './ThemeToggle.vue'
</script>


<template>
  <nav class="flex justify-center items-center flex-row p-4">
    <RouterLink
      class="mx-4"
      to="/"
    >
      <BaseButton label="Primary Page" />
    </RouterLink>
    <RouterLink
      class="mx-4"
      to="/second-page"
    >
      <BaseButton label="Secondary Page" />
    </RouterLink>
    <ThemeToggle class="mx-4" />
  </nav>
</template>


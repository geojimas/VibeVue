
<script setup>
  import BaseButton from './BaseButton.vue'
  import { RouterLink } from 'vue-router'
  import ThemeToggle from './ThemeToggle.vue'
  import SwitchLanguage from './SwitchLanguage.vue'
</script>


<template>
  <nav class="flex justify-center items-center flex-row p-2">
    <RouterLink
      class="mx-4"
      to="/"
    >
      <BaseButton
        theme="success"
        :label="$t('nav.main')"
      />
    </RouterLink>
    <RouterLink
      class="mx-4"
      to="/about"
    >
      <BaseButton
        theme="success"
        :label="$t('nav.second')"
      />
    </RouterLink>
    <ThemeToggle class="mx-4" />
    <SwitchLanguage />
  </nav>
</template>


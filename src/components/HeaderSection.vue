<template>
  <nav class="flex justify-center items-center flex-row p-2">
    <RouterLink to="/">
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
    <ThemeToggle class="mr-4" />
    <SwitchLanguage />
  </nav>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
  import { defineAsyncComponent } from 'vue'

  const ThemeToggle = defineAsyncComponent(() => import('./ThemeToggle.vue'))
  const BaseButton = defineAsyncComponent(() => import('./BaseButton.vue'))
  const SwitchLanguage = defineAsyncComponent(() => import('./SwitchLanguage.vue'))

</script>

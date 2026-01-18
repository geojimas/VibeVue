<template>
  <nav class="flex justify-center md:justify-evenly items-center flex-row p-2">
    <div class="flex gap-6">
      <RouterLink
        class="tracking-wide opacity-50 hover:opacity-80"
        to="/"
      >
        {{ $t('nav.main') }}
      </RouterLink>
      <RouterLink
        class="tracking-wide opacity-50 hover:opacity-80"
        to="/about"
      >
        {{ $t('nav.second') }}
      </RouterLink>
    </div>
    <div class="flex gap-6">
      <ThemeToggle class="mx-4" />
      <SwitchLanguage />
    </div>
  </nav>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
  import { defineAsyncComponent } from 'vue'

  const ThemeToggle = defineAsyncComponent(() => import('./ThemeToggle.vue'))
  const SwitchLanguage = defineAsyncComponent(() => import('./SwitchLanguage.vue'))

</script>


<style lang="css" scoped>
  .active-route {
    text-decoration: underline;
    text-underline-offset: 17px;
    text-decoration-thickness: 3px;
    font-weight: 600;
    opacity: 1;
  }
</style>
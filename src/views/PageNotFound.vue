<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-base-200 text-center px-4">
    <h1 class="text-9xl font-bold text-primary">
      {{ $t('notFound.status') }}
    </h1>
    <h2 class="text-3xl font-semibold mt-4 text-base-content">
      {{ $t('notFound.header') }}
    </h2>
    <p class="text-base-content mt-2 max-w-md">
      {{ $t('notFound.message') }}
    </p>
    <RouterLink
      to="/"
    >
      <BaseButton
        class="mt-4"
        theme="error"
        :label="$t('notFound.return')"
      />
    </RouterLink>
  </div>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
  import BaseButton from '../components/BaseButton.vue'

</script>

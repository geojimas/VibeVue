<template>
  <div class="flex min-h-screen flex-col bg-canvas px-6 text-ink">
    <section class="mx-auto flex w-full max-w-4xl flex-1 flex-col justify-center py-16">
      <p class="font-sans text-sm font-medium text-brand">
        {{ $t('notFound.status') }}
      </p>
      <h1 class="mt-4 font-sans text-4xl font-semibold leading-tight sm:text-5xl">
        {{ $t('notFound.header') }}
      </h1>
      <p class="mt-6 max-w-xl font-sans text-base leading-7 text-muted">
        {{ $t('notFound.message') }}
      </p>
      <div class="mt-10">
        <RouterLink
          class="app-link"
          to="/"
        >
          {{ $t('notFound.return') }}
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<script setup>
  import { RouterView } from 'vue-router'
  import HeaderSection from './components/HeaderSection.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <HeaderSection />
    <RouterView />
  </div>
</template>


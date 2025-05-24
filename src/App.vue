<script setup>
  import { RouterView } from 'vue-router'
  import HeaderSection from './components/HeaderSection.vue'
</script>

<template>
  <div class="animate__animated animate__fadeIn">
    <HeaderSection />
    <RouterView />
  </div>
</template>


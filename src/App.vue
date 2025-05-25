<script setup>
  import { RouterView } from 'vue-router'
  import HeaderSection from './components/HeaderSection.vue'
  import FooterSection from './components/FooterSection.vue'
</script>

<template>
  <div class="flex flex-col h-screen">
    <HeaderSection />
    <RouterView />
    <FooterSection />
  </div>
</template>


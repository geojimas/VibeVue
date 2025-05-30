<template>
  <div class="flex flex-col h-screen">
    <HeaderSection v-if="!route.meta.hideLayout" />
    <RouterView />
    <FooterSection v-if="!route.meta.hideLayout" />
  </div>
</template>

<script setup>

  import { RouterView, useRoute } from 'vue-router'
  import HeaderSection from './components/HeaderSection.vue'
  import FooterSection from './components/FooterSection.vue'

  const route = useRoute()

</script>

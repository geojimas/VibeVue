<template>
  <main class="flex flex-col h-screen">
    <HeaderSection v-if="shouldShowLayout" />

    <LoadingSpinner v-if="isLoading" />
    <RouterView v-else />

    <FooterSection v-if="shouldShowLayout" />
  </main>
</template>

<script setup>
  import { RouterView, useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { computed, defineAsyncComponent } from 'vue'
  import { useLoadingStore } from './store/loader'

  const HeaderSection = defineAsyncComponent(() => import('./components/HeaderSection.vue'))
  const FooterSection = defineAsyncComponent(() => import('./components/FooterSection.vue'))
  const LoadingSpinner = defineAsyncComponent(() => import('./components/LoadingSpinner.vue'))


  const route = useRoute()
  const loadingStore = useLoadingStore()
  const { isLoading } = storeToRefs(loadingStore)

  const shouldShowLayout = computed(() => !route.meta?.hideLayout)

</script>

<template>
  <div class="flex flex-col h-screen">
    <HeaderSection v-if="isNotFoundPageRendered" />
    <LoadingSpinner v-if="isLoading" />
    <RouterView v-else />
    <FooterSection v-if="isNotFoundPageRendered" />
  </div>
</template>

<script setup>
  import { RouterView, useRoute } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { computed } from 'vue'

  import HeaderSection from './components/HeaderSection.vue'
  import FooterSection from './components/FooterSection.vue'
  import LoadingSpinner from './components/LoadingSpinner.vue'
  import { useLoadingStore } from './store/loader'

  const loadingStore = useLoadingStore()
  const { isLoading } = storeToRefs(loadingStore)

  const route = useRoute()

  const isNotFoundPageRendered = computed( () => {
    return !route.meta.hideLayout
  })

</script>

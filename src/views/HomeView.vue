<script setup>
  import BaseModal from '../components/BaseModal.vue'
</script>

<template>
  <div class="hero bg-base-200 flex-1 overflow-auto">
    <div class="hero-content text-center flex-col">
      <div class="max-w-md">
        <h1 class="text-4xl font-bold">
          Hello there
        </h1>
        <p class="py-6">
          Project Starter with Vue3 / Vue router / Pinia / Tailwind CSS / Daisy UI
        </p>
      </div>
      <BaseModal />
    </div>
  </div>
</template>

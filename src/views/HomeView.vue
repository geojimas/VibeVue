<script setup>
  import BaseModal from '../components/BaseModal.vue'
</script>

<template>
  <div class="hero bg-base-200 h-screen">
    <div class="hero-content flex flex-col text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">
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

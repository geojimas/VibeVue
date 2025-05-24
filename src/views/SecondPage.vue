<script setup>
  import { storeToRefs } from 'pinia'
  import { useCounterStore } from '../store/counter'
  import BaseButton from '../components/BaseButton.vue'

  const counterStore = useCounterStore()

  const { count, doubleCount } = storeToRefs(counterStore)
  const { increment } = counterStore

</script>

<template>
  <div class="hero bg-base-500 h-screen">
    <div class="hero-content flex justify-center items-center flex-col lg:flex-row">
      <div>
        <h1 class="text-5xl font-bold">
          Second Page
        </h1>
        <p class="py-6 text-2xl">
          This is the second page , interact with Pinia Store
        </p>
        <div class="flex flex-row text-center ">
          <div
            role="alert"
            class="alert alert-warning mr-5"
          >
            <span class="text-xl font-bold">Count : {{ count }}</span>
          </div>
          <div
            role="alert"
            class="alert alert-success"
          >
            <span class="text-xl font-bold">Double Count :{{ doubleCount }}</span>
          </div>
        </div>
      </div>
      <BaseButton
        label="Click me"
        theme="warning"
        @click="increment"
      />
    </div>
  </div>
</template>

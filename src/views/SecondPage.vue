<script setup>
  import { storeToRefs } from 'pinia'
  import { useCounterStore } from '../store/counter'

  const counterStore = useCounterStore()

  const { count, doubleCount } = storeToRefs(counterStore)
  const { increment } = counterStore

</script>

<template>
  <div class="hero bg-base-500 h-screen">
    <div class="hero-content flex justify-center items-center flex-col lg:flex-row">
      <img
        loading="lazy"
        src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
        class="max-w-sm rounded-lg shadow-2xl"
        alt="logo"
      >
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
            <span class="text-2xl font-bold">Count : {{ count }}</span>
          </div>
          <div
            role="alert"
            class="alert alert-success"
          >
            <span class="text-2xl font-bold">Double Count :{{ doubleCount }}</span>
          </div>
        </div>
      </div>
      <button
        class="btn btn-neutral"
        @click="increment"
      >
        Increment
      </button>
    </div>
  </div>
</template>

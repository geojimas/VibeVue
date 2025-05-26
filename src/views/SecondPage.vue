<script setup>
  import { storeToRefs } from 'pinia'
  import { useCounterStore } from '../store/counter'
  import BaseButton from '../components/BaseButton.vue'

  const counterStore = useCounterStore()

  const { count, doubleCount } = storeToRefs(counterStore)
  const { increment } = counterStore

</script>

<template>
  <div class="hero bg-base-200 flex-1 overflow-auto">
    <div class="hero-content flex-col lg:flex-row">
      <div class="card bg-base-100 max-w-88 shadow-sm">
        <div class="card-body gap-9">
          <h2 class="card-title flex justify-center text-3xl">
            Second Page
          </h2>
          <BaseButton
            label="Click me"
            theme="primary"
            @click="increment"
          />
          <p class="text-xl">
            Interact with Pinia Store
          </p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline badge-error">
              <span class="text-lg">Count : {{ count }}</span>
            </div>
            <div class="badge badge-outline badge-warning">
              <span class="text-lg">Double Count :{{ doubleCount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

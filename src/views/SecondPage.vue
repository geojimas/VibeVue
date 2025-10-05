<template>
  <div class="hero bg-base-200 flex-1 overflow-auto">
    <div class="hero-content flex-col lg:flex-row">
      <div class="card bg-base-100 max-w-88 shadow-sm">
        <div class="card-body gap-9">
          <h2 class="card-title flex justify-center text-3xl">
            {{ $t('second.page') }}
          </h2>
          <BaseButton
            :label="$t('second.store_click')"
            theme="primary"
            @click="increment"
          />
          <p class="text-xl">
            {{ $t('second.header') }}
          </p>
          <div class="card-actions justify-end">
            <div class="badge badge-outline badge-error">
              <span class="text-lg"> {{ $t('second.counter') }} : {{ count }}</span>
            </div>
            <div class="badge badge-outline badge-warning">
              <span class="text-lg">{{ $t('second.double_counter') }} : {{ doubleCount }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
  import { defineAsyncComponent } from 'vue'
  import { storeToRefs } from 'pinia'
  import { useCounterStore } from '../store/counter'

  const BaseButton = defineAsyncComponent(() => import('../components/BaseButton.vue'))

  const counterStore = useCounterStore()

  const { count, doubleCount } = storeToRefs(counterStore)
  const { increment } = counterStore

</script>

<template>
  <div class="flex-1 overflow-auto bg-canvas text-ink">
    <BaseFade
      :duration="400"
      :appear="true"
    >
      <section class="mx-auto w-full max-w-4xl px-6 py-16 sm:py-24">
        <p class="font-sans text-sm font-medium text-brand">
          {{ $t('second.kicker') }}
        </p>

        <h1 class="mt-4 font-sans text-4xl leading-tight font-semibold sm:text-5xl">
          {{ $t('second.headlineFirst') }}
          <br>
          {{ $t('second.headlineSecond') }}
        </h1>

        <p class="mt-6 max-w-xl font-sans text-base leading-7 text-muted">
          {{ $t('second.intro') }}
        </p>

        <div class="mt-10 border-t border-line">
          <div class="flex items-baseline justify-between gap-4 border-b border-line py-4">
            <span class="font-sans text-sm text-muted">{{ $t('second.counter') }}</span>
            <span class="font-sans text-2xl font-semibold tabular-nums">{{ count }}</span>
          </div>
          <div class="flex items-baseline justify-between gap-4 border-b border-line py-4">
            <span class="font-sans text-sm text-muted">{{ $t('second.double_counter') }}</span>
            <span class="font-sans text-2xl font-semibold tabular-nums">{{ doubleCount }}</span>
          </div>
        </div>

        <BaseButton
          class="mt-8"
          :label="$t('second.addOne')"
          theme="none"
          @click="increment"
        />

        <div class="mt-12">
          <RouterLink
            class="app-link"
            to="/"
          >
            {{ $t('second.back') }}
          </RouterLink>
        </div>
      </section>
    </BaseFade>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'
import { RouterLink } from 'vue-router'
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../store/counter'

  const BaseFade = defineAsyncComponent(() => import('../components/BaseFade.vue'))
  const BaseButton = defineAsyncComponent(() => import('../components/BaseButton.vue'))

  const counterStore = useCounterStore()

  const { count, doubleCount } = storeToRefs(counterStore)
  const { increment } = counterStore
</script>

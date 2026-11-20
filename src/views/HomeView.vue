<template>
  <div class="flex-1 overflow-auto bg-canvas text-ink">
    <BaseFade
      :duration="400"
      :appear="true"
    >
      <section class="mx-auto w-full max-w-4xl px-6 py-16 sm:py-24">
        <p class="font-sans text-sm font-medium text-brand">
          {{ $t('home.kicker') }}
        </p>

        <h1 class="mt-4 font-sans text-4xl leading-tight font-semibold sm:text-5xl">
          {{ $t('home.headlineFirst') }}
          <br>
          {{ $t('home.headlineSecond') }}
        </h1>

        <p class="mt-6 max-w-xl font-sans text-base leading-7 text-muted">
          {{ $t('home.intro') }}
        </p>

        <div class="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2">
          <span class="font-sans text-sm text-muted">{{ $t('home.quickstartLabel') }}</span>
          <code class="font-sans text-sm font-medium text-brand">{{ $t('home.quickstartCommand') }}</code>
        </div>

        <div class="mt-14 border-t border-line pt-8">
          <h2 class="font-sans text-sm font-medium text-muted">
            {{ $t('home.inTheBox') }}
          </h2>
          <ToolsList :tools="tools" />
        </div>

        <div class="mt-12">
          <BaseModal />
        </div>
      </section>
    </BaseFade>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BaseFade from '../components/BaseFade.vue'
import BaseModal from '../components/BaseModal.vue'
import ToolsList from '../components/ToolsList.vue'

  const { tm } = useI18n()
  const tools = computed(() => tm('home.tools'))
</script>

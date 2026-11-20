<template>
  <ul class="tools-list mt-5 grid gap-x-8 sm:grid-cols-2">
    <li
      v-for="(tool, index) in tools"
      :key="index"
      class="tool-row flex items-center gap-3 border-b border-line py-2.5 font-sans text-sm text-ink"
    >
      <span
        class="h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
        aria-hidden="true"
      />
      <span class="tool-name">{{ rt(tool) }}</span>
    </li>
  </ul>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

  defineOptions({
    name: 'ToolsList',
  })

  defineProps({
    tools: {
      type: Array,
      required: true,
    },
  })

  const { rt } = useI18n()
</script>

<style lang="css" scoped>
  .tool-name {
    transition: color 150ms ease;
  }

  .tool-row:hover .tool-name {
    color: var(--color-brand);
  }
</style>

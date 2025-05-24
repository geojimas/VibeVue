<script setup>
  import { useTheme } from '../composables/useTheme'

  const { currentTheme, toggleTheme } = useTheme()
</script>

<template>
  <label class="flex cursor-pointer gap-2">
    <img
      src="../assets/light.svg"
      alt="img"
    >
    <input
      type="checkbox"
      :value="currentTheme"
      class="toggle theme-controller"
      @change="toggleTheme"
    >
    <img
      src="../assets/dark.svg"
      alt="img"
    >
  </label>
</template>

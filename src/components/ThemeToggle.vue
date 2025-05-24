<script setup>
  import { computed } from 'vue'
  import { useTheme } from '../composables/useTheme'

  const { currentTheme, toggleTheme } = useTheme()

  const isDark = computed(() => currentTheme.value === 'dark')
</script>

<template>
  <label class="flex cursor-pointer gap-2 items-center">
    <img
      src="../assets/light.svg"
      alt="Light theme"
    >
    <form>
      <label for="toggleTheme" />
      <input
        id="toggleTheme"
        type="checkbox"
        :checked="isDark"
        class="toggle theme-controller"
        @change="toggleTheme"
      >
    </form>

    <img
      src="../assets/dark.svg"
      alt="Dark theme"
    >
  </label>
</template>

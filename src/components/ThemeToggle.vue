<template>
  <div class="flex cursor-pointer gap-2 items-center">
    <SunSVG />
    <label
      for="toggleTheme"
      class="sr-only"
    >Toggle dark mode
    </label>
    <input
      id="toggleTheme"
      aria-label="Toggle dark mode"
      type="checkbox"
      :checked="isDarkTheme"
      class="toggle toggle-md"
      @change="toggleTheme"
    >
    <MoonSVG />
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useTheme } from '../composables/useTheme'
  import SunSVG from '../assets/SunSVG.vue'
  import MoonSVG from '../assets/MoonSVG.vue'

  const { currentTheme, toggleTheme } = useTheme()

  const isDarkTheme = computed(() => currentTheme.value === 'dark')
</script>

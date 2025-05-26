<script setup>
  import { computed } from 'vue'
  import { useTheme } from '../composables/useTheme'
  import SunSVG from '../assets/SunSVG.vue'
  import MoonSVG from '../assets/MoonSVG.vue'

  const { currentTheme, toggleTheme } = useTheme()

  const isDarkTheme = computed(() => currentTheme.value === 'dark')
</script>

<template>
  <div class="flex cursor-pointer gap-2 items-center">
    <SunSVG />
    <label
      for="toggleTheme"
    >
      <input
        id="toggleTheme"
        type="checkbox"
        :checked="isDarkTheme"
        class="toggle toggle-md"
        @change="toggleTheme"
      >
    </label>
    <MoonSVG />
  </div>
</template>

<script setup>
  import { computed } from 'vue'
  import { useTheme } from '../composables/useTheme'
  import SunSVG from './SunSVG.vue'
  import MoonSVG from './MoonSVG.vue'

  const { currentTheme, toggleTheme } = useTheme()

  const isDark = computed(() => currentTheme.value === 'dark')
</script>

<template>
  <label class="flex cursor-pointer gap-2 items-center">
    <SunSVG />
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
    <MoonSVG />
  </label>
</template>

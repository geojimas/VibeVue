<template>
  <button
    type="button"
    :aria-label="$t(isDarkTheme ? 'theme.toLight' : 'theme.toDark')"
    class="flex h-8 w-8 items-center justify-center text-muted transition-colors hover:text-brand"
    @click="toggleTheme"
  >
    <SunSVG
      v-if="!isDarkTheme"
      class="h-4 w-4"
    />
    <MoonSVG
      v-else
      class="h-4 w-4"
    />
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { useTheme } from '../composables/useTheme'
import SunSVG from '../assets/SunSVG.vue'
import MoonSVG from '../assets/MoonSVG.vue'
import { THEMES } from '../constants/index.js'

  const { currentTheme, toggleTheme } = useTheme()

  const isDarkTheme = computed(() => currentTheme.value === THEMES.DARK)
</script>

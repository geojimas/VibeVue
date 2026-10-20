<template>
  <button
    class="btn btn-outline text-xs md:text-lg"
    :class="themeClass"
    @click="$emit('click')"
  >
    {{ label }}
  </button>
</template>


<script setup>
import { toRefs, computed } from 'vue'
import { AVAILABLE_COLORS, COLOR_VARIANTS } from '../constants/index.js'

  defineOptions({
    name: 'BaseButton',
    inheritAttrs: true,
  })

  defineEmits(['click'])

  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: 'none',
      validator: value =>
        AVAILABLE_COLORS.includes(value),
    },
  })

  const { label, theme } = toRefs(props)

  const themeClass = computed(() => COLOR_VARIANTS[theme.value] || '')

</script>

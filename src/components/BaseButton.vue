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
  import Constants from '../constants/index.js'

  defineOptions({
    inheritAttrs: true,
  })

  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: 'none',
      validator: value =>
        Constants.AVAILABLE_COLORS.includes(value),
    },
  })

  defineEmits(['click'])

  const { label, theme } = toRefs(props)

  const themeClass = computed(() => Constants.COLOR_VARIANTS[theme.value] || '')

</script>



<script setup>
  import { toRefs, computed } from 'vue'

  defineOptions({
    inheritAttrs: true
  })

  const props = defineProps({
    label: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: '',
      validator: value =>
        ['', 'primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error'].includes(value),
    }
  })
  const { label, theme } = toRefs(props)

  const themeClass = computed(() => {
    return theme.value || ''
  })

</script>

<template>
  <button
    :class="`btn btn-${themeClass} btn-outline text-xs md:text-xl`"
    v-bind="$attrs"
  >
    {{ label }}
  </button>
</template>



<script setup>
  import { toRefs } from 'vue'

  const props = defineProps({
    label: {
      type: String,
      required: true,
    }
  })
  const { label } = toRefs(props)

</script>

<template>
  <button class="btn btn-outline text-xs md:text-xl btn-primary">
    {{ label }}
  </button>
</template>


<template>
  <motion.div
    :initial="{ opacity: 0, scale: 0 }"
    :animate="{ opacity: 1, scale: 1 }"
    :transition="{ duration: 0.2 }"
    v-bind="$attrs"
  >
    <slot />
  </motion.div>
</template>

<script setup>
  import { motion } from 'motion-v'

  defineOptions({
    name: 'BaseMotion',
    inheritAttrs: true,
  })
</script>
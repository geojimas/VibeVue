<template>
  <Transition
    name="fade"
    :appear="appear"
    :style="{
      '--animation-duration': duration + 'ms',
      '--animation-easing': easing,
      '--animation-delay': delay + 'ms',
    }"
    v-bind="$attrs"
  >
    <slot />
  </Transition>
</template>

<script setup>

  defineOptions({ 
    name: 'BaseFade',
    inheritAttrs: true 
  })

  defineProps({
    duration: {
      type: Number,
      default: 300,
    },
    easing: {
      type: String,
      default: 'ease',
    },
    delay: {
      type: Number,
      default: 0,
    },
    appear: {
      type: Boolean,
      default: true,
    },
  })
</script>

<style scoped lang="css">

/* Fade Animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity var(--animation-duration) var(--animation-easing) var(--animation-delay);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

</style>

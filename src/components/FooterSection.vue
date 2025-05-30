<script setup>
  const year = new Date().getFullYear()
</script>

<template>
  <div class="text-xs p-2 text-center">
    {{ $t('footer.header') }} &#169; {{ year }} {{ $t('footer.label') }}
  </div>
</template>

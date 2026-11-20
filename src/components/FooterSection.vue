<template>
  <footer class="border-t border-line bg-canvas">
    <div class="mx-auto flex w-full max-w-4xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-5 font-sans text-xs text-muted">
      <span>{{ $t('footer.header') }} © {{ year }}</span>
      <span>{{ $t('footer.label') }}</span>
    </div>
  </footer>
</template>

<script setup>
  const year = new Date().getFullYear()
</script>


<template>
  <BaseButton
    class="btn btn-dash"
    :label="nextLangLabel"
    @click="toggleLanguage"
  />
</template>

<script setup>
  import { useI18n } from 'vue-i18n'
  import { computed } from 'vue'
  import BaseButton from './BaseButton.vue'

  const { locale } = useI18n()

  const toggleLanguage = () => {
    locale.value = locale.value === 'en' ? 'el' : 'en'
    localStorage.setItem('lang', locale.value)
  }

  const nextLangLabel = computed(() => (locale.value === 'en' ? 'GR' : 'EN'))
</script>
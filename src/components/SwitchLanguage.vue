<template>
  <BaseButton
    class="btn btn-dash"
    :label="nextLanguageLabel"
    @click="toggleLanguage"
  />
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'
import { AVAILABLE_LANGUAGES, LANGUAGES } from '../constants/index.js'
import BaseButton from './BaseButton.vue'


  const { locale } = useI18n()

  const nextLanguage = computed(() => {
    return AVAILABLE_LANGUAGES.find((lang) => lang !== locale.value) || 'en'
  })

  const toggleLanguage = () => {
    locale.value = nextLanguage.value
    localStorage.setItem('lang', locale.value)
  }

  const nextLanguageLabel = computed(() => LANGUAGES[nextLanguage.value.toUpperCase()])

</script>

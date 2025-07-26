<template>
  <BaseButton
    class="btn btn-dash"
    :label="nextLanguageLabel"
    @click="toggleLanguage"
  />
</template>

<script setup>
  import { useI18n } from 'vue-i18n'
  import { computed, defineAsyncComponent } from 'vue'
  import Constants from '../constants/index.js'

  const BaseButton = defineAsyncComponent(() => import('./BaseButton.vue'))

  const { locale } = useI18n()

  const nextLanguage = computed(() => {
    return Constants.AVAILABLE_LANGUAGES.find((lang) => lang !== locale.value) || 'en'
  })

  const toggleLanguage = () => {
    locale.value = nextLanguage.value
    localStorage.setItem('lang', nextLanguage.value)
  }

  const nextLanguageLabel = computed(() => Constants.LANGUAGES[nextLanguage.value.toUpperCase()])

</script>

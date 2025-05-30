import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import { messages } from './locales/locale'

import './assets/base.css'

const app = createApp(App)
const pinia = createPinia()

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'el',
  messages,
})

app.use(pinia)
app.use(router)
app.use(i18n)

app.mount('#app')

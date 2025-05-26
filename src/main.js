import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { createGtag } from 'vue-gtag'

import App from './App.vue'
import router from './router'
import { messages } from './locales/locale'

import '../node_modules/nprogress/nprogress.css'
import './assets/base.css'

const app = createApp(App)

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'el',
  messages,
})

const gtag = createGtag({
  tagId: 'G-ET8C46E6YZ',
})

app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(gtag)

app.mount('#app')

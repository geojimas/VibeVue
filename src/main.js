import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import { localesEL } from './locales/localesEL'
import { localesEN } from './locales/localesEN'

import './assets/base.css'

const app = createApp(App)
const pinia = createPinia()

const i18n = createI18n({
  legacy: false,
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: 'el',
  messages: {
    en: localesEN,
    el: localesEL
  },
})

app.use(pinia)
app.use(router)
app.use(i18n)

app.mount('#app')

function loadAnalytics() {
  const script = document.createElement('script')
  script.setAttribute('data-collect-dnt', 'true')
  script.async = true
  script.src = 'https://scripts.simpleanalyticscdn.com/latest.js'
  document.body.appendChild(script)
}

function scheduleAnalytics() {
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(loadAnalytics, { timeout: 2000 })
  } else {
    window.setTimeout(loadAnalytics, 2000)
  }
}

if (typeof window !== 'undefined') {
  if (document.readyState === 'complete') {
    scheduleAnalytics()
  } else {
    window.addEventListener('load', scheduleAnalytics)
  }
}

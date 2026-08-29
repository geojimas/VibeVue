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

function shouldSkipAnalytics() {
  const dnt = navigator.doNotTrack || window.doNotTrack
  const isLocalhost = ['localhost', '127.0.0.1', '::1'].includes(window.location.hostname)

  return isLocalhost || (!!dnt && (dnt === '1' || dnt === 'yes'))
}

function loadAnalytics() {
  if (shouldSkipAnalytics()) return

  const existingScript = document.querySelector('script[data-collect-dnt="true"]')
  if (existingScript) return

  const script = document.createElement('script')
  script.setAttribute('data-collect-dnt', 'true')
  script.async = true
  script.defer = true
  script.src = 'https://scripts.simpleanalyticscdn.com/latest.js'
  script.onerror = () => {
    script.remove()
    window.__saLoaded = false
  }
  document.head.appendChild(script)
}

function scheduleAnalytics() {
  const runner = () => {
    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(loadAnalytics, { timeout: 5000 })
    } else {
      window.setTimeout(loadAnalytics, 2000)
    }
  }

  if (document.readyState === 'complete') {
    runner()
  } else {
    window.addEventListener('load', runner, { once: true })
  }
}

if (typeof window !== 'undefined') {
  scheduleAnalytics()
}

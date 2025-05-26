
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import { messages } from './locales/locale'

import '../node_modules/nprogress/nprogress.css'
import './assets/base.css'

const app = createApp(App)
const i18n = createI18n({
    legacy: false,
    locale: localStorage.getItem('lang') || 'en',
    fallbackLocale: 'en',
    messages,
})

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')

import { beforeEach, describe, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'
import { AVAILABLE_LANGUAGES } from '../constants/index.js'
import SwitchLanguage from './SwitchLanguage.vue'

function mountComponent(locale) {
  const i18n = createI18n({
    legacy: false,
    locale,
    messages: {
      en: {},
      el: {},
    },
  })

  return {
    i18n,
    wrapper: mount(SwitchLanguage, {
      global: {
        plugins: [i18n],
      },
    }),
  }
}

describe('SwitchLanguage', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  test('shows the other available language', () => {
    const { wrapper } = mountComponent('en')

    expect(wrapper.text()).toBe('GR')
  })

  test('switches the locale and saves the selection', async () => {
    const { i18n, wrapper } = mountComponent('en')

    await wrapper.find('button').trigger('click')

    expect(i18n.global.locale.value).toBe('el')
    expect(localStorage.getItem('lang')).toBe('el')
    expect(wrapper.text()).toBe('EN')
  })

  test('falls back to English when there is no other available language', () => {
    const availableLanguages = [...AVAILABLE_LANGUAGES]

    AVAILABLE_LANGUAGES.splice(0, AVAILABLE_LANGUAGES.length, 'en')

    try {
      const { wrapper } = mountComponent('en')

      expect(wrapper.text()).toBe('EN')

      wrapper.unmount()
    } finally {
      AVAILABLE_LANGUAGES.splice(0, AVAILABLE_LANGUAGES.length, ...availableLanguages)
    }
  })
})

import { describe, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import { createI18n } from 'vue-i18n'

import { localesEN } from '../locales/localesEN'
import FooterSection from './FooterSection.vue'

function mountComponent() {
  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
      en: localesEN,
    },
  })

  return mount(FooterSection, {
    global: {
      plugins: [i18n],
    },
  })
}

describe('FooterSection', () => {
  test('renders the copyright year and translated label', () => {
    const wrapper = mountComponent()

    const text = wrapper.text().replace(/\s+/g, ' ')
    expect(text).toContain(`Copyright © ${new Date().getFullYear()}`)
    expect(text).toContain('by Dimitris Georgiadis, All Rights reserved.')
  })
})

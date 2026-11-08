import { describe, expect, test, vi } from 'vitest'

import { flushPromises, mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import { localesEN } from '../locales/localesEN'
import SecondPage from './SecondPage.vue'

async function mountComponent() {
  const pinia = createPinia()

  const i18n = createI18n({
    legacy: false,
    locale: 'en',
    messages: {
      en: localesEN,
    },
  })

  const wrapper = mount(SecondPage, {
    global: {
      plugins: [pinia, i18n],
    },
  })

  // Wait for the async BaseFade and BaseButton imports to resolve before asserting on the rendered page.
  await vi.dynamicImportSettled()

  return wrapper
}

describe('SecondPage', () => {
  test('renders the initial count and double count values', async () => {
    const wrapper = await mountComponent()

    expect(wrapper.text().replace(/\s+/g, ' ')).toContain('Count : 0')
    expect(wrapper.text().replace(/\s+/g, ' ')).toContain('Double Count : 0')
  })

  test('increments the counter and its doubled value', async () => {
    const wrapper = await mountComponent()

    await wrapper.find('button').trigger('click')

    expect(wrapper.text().replace(/\s+/g, ' ')).toContain('Count : 1')
    expect(wrapper.text().replace(/\s+/g, ' ')).toContain('Double Count : 2')
  })
})

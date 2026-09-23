import { describe, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import { localesEN } from '../locales/localesEN'
import SecondPage from './SecondPage.vue'

function mountComponent() {
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
      stubs: {
        BaseFade: {
          name: 'BaseFade',
          template: '<div><slot /></div>',
        },
        BaseButton: {
          name: 'BaseButton',
          props: ['label'],
          template: '<button @click="$emit(\'click\')">{{ label }}</button>',
        },
      },
    },
  })

  return wrapper
}

describe('SecondPage', () => {
  test('renders the initial count and double count values', () => {
    const wrapper = mountComponent()

    expect(wrapper.text().replace(/\s+/g, ' ')).toContain('Count : 0')
    expect(wrapper.text().replace(/\s+/g, ' ')).toContain('Double Count : 0')
  })

  test('increments the counter and its doubled value', async () => {
    const wrapper = mountComponent()

    await wrapper.findComponent({ name: 'BaseButton' }).vm.$emit('click')

    expect(wrapper.text().replace(/\s+/g, ' ')).toContain('Count : 1')
    expect(wrapper.text().replace(/\s+/g, ' ')).toContain('Double Count : 2')
  })
})

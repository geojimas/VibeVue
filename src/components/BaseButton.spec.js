import { describe, test, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseButton from './BaseButton.vue'

describe('In BaseButton Component', () => {

  test('renders properly', () => {
    const wrapper = mount(BaseButton, {
      props: {
        label: 'Click Me',
        theme: 'primary',
      }
    })
    expect(wrapper.text()).toContain('Click Me')
  })

  test('emits a click event when clicked', async () => {
    const wrapper = mount(BaseButton, {
      props: {
        label: 'Click Me',
        theme: 'primary',
      },
    })

    await wrapper.find('button').trigger('click')

    expect(wrapper.emitted()).toHaveProperty('click')
    expect(wrapper.emitted('click').length).toBe(1)
  })

  test('applies the selected theme class', () => {
    const wrapper = mount(BaseButton, {
      props: {
        label: 'Click Me',
        theme: 'primary',
      },
    })

    expect(wrapper.find('button').classes()).toContain('btn-primary')
  })

  test('forwards attributes to the native button', () => {
    const wrapper = mount(BaseButton, {
      props: {
        label: 'Save',
      },
      attrs: {
        type: 'submit',
        disabled: true,
      },
    })

    const button = wrapper.find('button')
    expect(button.attributes('type')).toBe('submit')
    expect(button.attributes('disabled')).toBeDefined()
  })
})

import { describe, expect, test } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseFade from './BaseFade.vue'

describe('BaseFade', () => {
  test('renders slot content with animation styles and forwarded attributes', () => {
    const wrapper = mount(BaseFade, {
      props: {
        duration: 600,
        easing: 'ease-in-out',
        delay: 150,
        appear: false,
      },
      attrs: {
        id: 'fade-content',
      },
      slots: {
        default: '<p class="fade-content">Visible content</p>',
      },
    })

    const style = wrapper.element.style

    expect(wrapper.find('.fade-content').text()).toBe('Visible content')
    expect(wrapper.attributes('id')).toBe('fade-content')
    expect(style.getPropertyValue('--animation-duration')).toBe('600ms')
    expect(style.getPropertyValue('--animation-easing')).toBe('ease-in-out')
    expect(style.getPropertyValue('--animation-delay')).toBe('150ms')
  })
})

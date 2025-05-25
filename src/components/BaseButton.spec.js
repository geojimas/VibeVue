import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseButton from './BaseButton.vue'

describe('In BaseButton Component', () => {

  it('renders properly', () => {
    const wrapper = mount(BaseButton, {
      props: {
        label: 'Click Me',
        theme: 'primary',
      }
    })
    expect(wrapper.text()).toContain('Click Me')
  })

  it('emits a click event when clicked', async () => {
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
})

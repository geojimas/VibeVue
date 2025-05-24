import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import BaseButton from './BaseButton.vue'

describe('In BaseButton Component', () => {
  it('renders properly', () => {
    const wrapper = mount(BaseButton, { props: { label: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})

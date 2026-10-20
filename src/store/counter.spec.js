import { beforeEach, describe, expect, test } from 'vitest'

import { createPinia, setActivePinia } from 'pinia'
import { useCounterStore } from './counter'

describe('useCounterStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('starts with a count of zero', () => {
    const store = useCounterStore()

    expect(store.count).toBe(0)
  })

  test('returns double the count', () => {
    const store = useCounterStore()

    expect(store.doubleCount).toBe(0)

    store.count = 3

    expect(store.doubleCount).toBe(6)
  })

  test('increments the count', () => {
    const store = useCounterStore()

    store.increment()

    expect(store.count).toBe(1)
    expect(store.doubleCount).toBe(2)
  })
})

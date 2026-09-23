import { beforeEach, describe, expect, test } from 'vitest'

import { createPinia, setActivePinia } from 'pinia'
import { useLoadingStore } from './loader'

describe('useLoadingStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  test('starts with loading disabled', () => {
    const store = useLoadingStore()

    expect(store.isLoading).toBe(false)
  })

  test('updates the loading state', () => {
    const store = useLoadingStore()

    store.setLoading(true)
    expect(store.isLoading).toBe(true)

    store.setLoading(false)
    expect(store.isLoading).toBe(false)
  })
})

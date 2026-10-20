import { beforeEach, describe, expect, test } from 'vitest'

import { THEMES } from '../constants'
import { useTheme } from './useTheme'

describe('useTheme', () => {
  beforeEach(() => {
    localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
  })

  test('defaults to the light theme and applies it to the document', () => {
    const { currentTheme } = useTheme()

    expect(currentTheme.value).toBe(THEMES.LIGHT)
    expect(document.documentElement.dataset.theme).toBe(THEMES.LIGHT)
    expect(localStorage.getItem('theme')).toBeNull()
  })

  test('restores the saved theme', () => {
    localStorage.setItem('theme', THEMES.DARK)

    const { currentTheme } = useTheme()

    expect(currentTheme.value).toBe(THEMES.DARK)
    expect(document.documentElement.dataset.theme).toBe(THEMES.DARK)
  })

  test('toggles and persists the theme', () => {
    const { currentTheme, toggleTheme } = useTheme()

    toggleTheme()

    expect(currentTheme.value).toBe(THEMES.DARK)
    expect(document.documentElement.dataset.theme).toBe(THEMES.DARK)
    expect(localStorage.getItem('theme')).toBe(THEMES.DARK)

    toggleTheme()

    expect(currentTheme.value).toBe(THEMES.LIGHT)
    expect(localStorage.getItem('theme')).toBe(THEMES.LIGHT)
  })
})

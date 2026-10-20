import { ref } from 'vue'
import { THEMES } from '../constants'

export function useTheme() {
  const savedTheme = localStorage.getItem('theme') || THEMES.LIGHT
  const currentTheme = ref(savedTheme)

  document.documentElement.setAttribute('data-theme', currentTheme.value)

  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
    document.documentElement.setAttribute('data-theme', currentTheme.value)
    localStorage.setItem('theme', currentTheme.value)
  }

  return { currentTheme, toggleTheme }
}

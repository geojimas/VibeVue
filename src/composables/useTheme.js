import { ref } from 'vue'
import Constants from '../constants'

export function useTheme() {
  const savedTheme = localStorage.getItem('theme') || Constants.THEMES.LIGHT
  const currentTheme = ref(savedTheme)

  document.documentElement.setAttribute('data-theme', currentTheme.value)

  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === Constants.THEMES.LIGHT ? Constants.THEMES.DARK : Constants.THEMES.LIGHT
    document.documentElement.setAttribute('data-theme', currentTheme.value)
    localStorage.setItem('theme', currentTheme.value)
  }

  return { currentTheme, toggleTheme }
}

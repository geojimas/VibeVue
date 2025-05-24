import { ref } from 'vue'

export function useTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light'
  const currentTheme = ref(savedTheme)

  document.documentElement.setAttribute('data-theme', currentTheme.value)

  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light'
    document.documentElement.setAttribute('data-theme', currentTheme.value)
    localStorage.setItem('theme', currentTheme.value)
  }

  return { currentTheme, toggleTheme }
}
import { defineStore } from 'pinia'
import { ref } from 'vue'

// Composition API style store definition
export const useLoadingStore = defineStore('loader', () => {
  // State
  const isLoading = ref(false)
  // Actions
  const setLoading = (value) => {
    isLoading.value = value
  }

  return { isLoading, setLoading }

})


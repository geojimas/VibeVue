import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useLoadingStore = defineStore('loader', () => {
  // State
  const isLoading = ref(false)
  // Actions
  const setLoading = (value) => {
    isLoading.value = value
  }

  return { isLoading, setLoading }

})


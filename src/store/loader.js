import { defineStore } from 'pinia'
import { ref } from 'vue'
import StoreTypes from './types'

// Composition API style store definition
export const useLoadingStore = defineStore(StoreTypes.LOADER, () => {
  // State
  const isLoading = ref(false)
  // Actions
  const setLoading = (value) => {
    isLoading.value = value
  }

  return { isLoading, setLoading }

})


import { defineStore } from 'pinia'
import StoreTypes from './types'

// Vuex style store definition
export const useCounterStore = defineStore(StoreTypes.COUNTER, {
    state: () => ({
        count: 0,
    }),
    getters: {
        doubleCount: (state) => state.count * 2
    },
    actions: {
        increment() {
            this.count++
        },
    },
})

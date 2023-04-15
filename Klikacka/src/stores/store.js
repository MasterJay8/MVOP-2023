import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useCounterStore = defineStore('counter', () => {
  const coins = ref(useLocalStorage("Counter", Number))

  /*function money(value){
    localStorage.setItem("coins", value) 
  }*/


  function addCoins() {
    coins.value  += coinsAddCalc()
    //coins.value += 1
  }
  function coinsAddCalc() {
    return 1
  }

  return { coins, addCoins, /*money*/ }
})
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

import { useCharacterStore } from './storeCharacter';

export const useCounterStore = defineStore('counter', () => {
  const CharacterStore = useCharacterStore();

  const coins = ref(useLocalStorage("Counter", 0))
  const lastActiveTime = ref(useLocalStorage("LogOutDate", 0))
  //let ActiveTime = ref(useLocalStorage("LogInDate", 0))
  const coinsPerSecond = ref(useLocalStorage("PassiveMoney", 0))
  const offlineTime = ref(useLocalStorage("AFK", 0))

  function addCoins() {
    coins.value += coinsAddCalc()
  }
  function coinsAddCalc() {
    return 100
  }

  function earnMoneyPassive() {
    //console.log(coinsPerSecond.value)
    coins.value += coinsPerSecond.value
  }

  function OfflineEarnings() {
    const date = Math.floor(new Date().getTime() / 1000)
    offlineTime.value = date - lastActiveTime.value
    coins.value += coinsPerSecond.value * offlineTime.value
  }

  function SaveTime(){
    lastActiveTime.value = Math.floor(new Date().getTime() / 1000)
  }

  return { coins, coinsPerSecond, addCoins, earnMoneyPassive, OfflineEarnings, SaveTime, offlineTime }
})
import { ref, computed,onUpdated } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

import { useCharacterStore } from './storeCharacter';

export const useCounterStore = defineStore('counter', () => {
  const CharacterStore = useCharacterStore();

  const coins = ref(useLocalStorage("Counter", 0))
  const lastActiveTime = ref(useLocalStorage("LogOutDate", 0))
  const coinsPerSecond = ref(useLocalStorage("PassiveMoney", 0))
  const offlineTimeSeconds = ref(useLocalStorage("AFK", 0))
  const offlineTime = ref(0)
  const offlineMoneyEarned = ref(0)

  function addCoins() {
    coins.value += coinsAddCalc()
  }
  function coinsAddCalc() {
    return 100
  }

  function convertSecondsToTime(seconds) {
    var date = new Date(0);
    date.setSeconds(seconds);
  
    var hours = date.getUTCHours().toString().padStart(2, '0');
    var minutes = date.getUTCMinutes().toString().padStart(2, '0');
    var seconds = date.getSeconds().toString().padStart(2, '0');
  
    return hours + ':' + minutes + ':' + seconds;
  }

  function earnMoneyPassive() {
    coins.value += coinsPerSecond.value
  }
  
  function OfflineEarnings() {
    if(lastActiveTime.value == 0) return
    const date = Math.floor(new Date().getTime() / 1000) //dnešní datum v sec
    offlineTimeSeconds.value = date - lastActiveTime.value  //Afk time v sec
    offlineTime.value = convertSecondsToTime(offlineTimeSeconds.value) //Offline čas
    offlineMoneyEarned.value = Math.round(coinsPerSecond.value * offlineTimeSeconds.value / 100) //Peněz vyděláno
    coins.value += offlineMoneyEarned.value //Vyděláváte 100x méně když jste offline
  }

  function SaveTime(){
    lastActiveTime.value = Math.floor(new Date().getTime() / 1000)
  }

  return { coins, coinsPerSecond, addCoins, earnMoneyPassive, OfflineEarnings, SaveTime, offlineTime, offlineMoneyEarned }
})
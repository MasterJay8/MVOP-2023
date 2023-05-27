import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

import { useCounterStore } from './store';

export const useCharacterStore = defineStore('character', () => {
    const CounterStore = useCounterStore();


    let character = ref(useLocalStorage("Character", [
        {
            id: 1,
            imgPath: "/src/img/Peaseant3.png",
            name: "Peaseant",
            level: 0,
            earn: 0,
            baseUpgradeCost: 10,
            upgradeCost: 10,
            earnAdd: 1
        },
        {
            id: 2,
            imgPath: "/src/img/asiaGang.png",
            name: "Ballers",
            level: 0,
            earn: 0,
            baseUpgradeCost: 100,
            upgradeCost: 100,
            earnAdd: 15
        },
        {
            id: 3,
            imgPath: "/src/img/asian3.png",
            name: "Min",
            level: 0,
            earn: 0,
            baseUpgradeCost: 500,
            upgradeCost: 500,
            earnAdd: 100
        },
        {
            id: 4,
            imgPath: "/src/img/cartman.png",
            name: "Cartman",
            level: 0,
            earn: 0,
            baseUpgradeCost: 1500,
            upgradeCost: 1500,
            earnAdd: 375
        },
        {
            id: 5,
            imgPath: "/src/img/cityguy2.png",
            name: "Cityguy",
            level: 0,
            earn: 0,
            baseUpgradeCost: 3000,
            upgradeCost: 3000,
            earnAdd: 900
        },
        {
            id: 6,
            imgPath: "/src/img/worker.png",
            name: "Worker",
            level: 0,
            earn: 0,
            baseUpgradeCost: 8000,
            upgradeCost: 8000,
            earnAdd: 2800
        },
        {
            id: 7,
            imgPath: "/src/img/kim.png",
            name: "Kim",
            level: 0,
            earn: 0,
            baseUpgradeCost: 20000,
            upgradeCost: 20000,
            earnAdd: 8000
        },
    ]))

    function CharacterUpgrade(input) {
        if (CounterStore.coins >= input.upgradeCost) {
            CounterStore.coins -= input.upgradeCost
            CounterStore.coinsPerSecond += input.earnAdd
            console.log(input.earnAdd)
            console.log(CounterStore.coinsPerSecond)

            input.level++
            input.earn += input.earnAdd
            input.upgradeCost += input.baseUpgradeCost
        }
    }
    return { character, CharacterUpgrade, }
})
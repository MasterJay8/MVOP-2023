import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useCharacterStore = defineStore('character', () => {
    /*class Character {
        constructor(id, imgPath, name, level, dmg, upgradeCost, dmgAdd) {
            this.id = id;
            this.imgPath = imgPath;
            this.name = name;
            this.level = level;
            this.dmg = dmg;
            this.upgradeCost = upgradeCost;
            this.dmgAdd = dmgAdd;
        }

        sayHello() {
            console.log(`${this.name} `);
        }
    }
    const character1 = new Character(
        id = 1,
        imgPath = "/src/img/Peaseant3.png",
        name = "Peaseant",
        level = 97,
        dmg = 55000,
        upgradeCost = 321000,
        dmgAdd = 2000
    );*/



    //const character = ref(useLocalStorage("character", Array))
    //let character = ref({[]})
    let character = ref([])

    character.value.push({
        id: 1,
        imgPath: "/src/img/Peaseant3.png",
        name: "Peaseant",
        level: 0,
        earn: 0,
        baseUpgradeCost: 2,
        upgradeCost: 1,
        earnAdd: 1
    })
    character.value.push({
        id:2,
        imgPath:"/src/img/asiaGang.png",
        name:"Ballers",
        level:0,
        earn:0,
        baseUpgradeCost: 10,
        upgradeCost:10,
        earnAdd:12
    })
    character.value.push({
        id:3,
        imgPath:"/src/img/asian3.png",
        name:"Min",
        level:64,
        earn: 0,
        baseUpgradeCost: 10,
        upgradeCost:0,
        earnAdd:0
    })
    character.value.push({
        id:4,
        imgPath:"/src/img/cartman.png",
        name:"Cartman",
        level:0,
        earn:0,
        baseUpgradeCost: 10,
        upgradeCost:0,
        earnAdd:0
    })
    character.value.push({
        id:5,
        imgPath:"/src/img/cityguy2.png",
        name:"Cityguy",
        level:0,
        earn:0,
        baseUpgradeCost: 10,
        upgradeCost:0,
        earnAdd:0
    })
    character.value.push({
        id:6,
        imgPath:"/src/img/worker.png",
        name:"Worker",
        level:0,
        earn:0,
        baseUpgradeCost: 10,
        upgradeCost:0,
        earnAdd:0
    })
    character.value.push({
        id:7,
        imgPath:"/src/img/kim.png",
        name:"Kim",
        level:0,
        earn:0,
        baseUpgradeCost: 10,
        upgradeCost:0,
        earnAdd:0
    })



    function CharacterUpgrade(input){
        input.level++
        input.earn += input.earnAdd
        input.upgradeCost += input.baseUpgradeCost
        //input.earnAdd += 1 * input.id

        /*console.log("upgrade")
        console.log(input.level)
        console.log(character.level)*/
    }

    return { character, CharacterUpgrade, /*Character*/}
})
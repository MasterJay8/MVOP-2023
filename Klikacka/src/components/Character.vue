<script setup>
import { useCharacterStore } from "../stores/storeCharacter";
const useCharacter = useCharacterStore();

/*const props = defineProps({
  id: String,
  imgPath: String,
  name: String,
  level: String,
  dmg: String,
  upgradeCost: String,
  dmgAdd: String,
});*/

/*function Write() {
  console.log(useCharacter.character[0].name);
  //console.log("1");
}*/
</script>

<template>
  <div class="shopMain">
    <div
      class="character"
      v-for="character in useCharacter.character"
      :key="character"
    >
      <div class="img">
        <img v-bind:src="character.imgPath" />
      </div>
      <div class="stats">
        <div class="name">{{ character.name }}</div>
        <div class="level">Lvl {{ character.level }}</div>
        <div class="dmg">Earnings/s {{ character.earn }}</div>
      </div>
      <button class="upgrade" @click="useCharacter.CharacterUpgrade(character)">
        <div class="upgradeCost">
          {{ character.upgradeCost }}&nbsp;<i class="fa-solid fa-coins"></i>
        </div>
        <div class="dmgAdd">+{{ character.earnAdd }} Earnings</div>
      </button>
    </div>
  </div>
</template>

<!--<template>
//     <div class="character" >
//       <div class="img">
//         <img v-bind:src="imgPath" />
//       </div>
//       <div class="stats">
//         <div class="name">{{ name }}</div>
//         <div class="level">Lvl {{ level }}</div>
//         <div class="dmg">Earnings/s {{ dmg }}</div>
//       </div>
//       <button class="upgrade" @click="Write">
//         <div class="upgradeCost">
//           {{ upgradeCost }}&nbsp;<i class="fa-solid fa-coins"></i>
//         </div>
//         <div class="dmgAdd">+{{ dmgAdd }} Earnings</div>
//       </button>
//     </div>
// </template> -->
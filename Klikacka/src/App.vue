<script setup>
import Character from "./components/Character.vue";
import Level1 from "./components/Level1.vue";
import { useCounterStore } from "./stores/store";
const useCounter = useCounterStore();

import { useCharacterStore } from "./stores/storeCharacter";
const useCharacter = useCharacterStore();

//const add = useCounter.addCoins;
/*export default {
  components: {
    Character,
  },
};*/
</script>

<template>
  <div class="all">
    <div class="leftWrap">
      <div class="coins">
        <div>{{ useCounter.coins }}&nbsp;</div>
        <i class="fa-solid fa-coins"></i>
      </div>

      <div class="shopMenu">
        <div class="shopNav">
          <button class="shop">
            <i class="fa-solid fa-bowl-rice"></i>
          </button>

          <button class="shop">
            <img src="/src/img/chopsticks.png" alt="" />
          </button>

          <button class="shop">
            <img src="/src/img/noodle.png" alt="" />
          </button>
        </div>

        <!-- <Level1/> -->
        <Character/>
      </div>
    </div>
    <div class="rightWrap">
      <div class="skills">
        <i id="skill" class="fa-solid fa-hand-pointer"></i>
        <i id="skill" class="fa-solid fa-coins"></i>
      </div>
      <div class="clicker">
        <!-- <img id="clicker" src="./img/coin.png" alt="" /> -->
        <img
          id="clicker"
          src="./img/ramen.png"
          alt=""
          @click="useCounter.addCoins"
        />
      </div>
      <div class="navSettings">
        <i class="fa-solid fa-gear"></i>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  </div>
</template>


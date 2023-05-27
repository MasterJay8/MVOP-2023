<script setup>
//import { useMounted } from "@vueuse/core";
import { ref, onMounted, onBeforeUnmount } from "vue";
import Character from "./components/Character.vue";
import Popup from "./components/Popup.vue";

import { useCounterStore } from "./stores/store";
const useCounter = useCounterStore();

import { useCharacterStore } from "./stores/storeCharacter";
const useCharacter = useCharacterStore();

const displayCoins = ref(
  useCounter.coins.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
);
//displayCoins =

const earnMoneyPassiveInterval = setInterval(() => {
  useCounter.earnMoneyPassive();
}, 1000);

onMounted(useCounter.OfflineEarnings());
onBeforeUnmount(
  window.removeEventListener("beforeunload", useCounter.SaveTime())
);
</script>

<template>
  <div class="all">
    <Popup />
    <div class="leftWrap">
      <div class="coins">
        <div>{{ useCounter.coins }}&nbsp;</div>
        <div>{{ displayCoins }}&nbsp;</div>
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
        <Character />
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


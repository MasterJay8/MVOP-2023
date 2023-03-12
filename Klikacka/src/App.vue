<script>
import Character from "./components/Character.vue";
export default {
  components: {
    Character,
  },

  /*data() {
    return {
      
    };
  },

  methods: {
 
  },*/
};
</script>

<template>
  <div class="all">
    <div class="leftWrap">
      <div class="coins">
        <div>157k&nbsp;</div>
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

        <div class="shopMain">
          <Character
            imgPath="/src/img/Peaseant3.png"
            name="Peaseant"
            level="97"
            dmg="55k"
            upgradeCost="321k"
            dmgAdd="2k"
          />

          <Character
            imgPath="/src/img/asiaGang.png"
            name="Ballers"
            level="82"
            dmg="78k"
            upgradeCost="343k"
            dmgAdd="5k"
          />

          <Character
            imgPath="/src/img/asian3.png"
            name="Min"
            level="64"
            dmg="95k"
            upgradeCost="356k"
            dmgAdd="8k"
          />
          <Character
            imgPath="/src/img/cartman.png"
            name="Cartman"
            level="45"
            dmg="104k"
            upgradeCost="387k"
            dmgAdd="12k"
          />
          <Character
            imgPath="/src/img/cityguy2.png"
            name="Cityguy"
            level="37"
            dmg="120k"
            upgradeCost="398k"
            dmgAdd="19k"
          />
          <Character
            imgPath="/src/img/worker.png"
            name="Worker"
            level="24"
            dmg="159k"
            upgradeCost="404k"
            dmgAdd="24k"
          />
          <Character
            imgPath="/src/img/kim.png"
            name="Kim"
            level="5"
            dmg="148k"
            upgradeCost="391k"
            dmgAdd="31k"
          />
        </div>
      </div>
    </div>
    <div class="rightWrap">
      <div class="skills">
        <i id="skill" class="fa-solid fa-hand-pointer"></i>
        <i id="skill" class="fa-solid fa-coins"></i>
      </div>
      <div class="clicker">
        <!-- <img id="clicker" src="./img/coin.png" alt="" /> -->
        <img id="clicker" src="./img/ramen.png" alt="" />
      </div>
      <div class="navSettings">
        <i class="fa-solid fa-gear"></i>
        <i class="fa-solid fa-cart-shopping"></i>
      </div>
    </div>
  </div>
</template>


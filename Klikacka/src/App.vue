<script>
import Character from "./components/Character.vue";
export default {
  components: {
    Character,
  },

  /*data() {
    return {
      nameModel: "",
    };
  },

  methods: {
    send(name) {
      this.$emit("changed", name);
    },
  },*/
};
</script>

<template>
  <div class="all">
    <div class="leftWrap">
      <div class="coins">
        <div>120k&nbsp;</div>
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
            imgPath="/src/img/Peaseant.jpg"
            name="Peaseant"
            level="2"
            upgradeCost="500k"
          />

          <Character
            imgPath="/src/img/asiaGang.png"
            name="Ballers"
            level="2"
            upgradeCost="500k"
          />

          <Character
            imgPath="/src/img/asian3.png"
            name="Min"
            level="2"
            upgradeCost="500k"
          />
        </div>
      </div>
    </div>
    <div class="rightWrap">
      <div class="clicker">
        <img src="./img/coin.png" alt="">
      </div>
    </div>
  </div>
</template>


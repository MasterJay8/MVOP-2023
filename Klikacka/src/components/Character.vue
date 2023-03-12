<script>
export default {
  props: {
    imgPath: String,
    name: String,
    level: String,
    dmg: String,
    upgradeCost: String,
    dmgAdd: String,
  },

  methods: {},
};
</script>

<template>
  <div class="character">
    <div class="img">
      <img v-bind:src="imgPath" />
    </div>
    <div class="stats">
      <div class="name">{{ name }}</div>
      <div class="level">Lvl {{ level }}</div>
      <div class="dmg">Earnings/s {{ dmg }}</div>
    </div>
    <button class="upgrade">
      <div class="upgradeCost">
        {{ upgradeCost }}&nbsp;<i class="fa-solid fa-coins"></i>
      </div>
      <div class="dmgAdd">+{{ dmgAdd }} Earnings/s</div>
    </button>
  </div>
</template>
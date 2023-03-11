<script>
export default {
  props: {
    imgPath: String,
    name: String,
    level: String,
    upgradeCost: String,
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
      <div class="level">Lvl &nbsp;{{ level }}</div>
    </div>
    <button class="upgrade">
      {{ upgradeCost }}&nbsp;<i class="fa-solid fa-coins"></i>
    </button>
  </div>
</template>
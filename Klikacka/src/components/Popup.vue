<script setup>
import { ref, onMounted } from "vue";
import "../style/PopupStyle/popup.css";

import { useCounterStore } from "../stores/store";
const useCounter = useCounterStore();

const showPopup = ref(false)

function closePopup() {
  showPopup.value = false;
}
onMounted((showPopup.value = true))
</script>


<template>
  <div>
    <div v-if="showPopup" class="popup">
      <h2>{{ useCounter.offlineTime }}</h2>
      <p>This is a popup window.</p>
      <button @click="closePopup">Close</button>
    </div>
  </div>
</template>
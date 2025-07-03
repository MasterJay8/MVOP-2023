<script setup>
import { ref, onMounted } from "vue";

let url;
let ITEMS = [];

let T1T7ITEMS = ["BAG"];

for (let item of T1T7ITEMS) {
  for (let i = 1; i <= 7; i++) {
    ITEMS.push(`T${i}_${item}`);
  }
}

//city: 3003,5003,2004,3005,4002,1002,3008,7

/* "item_id": "T1_BAG",
"city": "Black Market",
"quality": 1,
"sell_price_min": 0,
"sell_price_min_date": "0001-01-01T00:00:00",
"sell_price_max": 0,
"sell_price_max_date": "0001-01-01T00:00:00",
"buy_price_min": 0,
"buy_price_min_date": "0001-01-01T00:00:00",
"buy_price_max": 0,
"buy_price_max_date": "0001-01-01T00:00:00" */

//let dataa = ref();
const itemPrices = ref([]);

onMounted(async () => {
  let i = 0;
  for (const item of ITEMS) {
    try {
      url = `https://europe.albion-online-data.com/api/v2/stats/prices/${item}?locations=3003%20Sterling&qualities=1,2,3,4,5`;
      const response = await fetch(url);
      const data = await response.json();

      itemPrices.value[i] = [];
      itemPrices.value[i].push(data[0].item_id);
      itemPrices.value[i].push(data[0].sell_price_min);
      itemPrices.value[i].push(data[0].buy_price_max);
      //dataa = data;
    } catch (error) {
      console.error("Chyba při načítání dat:", error);
    }
    i++;
  }
});
</script>

<template>
  <div>
    <div v-for="(innerArray, i) in itemPrices" :key="i">
      <p>Array {{ i }}: {{ innerArray }}</p>
    </div>
  </div>
</template>

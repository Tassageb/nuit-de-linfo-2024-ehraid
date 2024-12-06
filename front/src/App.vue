<script setup lang="ts">
import OceanLayer1 from "./components/OceanLayer1.vue";
import data from "./data/data.json"
import Depth from "./models/depth.ts";
import {ref} from "vue";
import DetailsDialog from "./components/DetailsDialog.vue";

const depths = data as Depth[];

const currentDepth = ref<Depth>();
const isActive = ref<boolean>(false);

const openModal = (depth: Depth) => {
  currentDepth.value = depth;
  console.log(currentDepth.value)
  isActive.value = true;
}

</script>

<template>
  <OceanLayer1 />
  <div v-for="depth in depths" :key="depth.depth" class="d-flex depth">
    <div>
      <h2>{{ depth.fine?.title }}</h2>
      <v-btn color="primary" class="pa-3 mt-3" @click="() => openModal(depth)">Détails</v-btn>
    </div>
  </div>
  <DetailsDialog class="d-flex w-100 justify-center" v-model="isActive" :depth="currentDepth" :is-open="isActive" @close-dialog="isActive = !isActive" />
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

.depth:nth-child(odd) {
  justify-content: end;
  padding: 3rem;
}

.depth:nth-child(even) {
  justify-content: start;
  padding: 3rem;
}

@media screen and (max-width: 576px){
  .depth:nth-child(odd) {
    justify-content: center;
    padding: 3rem;
  }

  .depth:nth-child(even) {
    justify-content: center;
    padding: 3rem;
  }
}
</style>

<template>
  <v-dialog scrollable>
    <div class="dialog">
      <div class="mb-3">
        <span class="text-h5">{{ depth?.fine.title }}</span>
      </div>
      <div>
        <div class="mb-3">
          <p>{{ depth?.fine.text }}</p>
        </div>
      </div>
      <div>
        <p>Côté humain : </p>
        <img :src="depth?.fine.manImgSrc" :alt="depth?.fine.manImgAlt">
      </div>
      <div>
        <p>Côté océanique : </p>
        <img :src="depth?.fine.OceanImgSrc" :alt="depth?.fine.OceanImgAlt">
      </div>
        <v-btn color="primary" @click="closeDialog">Fermer</v-btn>
    </div>
  </v-dialog>
</template>

<script setup lang="ts">
import Depth from "../models/depth.ts";

const emits = defineEmits(["CloseDialog"])
// Declare props for the component
defineProps<{
  depth: Depth | undefined; // Prop of type Depth
}>();

// Method to close the dialog
const closeDialog = () => {
  emits("CloseDialog")
};
</script>

<style scoped>
.text-h5 {
  font-weight: bold;
}

.dialog{
  position: fixed;
  flex-direction: column;
  padding: 2rem 2rem 2rem;
  margin: 2rem;
  border: 1px solid #ccc;
  border-radius: 15px;
  background-color: #fff;
  color: black;
  max-width: 576px;
  top: 0;
  right: 0;
  left: 0;
}
</style>
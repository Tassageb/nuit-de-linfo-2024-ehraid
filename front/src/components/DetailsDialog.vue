<template>
  <v-dialog scrollable>
    <div class="dialog">
      <div class="mb-3">
        <span class="text-h5">{{ isFine ? depth?.fine?.title : depth?.cursed?.title }}</span>
      </div>
      <div>
        <div class="mb-3">
          <p>{{ isFine ? depth?.fine?.text : depth?.cursed?.text }}</p>
        </div>
      </div>
      <div>
        <p>Côté humain : </p>
        <img :src="isFine ? depth?.fine?.manImgSrc : depth?.cursed?.manImgSrc" :alt="isFine ? depth?.fine?.manImgAlt : depth?.cursed?.manImgAlt">
      </div>
      <div>
        <p>Côté océanique : </p>
        <img :src="isFine ? depth?.fine?.OceanImgSrc : depth?.cursed?.OceanImgSrc" :alt="isFine ? depth?.fine?.OceanImgAlt : depth?.cursed?.OceanImgAlt">
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
  isFine: boolean; // Prop of type boolean
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

@media screen and (max-width: 576px){
  .dialog {
    margin: 0;
    width: 100%;
    max-width: 100%;
  }

}
</style>
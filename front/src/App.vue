<script setup lang="ts">
import OceanLayer1 from "./components/OceanLayer1.vue";
import data from "./data/data.json"
import Depth from "./models/depth.ts";
import {ref, watch} from "vue";
import DetailsDialog from "./components/DetailsDialog.vue";

const depths = data as Depth[];

const currentDepth = ref<Depth>();
const isActive = ref<boolean>(false);

const isFine = ref<boolean>(true);

const openModal = (depth: Depth) => {
  currentDepth.value = depth;
  console.log(currentDepth.value)
  isActive.value = true;
}

watch(() => isFine.value, () => {
  window.scrollTo(0,0);
})
</script>

<template>
  <div class="wrapper bg-sky">
    <svg width="50" height="50" id="sun" xmlns="http://www.w3.org/2000/svg">
      <path
          d="M35.165 27.208 48 24l-12.835-3.208a11.44 11.44 0 0 1 0 6.416zM12.833 20.792 0 24l12.833 3.208a11.464 11.464 0 0 1 0-6.416zM27.207 12.833 24 0l-3.21 12.833a11.468 11.468 0 0 1 6.417 0zM20.79 35.166 24 48l3.208-12.834a11.444 11.444 0 0 1-6.417 0zM18.367 13.832 7.028 7.029l6.8 11.34a11.676 11.676 0 0 1 4.539-4.537zM29.631 34.167l11.339 6.8-6.8-11.338a11.684 11.684 0 0 1-4.539 4.538zM34.166 18.369l6.8-11.34-11.339 6.8a11.689 11.689 0 0 1 4.539 4.54zM13.832 29.632 7.028 40.97l11.339-6.8a11.671 11.671 0 0 1-4.535-4.538z"
          fill="#fddc85"
      />
      <circle cx="23.999" cy="24" r="9.375" fill="#ffbd66" />
    </svg>
    <div class="d-flex w-100 justify-end">
      <v-btn href="/clicker" class="mr-6 pa-3" color="secondary" rounded>Accéder au clicker</v-btn>
    </div>
    <h1 class="title">Anatomie des mers</h1>
    <OceanLayer1 />
    <div class="bg-sea">
      <div v-for="depth in depths" :key="depth.depth" class="d-flex depth">
        <div>
          <h2>{{ isFine ? depth.fine?.title : depth.cursed.title }}</h2>
          <v-btn color="primary" class="pa-3 mt-3" @click="() => openModal(depth)">Détails</v-btn>
        </div>
      </div>
    </div>
  </div>
  <div>
    <h3 class="pa-3" :class="isFine ? 'bg-green-accent-2' : 'bg-red-darken-3'">{{ isFine ? "Sacré voyage n'est-ce pas ? Tu peux revenir en lieu sûr maintenant" : "Qu'est-ce que tu dirais de voir le monde tel qu'il sera si tu ne respectes pas l'environnement ?" }}</h3>
    <div class="d-flex justify-center w-100 align-center pa-3">
      <p class="mr-3">Mode paradis 👼</p>
    <label class="switch mr-3">
      <input type="checkbox" v-model="isFine" >
      <span class="slider round"></span>
    </label>
    <p class="ml-3">Mode enfer 🔥</p></div>
  </div>
  <DetailsDialog class="d-flex w-100 justify-center" v-model="isActive" :depth="currentDepth" :is-fine="isFine" @close-dialog="isActive = !isActive" />
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

body {
  overflow-x: auto;
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

#sun {
  top: 0;
  right: 0;
  animation: rotateAndScale 120s linear infinite;
  overflow: hidden;
}
@keyframes rotateAndScale {
  from {
    transform: rotate(0deg) scale(10);
  }
  to {
    transform: rotate(360deg) scale(10);
  }
}
.title {
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  padding: 300px 2rem 4rem 2rem;
}
.wrapper {
  display: flex;
  flex-direction: column;
}
.bg-sky {
  background: linear-gradient(0deg, hsla(200, 100%, 99%, 0.667), #a8d7fd);
}

.bg-sea {
  margin-top: -0.35rem;
  background: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      #023d73 100%
  );
  height: 100%;
}

.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}

input:checked + .slider {
  background-color: #2196F3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196F3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>

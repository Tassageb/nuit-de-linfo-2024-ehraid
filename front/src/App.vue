<script setup lang="ts">
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
    <div class="wave-wrapper">
      <svg
          width="100%"
          height="100%"
          id="svg"
          viewBox="0 0 1440 390"
          xmlns="http://www.w3.org/2000/svg"
          class="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="5%" stop-color="#3482dd"></stop>
            <stop offset="95%" stop-color="#023d73"></stop>
          </linearGradient>
        </defs>
        <path
            d="M 0,400 L 0,60 C 189.46666666666664,52.13333333333333 378.9333333333333,44.266666666666666 520,49 C 661.0666666666667,53.733333333333334 753.7333333333333,71.06666666666666 899,75 C 1044.2666666666667,78.93333333333334 1242.1333333333332,69.46666666666667 1440,60 L 1440,400 L 0,400 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="0.265"
            class="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>

        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="5%" stop-color="#3482dd"></stop>
            <stop offset="95%" stop-color="#023d73"></stop>
          </linearGradient>
        </defs>
        <path
            d="M 0,400 L 0,140 C 152.93333333333334,135.33333333333334 305.8666666666667,130.66666666666669 486,127 C 666.1333333333333,123.33333333333333 873.4666666666667,120.66666666666666 1037,123 C 1200.5333333333333,125.33333333333334 1320.2666666666667,132.66666666666669 1440,140 L 1440,400 L 0,400 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="0.4"
            class="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>

        <defs>
          <linearGradient id="gradient" gradientTransform="rotate(90)">
            <stop offset="5%" stop-color="#3482dd"></stop>
            <stop offset="95%" stop-color="#023d73"></stop>
          </linearGradient>
        </defs>
        <path
            d="M 0,400 L 0,220 C 150.13333333333333,218.8 300.26666666666665,217.6 448,213 C 595.7333333333333,208.4 741.0666666666668,200.4 906,201 C 1070.9333333333332,201.6 1255.4666666666667,210.8 1440,220 L 1440,400 L 0,400 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="0.53"
            class="transition-all duration-300 ease-in-out delay-150 path-2"
        ></path>

        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="5%" stop-color="#4a90e2"></stop>
            <stop offset="95%" stop-color="#023d73"></stop>
          </linearGradient>
        </defs>
        <path
            d="M 0,400 L 0,300 C 133.46666666666664,284.66666666666663 266.9333333333333,269.3333333333333 428,276 C 589.0666666666667,282.6666666666667 777.7333333333333,311.33333333333337 951,319 C 1124.2666666666667,326.66666666666663 1282.1333333333332,313.3333333333333 1440,300 L 1440,400 L 0,400 Z"
            stroke="none"
            stroke-width="0"
            fill="url(#gradient)"
            fill-opacity="1"
            class="transition-all duration-300 ease-in-out delay-150 path-3"
        ></path>
      </svg>
    </div>
    <div class="bg-sea">
      <div v-for="depth in depths" :key="depth.depth" class="d-flex depth">
        <div>
          <h2>{{ depth.comparaison }}</h2>
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

.path-0 {
  animation: pathAnim-0 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes pathAnim-0 {
  0% {
    d: path(
        "M 0,400 L 0,60 C 189.46666666666664,52.13333333333333 378.9333333333333,44.266666666666666 520,49 C 661.0666666666667,53.733333333333334 753.7333333333333,71.06666666666666 899,75 C 1044.2666666666667,78.93333333333334 1242.1333333333332,69.46666666666667 1440,60 L 1440,400 L 0,400 Z"
    );
  }
  25% {
    d: path(
        "M 0,400 L 0,60 C 136.93333333333334,70.13333333333333 273.8666666666667,80.26666666666667 436,79 C 598.1333333333333,77.73333333333333 785.4666666666667,65.06666666666666 957,60 C 1128.5333333333333,54.93333333333334 1284.2666666666667,57.46666666666667 1440,60 L 1440,400 L 0,400 Z"
    );
  }
  50% {
    d: path(
        "M 0,400 L 0,60 C 148.93333333333334,72 297.8666666666667,84 478,76 C 658.1333333333333,68 869.4666666666667,40 1035,34 C 1200.5333333333333,28 1320.2666666666667,44 1440,60 L 1440,400 L 0,400 Z"
    );
  }
  75% {
    d: path(
        "M 0,400 L 0,60 C 143.2,51.06666666666666 286.4,42.133333333333326 446,48 C 605.6,53.866666666666674 781.5999999999999,74.53333333333335 950,79 C 1118.4,83.46666666666665 1279.2,71.73333333333332 1440,60 L 1440,400 L 0,400 Z"
    );
  }
  100% {
    d: path(
        "M 0,400 L 0,60 C 189.46666666666664,52.13333333333333 378.9333333333333,44.266666666666666 520,49 C 661.0666666666667,53.733333333333334 753.7333333333333,71.06666666666666 899,75 C 1044.2666666666667,78.93333333333334 1242.1333333333332,69.46666666666667 1440,60 L 1440,400 L 0,400 Z"
    );
  }
}
.path-1 {
  animation: pathAnim-1 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes pathAnim-1 {
  0% {
    d: path(
        "M 0,400 L 0,140 C 152.93333333333334,135.33333333333334 305.8666666666667,130.66666666666669 486,127 C 666.1333333333333,123.33333333333333 873.4666666666667,120.66666666666666 1037,123 C 1200.5333333333333,125.33333333333334 1320.2666666666667,132.66666666666669 1440,140 L 1440,400 L 0,400 Z"
    );
  }
  25% {
    d: path(
        "M 0,400 L 0,140 C 115.19999999999999,153.33333333333331 230.39999999999998,166.66666666666666 414,165 C 597.6,163.33333333333334 849.5999999999999,146.66666666666669 1032,140 C 1214.4,133.33333333333331 1327.2,136.66666666666666 1440,140 L 1440,400 L 0,400 Z"
    );
  }
  50% {
    d: path(
        "M 0,400 L 0,140 C 175.33333333333331,131.6 350.66666666666663,123.2 524,120 C 697.3333333333334,116.8 868.6666666666667,118.8 1021,123 C 1173.3333333333333,127.2 1306.6666666666665,133.6 1440,140 L 1440,400 L 0,400 Z"
    );
  }
  75% {
    d: path(
        "M 0,400 L 0,140 C 131.7333333333333,137.86666666666667 263.4666666666666,135.73333333333332 421,133 C 578.5333333333334,130.26666666666668 761.8666666666668,126.93333333333334 936,128 C 1110.1333333333332,129.06666666666666 1275.0666666666666,134.53333333333333 1440,140 L 1440,400 L 0,400 Z"
    );
  }
  100% {
    d: path(
        "M 0,400 L 0,140 C 152.93333333333334,135.33333333333334 305.8666666666667,130.66666666666669 486,127 C 666.1333333333333,123.33333333333333 873.4666666666667,120.66666666666666 1037,123 C 1200.5333333333333,125.33333333333334 1320.2666666666667,132.66666666666669 1440,140 L 1440,400 L 0,400 Z"
    );
  }
}
.path-2 {
  animation: pathAnim-2 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes pathAnim-2 {
  0% {
    d: path(
        "M 0,400 L 0,220 C 150.13333333333333,218.8 300.26666666666665,217.6 448,213 C 595.7333333333333,208.4 741.0666666666668,200.4 906,201 C 1070.9333333333332,201.6 1255.4666666666667,210.8 1440,220 L 1440,400 L 0,400 Z"
    );
  }
  25% {
    d: path(
        "M 0,400 L 0,220 C 173.46666666666664,219.2 346.9333333333333,218.4 516,212 C 685.0666666666667,205.6 849.7333333333333,193.6 1003,194 C 1156.2666666666667,194.4 1298.1333333333332,207.2 1440,220 L 1440,400 L 0,400 Z"
    );
  }
  50% {
    d: path(
        "M 0,400 L 0,220 C 208.53333333333336,227.86666666666667 417.0666666666667,235.73333333333335 560,229 C 702.9333333333333,222.26666666666665 780.2666666666667,200.9333333333333 916,197 C 1051.7333333333333,193.0666666666667 1245.8666666666668,206.53333333333336 1440,220 L 1440,400 L 0,400 Z"
    );
  }
  75% {
    d: path(
        "M 0,400 L 0,220 C 115.86666666666667,238.26666666666665 231.73333333333335,256.5333333333333 410,249 C 588.2666666666667,241.46666666666667 828.9333333333334,208.13333333333335 1011,199 C 1193.0666666666666,189.86666666666665 1316.5333333333333,204.93333333333334 1440,220 L 1440,400 L 0,400 Z"
    );
  }
  100% {
    d: path(
        "M 0,400 L 0,220 C 150.13333333333333,218.8 300.26666666666665,217.6 448,213 C 595.7333333333333,208.4 741.0666666666668,200.4 906,201 C 1070.9333333333332,201.6 1255.4666666666667,210.8 1440,220 L 1440,400 L 0,400 Z"
    );
  }
}
.path-3 {
  animation: pathAnim-3 4s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
@keyframes pathAnim-3 {
  0% {
    d: path(
        "M 0,400 L 0,300 C 133.46666666666664,284.66666666666663 266.9333333333333,269.3333333333333 428,276 C 589.0666666666667,282.6666666666667 777.7333333333333,311.33333333333337 951,319 C 1124.2666666666667,326.66666666666663 1282.1333333333332,313.3333333333333 1440,300 L 1440,400 L 0,400 Z"
    );
  }
  25% {
    d: path(
        "M 0,400 L 0,300 C 165.06666666666666,290.66666666666663 330.1333333333333,281.3333333333333 482,287 C 633.8666666666667,292.6666666666667 772.5333333333333,313.33333333333337 930,318 C 1087.4666666666667,322.66666666666663 1263.7333333333333,311.3333333333333 1440,300 L 1440,400 L 0,400 Z"
    );
  }
  50% {
    d: path(
        "M 0,400 L 0,300 C 180.93333333333334,307.73333333333335 361.8666666666667,315.46666666666664 536,307 C 710.1333333333333,298.53333333333336 877.4666666666667,273.8666666666667 1027,270 C 1176.5333333333333,266.1333333333333 1308.2666666666667,283.06666666666666 1440,300 L 1440,400 L 0,400 Z"
    );
  }
  75% {
    d: path(
        "M 0,400 L 0,300 C 158.93333333333334,310 317.8666666666667,320 476,320 C 634.1333333333333,320 791.4666666666667,310 952,305 C 1112.5333333333333,300 1276.2666666666667,300 1440,300 L 1440,400 L 0,400 Z"
    );
  }
  100% {
    d: path(
        "M 0,400 L 0,300 C 133.46666666666664,284.66666666666663 266.9333333333333,269.3333333333333 428,276 C 589.0666666666667,282.6666666666667 777.7333333333333,311.33333333333337 951,319 C 1124.2666666666667,326.66666666666663 1282.1333333333332,313.3333333333333 1440,300 L 1440,400 L 0,400 Z"
    );
  }
}
</style>

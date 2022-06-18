<template>
  <div ref="div">
    <canvas ref="canvas" tabindex="0"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { MapRefresher } from '@/assets/scripts/MapRefresher';

export default {
  name: "GameMap",

  setup: () => {
    let div = ref(null);
    let canvas = ref(null);

    onMounted(() => {
      new MapRefresher(canvas.value.getContext('2d'), div.value);
    });

    return {
      div,
      canvas
    }
  }
}
</script>


<style scoped>
div {
  height: calc(100%-8vh);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

canvas {
  background-color: rgb(151, 255, 140);
}
</style>
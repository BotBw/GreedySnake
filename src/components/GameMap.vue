<template>
  <div>
    <canvas></canvas>
  </div>
</template>

<script>
export default {
  name: "GameMap",
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
  height: 88%;
  width: 88%;
  background-color: black;
}
</style>
<template>
  <div>
    <GameMenu/>
    <GameMap/>
  </div>
</template>

<script>
import GameMap from "@/components/GameMap"
import GameMenu from "@/components/GameMenu"

export default {
  name: "BackGround",
  components: {
    GameMap,
    GameMenu
  }
}

</script>


<style scoped>
div {
  height: 100%;
  width: 100%;
  background-color: rgb(33, 161, 21);
}
</style>
<template>
  <div class = "menu">
    <div class="cur-score">
      <img src="http://47.241.188.0:8000/static/images/angry.png">
      <div>0</div>
    </div>
    <div class="his-score">
      <img src="http://47.241.188.0:8000/static/images/smile.png">
      <div>0</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameMenu",
}

</script>


<style scoped>
.menu {
  height: 8vh;
  background-color: rgb(30, 120, 37);
  display: flex;
  justify-content: space-around;
  user-select: none;
}
.cur-score { 
  display: flex;
  align-items: center;
}

.cur-score > img {
  width: 6.5vh;
}

.cur-score > div {
  color: white;
  font-weight: bold;
  font-size: 4vh;
  margin-left: 1vh;
}
.his-score {
  display: flex;
  align-items: center;
}
.his-score > img {
  width: 6vh;
}

.his-score > div {
  color: white;
  font-weight: bold;
  font-size: 4vh;
  margin-left: 1vh;
}

</style>
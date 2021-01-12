<template>
    <div class="main">
      <div class="designer1">
        <img src="../../../assets/Ellipse-1.png">
        <h5>Gary Simon</h5>
        <p>Award winning UX/UI designer and educator</p>
      </div>
      <div class="designer2">
        <img src="../../../assets/Ellipse-2.png">
        <h5>Jane Doe</h5>
        <p>Award winning UX/UI designer and educator</p>
      </div>
    </div>
    <div class="tyre">
      <img src="../../../assets/tyre.png" alt="Tyre" />
    </div>
</template>

<style scoped>
.main {
  width: 50%;
  background-color: #020074;
  height: 30rem;
  float: left;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.designer1 {
  width: 12rem;
  height: 16rem;
  background: #ffffff;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  font-weight: bold;
}

h5 {
  color: #1daeff;
}

.designer2 {
  width: 12rem;
  height: 16rem;
  background: #ffffff;
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  font-weight: bold;
}

.tyre {
  height: 30rem;
  position: absolute;
  display: flex;
  align-items: center;
}
</style>
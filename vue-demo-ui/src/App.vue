<template>
  <div>
    <nav-bar></nav-bar> 
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/Navigation/NavBar.vue';

export default {
  components: { 
    NavBar,
  },
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');
  * {
    box-sizing: border-box;
  }

  html {
    font-family: 'Poppins', sans-serif;
  }

  body {
    margin: 0;
    scroll-behavior: smooth; 
    background: url('https://www.toptal.com/designers/subtlepatterns/patterns/greek-vase.png');
  }
</style>

<template>
  <div >
    <nav-bar></nav-bar>
    <home-content></home-content>
  </div>
</template>

<script>
  import NavBar from './components/Navigation/NavBar.vue';
  import HomeContent from './components/Home/HomeContent.vue';
  export default {
    components: { NavBar, HomeContent },
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
    background: url('https://www.toptal.com/designers/subtlepatterns/patterns/greek-vase.png');
  }
</style>

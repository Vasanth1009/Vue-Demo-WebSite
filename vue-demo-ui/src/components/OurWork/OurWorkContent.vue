<template>
  <div class="container" id="ourwork">
    <section class="main-section">
      <div class="main-content">
        <h6>WE GOT THIS</h6>
        <h1>Our customers are the Heroes of this<br/>story.</h1>
        <div class="story-img">
          <img src="../../assets/pensketch.png" >
        </div>
      </div>
      <div class="main-image">
        <img src="https://ouch-cdn.icons8.com/preview/769/32d2c524-465d-45f7-8e8f-cf872b5e6917.png">
      </div>
    </section>
  </div>
  <div class="subcontent">
      <our-work-projects></our-work-projects>
  </div>
</template>

<script>
import OurWorkProjects from './SubContent/OurWorkProjects.vue';
export default {
    components: { OurWorkProjects },
}
</script>
<style scoped>
  .main-section {
    margin: auto;
    height: 50rem;
    display: flex;
    justify-content: center;
  }

  .main-content {
    margin: 10rem 5rem;
    width: 40%;
  }

  .main-content h6 {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.12em;
    font-variant: small-caps;
  }
  .main-content h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 80px;
  }

  .main-content svg {
    margin-left: 1rem;
  }

  .main-content span {
    margin: 0.5rem;
  }

  .story-img img {
    width: 20%;
    margin-top: -2rem;
  }

  .main-image {
    margin-top: 4rem;
    margin-right: 3rem;
  }

  .main-image img {
      width: 35rem;
  }

  .subcontent {
    margin: auto;
    display: flex;
    justify-content: center;
    max-width: 100rem;
  }
</style>

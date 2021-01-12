<template>
  <div class="container" id="home">
    <section class="main-section">
      <div class="main-content">
        <h6>AWARD WINNING DESIGN</h6>
        <h1>We make your <br/>Business look <br/>great</h1>
        <div class="great-img">
          <img src="../../assets/pensketch.png" >
        </div>
        <button class="btn">
          <i class="fas fa-search"></i> <span>OURWORK</span>
        </button>
      </div>
      <div class="main-image">
        <img src="https://ouch-cdn.icons8.com/preview/117/ae903912-ce3d-4ba2-a8d7-280f389115b3.png">
      </div>
    </section>
  </div>
  <div class="subcontent">
    <home-artist></home-artist>
    <home-description></home-description>
  </div>
</template>

<script>
import HomeArtist from './SubContent/HomeArtist.vue';
import HomeDescription from './SubContent/HomeDescription.vue';
export default {
	components: { HomeArtist, HomeDescription },
    
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
    font-size: 70px;
    line-height: 80px;
  }

  .main-content svg {
    margin-left: 1rem;
  }

  .main-content span {
    margin: 0.5rem;
  }

  .great-img img {
    width: 35%;
    margin-top: -1rem;
  }

  button {
    margin: 2rem;
    background-color: #020074;
    font-weight: bolder;
    color: #ffffff;
    cursor: pointer;
    padding: 0.75rem 2rem;
    border-radius: 30px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.26);
  }

  button:hover {
    background: #ffffff;
    color: #020074;
    border: 3px solid #020074;
  }

  .main-content button svg {
    margin: 0rem;
  }

  button:focus {
    outline: none;
  }

  .main-image {
    margin-top: 4rem;
    margin-right: 3rem;
  }

  .subcontent {
    margin: auto;
    display: flex;
    justify-content: center;
    max-width: 100rem;
  }
</style>

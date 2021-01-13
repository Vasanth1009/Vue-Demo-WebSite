<template>
  <div class="navigationbar">
    <nav class="navbar navbar-expand-lg navbar-light" :class="navbarbg">
      <div class="container">
        <router-link to="/home" >
        <a class="navbar-brand nav-link" :class="{ active: activeHome === true }" @click="activeHomeToggle"
          ><header>ABCD</header>
          <span>WXYZ</span></a
        >
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/home" ><a class="nav-link" :class="{ active: activeHome === true }" @click="activeHomeToggle" aria-current="page" >Home</a></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/ourwork" ><a class="nav-link" :class="{ active: activeOurWork === true }" @click="activeOurWorkToggle" >Our Works</a></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/services" ><a class="nav-link" :class="{ active: activeServices === true }" @click="activeServiceToggle" >Services</a></router-link>
            </li>
          </ul>
          <button class="btn">GET A QUOTE</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        navbarbg: '',
        activeHome: false,
        activeOurWork: false,
        activeServices: false,
      };
    },
    methods: {
      activeHomeToggle() {
        this.activeHome = true;
        this.activeOurWork= false;
        this.activeServices= false;
      },
      activeOurWorkToggle() {
        this.activeHome = false;
        this.activeOurWork= true;
        this.activeServices= false;
      },
      activeServiceToggle() {
        this.activeHome = false;
        this.activeOurWork= false;
        this.activeServices= true;
      }
    },
    mounted() {
      window.document.onscroll = () => {
        if (window.scrollY > 0) {
          this.navbarbg = 'bg-light';
        } else {
          this.navbarbg = '';
        }
      };
    },
  };
</script>

<style scoped>
  a {
    text-decoration: none;
  }

  .navigationbar {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .navbar {
    display: flex;
  }

  .navbar-brand {
    font-style: italic;
    font-weight: bold;
    font-size: 20px;
  }

  .navbar-brand header {
    color: #020074;
    display: inline;
  }

  .navbar-brand span {
    color: #1daeff;
    margin-right: 5rem;
  }

  .nav-item {
    margin-right: 2rem;
    font-weight: bold;
  }

  button {
    background-color: #ffffff;
    font-weight: bold;
    color: #020074;
    cursor: pointer;
    padding: 0.5rem 2rem;
    border-radius: 30px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.26);
  }

  button:hover {
    background: #1daeff;
    color: #020074;
    border: 3px solid #020074;
  }

  button:focus {
    outline: none;
  }
</style>

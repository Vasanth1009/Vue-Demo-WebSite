<template>
  <div class="navigationbar">
    <nav class="navbar navbar-expand-lg navbar-light" :class="navbarbg">
      <div class="container">
        <a class="navbar-brand" href="#home"
          ><header>ABCD</header>
          <span>WXYZ</span></a
        >
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
              <a class="nav-link active" aria-current="page" href="#home">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#ourwork">OURWORK</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services">SERVICES</a>
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
      };
    },
    mounted() {
      window.document.onscroll = () => {
        if (window.scrollY > 50) {
          this.navbarbg = 'bg-light';
        } else {
          this.navbarbg = '';
        }
      };
    },
  };
</script>

<style scoped>
  .navigationbar {
    position: sticky;
    top: 0;
    z-index: 1;
  }

  .navbar {
    margin-top: 1rem;
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
    color: black;
    cursor: pointer;
    padding: 0.5rem 2rem;
    border-radius: 30px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.26);
  }

  button:hover {
    background: #1daeff;
    color: #020074;
  }

  button:focus {
    outline: none;
  }
</style>

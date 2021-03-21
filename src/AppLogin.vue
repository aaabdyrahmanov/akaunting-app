<script>
import Home from './views/Login/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<template>
  <div class="login-page">
    <div class="header">
      <img
        src="https://app.akaunting.com/public/img/akaunting-logo-white.svg"
        alt="Akaunting"
        style="width:12%;"
        class="mb-3"
      >
    </div>
    <div class="container">
      <Home />
    </div>
    <footer>
      <div class="container text-white mt-5 mb-4 align-center">
        <small>
          Powered By Akaunting: <a href="https://akaunting.com" target="_blank" class="text-white txt-dc-none">Free Accounting Software</a>
        </small>
      </div>
    </footer>
  </div>
</template>

<style>
*, :after, :before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
} 

.login-page {
  background: url("../src/assets/login.png");
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 5% 0;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  z-index: 1;
  width: 100%;
  padding: 0 5%;
}

#app > h1 {
  display: flex; 
  justify-content:left;
}

.header {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  margin: auto;
  text-align: center;
}

.mb-3 {
  margin-bottom: 3rem!important;
}

.mb-4 {
  margin-bottom: 1.5rem!important;
}

.mt-5 {
  margin-top: 3rem!important;
}

.text-white {
  color: #ffffff !important;
}

.txt-dc-none {
  text-decoration: none;
}

.small, small {
  font-size: 80%;
  font-weight: 400;
}

.align-left {
  text-align: left!important;
}

.align-right {
  text-align: right!important;
}

.align-center {
  text-align: center!important;
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
</style>

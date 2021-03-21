<template>
  <div class="installation-page">
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
  </div>
</template>

<script>
import Home from './views/Installation/Home.vue'

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
*, :after, :before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
} 

.installation-page {
  background: url("../src/assets/login.png");
  background-position: center;
  background-size: cover;
  height: 100vh;
  width: 100%;
  padding: 2% 0;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
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

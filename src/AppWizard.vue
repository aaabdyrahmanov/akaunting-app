<template>
  <div class="wizard-page">
    <div class="container mt--5">
      <div id="app">
        <h1 class="text-white">
          Wizard
        </h1>
        <Home />
      </div>
    </div>
  </div>
</template>

<script>
import Home from './views/Wizard/Home.vue'

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

.wizard-page {
  background: url("../src/assets/login.png");
  height: 100vh;
  background-position: center;
  background-size: cover;
  font-family: sans-serif Open Sans,sans-serif;
  font-family: SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;
  width: 100%;
  padding: 0;
  z-index: -1;
  margin: 0 auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  z-index: 1;
  width: 100%;
  padding: 2% 22%;
}

#app > h1 {
  display: flex; 
  justify-content:left;
}

.text-white {
  color: #ffffff !important;
}
</style>

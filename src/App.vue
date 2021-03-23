<template>
  <div id="app">
    <div 
      id="home"
      v-if="route=='/'"
    >
      <h1>Akaunting Frontend Developer Case Study</h1>
      <ul>
        <li>
          <router-link class="nav-link" to="/installation/language"><button  class="btn-main">Installation Page</button> </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Company' }"> <button class="btn-main"> Wizard Page</button></router-link>
        </li>
      </ul>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    route () {
      return this.$route.path;
    }
  }
}
</script>

<style>
#home {
  text-align: center;
  background-color: #eeeeee;
  width: 100%;
  height: 100vh;
  background: #55588b;
}

#home h1 {
  padding-top: 40px;
  font-size: 3rem;
  color: #fff;
  padding-bottom: 20px;
  text-decoration: none;
}

#home ul li {
  font-size: 2rem;
  margin: auto;
  text-align: center;
  color: green;
}
#home ul li a {
  text-decoration: none;
}

.btn-main {
  box-sizing: border-box;
  appearance: none;
  background-color: transparent;
  border: 2px solid #3498db;
  text-decoration: none;
  border-radius: 0.6em;
  color: ;
  cursor: pointer;
  display: flex;
  align-self: center;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1;
  margin: 20px auto;
  padding: 1.2em 2.8em;
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  border-color: #3498db;
  color: #fff;
  box-shadow: 0 0 40px 40px #3498db inset, 0 0 0 0 #3498db;
  transition: all 150ms ease-in-out; 
}
.btn-main:hover, .btn:focus {
  color: #f5dcdc;
  box-shadow: 0 0 10px 0 #3498db inset, 0 0 10px 4px #3498db;
}
</style>
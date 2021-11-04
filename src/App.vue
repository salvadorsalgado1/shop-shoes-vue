<template>
  <div id="app">
    <Navbar/>
    <router-view/>
  </div>
</template>
<script>

import Navbar from './components/Navbar'
 export default {
  components:{Navbar}
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
   background-color:rgb(122, 117, 107);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
.header-text-p{
  font-size:1.6em;
}
.card-heading-h2{
  font-size:1.4em;
}

</style>

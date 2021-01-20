<template>
<div v-if="this.$route.name !== 'Front'" class="nav-bar">
  <nav class="navbar navbar-expand-lg navbar-light lead" style="background-color: rgba(154,144,100,.5);"> 
  
  <router-link class="navbar-brand lead" :to='{name:"Front"}'>
    <img src="@/assets/logo_transparent-2.png" width="50" height="50" alt="Shoe Creative, Front Page">
  </router-link>
<ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link :to='{name:"About"}' class="nav-link"><i class="fas fa-shopping-cart"></i>&nbsp;<span class="bg-info amount-cart">4</span></router-link>
        </li>
      </ul>

  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <router-link :to='{name:"Home"}' class="nav-link">Home <span class="sr-only">(current)</span></router-link>
      </li>
      <li class="nav-item">
        <router-link :to='{name:"About"}' class="nav-link">About</router-link>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link :to='{name:"About"}' class="nav-link"><i class="fas fa-shopping-cart"></i>&nbsp;<span class="bg-info amount-cart">{{shoppingCart}}</span></router-link>
        </li>
      </ul>
  </div>
</nav>
</div>
</template>
<script>
export default {
data(){
  return{

  }
},
computed:{
  shoppingCart(){
    let cart = this.$store.state.cart;
    return cart;
  }
}
}
</script>
<style>
.amount-cart{
  border-radius:15px 15px 15px 15px;
  padding:6px;
}
.navbar-light .navbar-nav .nav-link, .navbar-light .navbar-brand, 
.navbar-light .navbar-nav .active>.nav-link, .navbar-light .navbar-nav 
.nav-link.active, .navbar-light .navbar-nav .nav-link.show, .navbar-light 
.navbar-nav .show>.nav-link{
  color:white;
  font-size:1em;

}


</style>
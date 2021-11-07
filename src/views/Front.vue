<template>
  <div class="front">
    <div class="container animate__animated animate__fadeIn animate__delay-1s">
      <img src="@/assets/logos/transparent-logo.png" class="img-fluid front-image" alt="Shoe Creative"/>
      <br/>
      <router-link :to='{name:"Home"}' class="btn btn-lg text-white btn-outline-secondary mt-3">Proceed</router-link>
    </div> 
  </div>
</template>
<script>
 export default {

}
</script>

<style>
.front-image{
  margin-top:100px;
  width:60%;
}
</style>
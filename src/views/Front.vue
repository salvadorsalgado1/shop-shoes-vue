<template>
  <div class="front">
    <div class="container animate__animated animate__fadeIn animate__delay-1s">
      <img src="@/assets/logo_transparent-low.png" class="img-fluid front-image" alt="Shoe Creative"/>
      <br/>
      <router-link :to='{name:"Home"}' class="btn btn-lg text-white btn-outline-secondary mt-5">Proceed</router-link>
    </div> 
  </div>
</template>
<script>
import Progress from '../components/Progress'
export default {
components:{
 Progress
},
mounted(){
  


}
}
</script>

<style>
.front-image{
  width:60%;
}
</style>
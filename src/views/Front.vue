<template>
  <div class="front">
    <div class="container animate__animated animate__fadeIn animate__delay-1s">
      <img src="@/assets/logo_transparent.png" class="img-fluid" alt="Shoe Creative"/>
      <router-link :to='{name:"Home"}' class="btn btn-lg text-white btn-outline-secondary">Proceed</router-link>
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

</style>
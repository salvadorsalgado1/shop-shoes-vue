<template>
  <div class="home">
    <div class="header">
      <MainHeaderImg/>
    </div>
      <h1 class="display-4 text-white">Welcome to Shoe Creative!</h1>
      <p class="text-white lead header-text-p">
        This site features only the coolest kicks and a 
        variety a shoes to choose from. Check 
        out our clearance section for exclusive deals!
      </p>
    <p><a href="#squares" class="btn btn-secondary btn-lg">Learn More</a></p>
    <ShoeCarousel/>
    <Squares/>
  </div>
</template>
<script>
import ShoeCarousel from '../components/ShoeCarousel'
import Squares from '../components/Squares'
import MainHeaderImg from '../components/MainHeaderImg'
export default {
  name: 'Home',
  components: {
    ShoeCarousel,
    Squares,
    MainHeaderImg
  },
  mounted(){
    
  }
}
</script>
<style>
.shoe-creative-header{
  width:100%!important;
  border:white solid 1px;
}
</style>

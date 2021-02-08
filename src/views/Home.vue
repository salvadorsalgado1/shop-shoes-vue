<template>
  <div class="home">
    <div class="header">
      <MainHeaderImg/>
    </div>
    <div class="container">
      <h1 class="display-4 text-white">Welcome to Soled Out Kicks!</h1>
      <p class="text-white lead header-text-p">
        This site features only the coolest kicks and a 
        variety of shoes to choose from. Check 
        out our clearance section for exclusive deals!
      </p>
    </div>
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
  data(){
    return{
      staffPicks:[]
    }
  },
  components: {
    ShoeCarousel,
    Squares,
    MainHeaderImg
  },
}
</script>
<style>
.shoe-creative-header{
  width:30%!important;
  
}
</style>

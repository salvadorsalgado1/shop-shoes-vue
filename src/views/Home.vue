<template>
  <div class="home">
    <section>
      <div class="header">
      <MainHeaderImg/>
    </div>
    <div class="container main-content">
      <h1 class="display-4 text-white">Soled Out Kicks!</h1>
      <p class="text-white lead header-text-p">
        This site features only the coolest kicks and a 
        variety of shoes to choose from. Check 
        out our clearance section for exclusive deals!
      </p>
      <p><a href="#squares" class="btn btn-secondary">Learn More</a></p>
    <Squares/>
    </div>
    </section> 
    <Promotion/>
   </div>
</template>
<script>
import SecondSection from '../components/sections/SecondSection'
import Promotion from '../components/sections/Promotion'
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
    Squares,
    MainHeaderImg,
    SecondSection,
    Promotion,
   },
}
</script>
<style>

 
.shoe-creative-header{
  width:30% !important;
}

</style>

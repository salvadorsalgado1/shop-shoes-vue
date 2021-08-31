<template>
  <div class="home">
    <section>
      <div class="header">
      <MainHeaderImg/>
    </div>
    <div class="container main-content">
      <h1 class="display-4 text-white">Welcome to Soled Out Kicks!</h1>
      <p class="text-white lead header-text-p">
        This site features only the coolest kicks and a 
        variety of shoes to choose from. Check 
        out our clearance section for exclusive deals!
      </p>
      <p><a href="#squares" class="btn btn-secondary btn-lg">Learn More</a></p>
    <Squares/>
    </div>
    </section> 
    <ThirdSection/>
    <NewsSection/>
  </div>
</template>
<script>
import SecondSection from '../components/sections/SecondSection'
import ThirdSection from '../components/sections/ThirdSection'
import NewsSection from '../components/sections/NewsSection'
import Squares from '../components/Squares'
import MainHeaderImg from '../components/MainHeaderImg'
import Footer from '../components/sections/Footer'
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
    ThirdSection,
    NewsSection,
    Footer
  },
}
</script>
<style>

 
.shoe-creative-header{
  width:30% !important;
}

</style>

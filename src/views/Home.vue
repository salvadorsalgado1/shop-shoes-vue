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
import Axios from 'axios'
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
  mounted(){
    let shoes = {
    "shoes":[{"id":1 ,"title":"SB Dunk Low Pro", "brand":"Nike", "img":"https://static.nike.com/a/images/t_prod,f_auto/w_1920,c_limit/683fbb45-fbad-4b6f-91f2-063c991001dd/sb-dunk-low-pro-street-hawker-release-date.jpg", "price":"14000", "type":"Men"},
            {"id":2 ,"title":"Kobe AD NXT", "brand":"Yeezy", "img":"https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/556998.jpg", "price":"13000", "type":"Women"},
            {"id":3 ,"title":"Grateful Dead Dunks", "brand":"Adidas", "img":"https://preview.thenewsmarket.com/Previews/ADID/StillAssets/320x320/557000.jpg", "price":"20000", "type":"Women"},
            {"id":4 ,"title":"Mocha Jordan 1", "brand":"Nike", "img":"https://preview.thenewsmarket.com/Previews/ADID/StillAssets/400x300/556995.jpg", "price":"6000", "type":"Men"}]}
    this.staffPicks = shoes.shoes;
    console.log(this.staffPicks)
    this.$store.state.picks = this.staffPicks;

  }
}
</script>
<style>
.shoe-creative-header{
  width:100%!important;
  border:white solid 1px;
}
</style>

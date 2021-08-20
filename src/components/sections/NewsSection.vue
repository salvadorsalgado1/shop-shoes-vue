<template>
  <div class="news-section">
    <div class="news">
      <div class="container">
        
        <div class="row">
          <div class="col-md-5 col-sm-5">
            <h2 class="display-4">Soled Out <br/>News Center</h2>
            <p class="lead">Soled Out Kicks features weekly updates in the world of sports. Stay tuned for more information daily and look out for your favorite team.</p>
          </div>
          <div class="col-md-7 col-sm-7">
            <CarouselText/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CarouselText from '../CarouselText'
export default {
  components:{CarouselText},
  
 data(){
   return{
     news:[]
   }
 },
 mounted(){ 
        this.$store.dispatch('setDailyNews');
     }
}
</script>

<style>
.news-section {
  height: 100%;
  color: white;
  background: url("../../assets/backgrounds/soccer-field.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
 }
 .news{
    height:70vh;
    display:flex;
    align-items:center;
    justify-content: center;
 }
</style>
<template>
  <section class="third-section mt-4">
      <div class="achieve">
          <div class="container mt-4">
              <h2 class="display-4">Achieve Greatness</h2>
              <div class="row mb-4">
                  <div class="col-md-6 col-sm-6">
                      <ShoeCarousel/>
                  </div>
                  <div class="col-md-6 col-sm-6 d-flex align-items-center">
                      <div class="row">
                          <div class="col-12">
                            <p class="achieve-p">Train your mind. <br/>Train your game.</p>
                          </div>
                          <div class="col-12">
                            <router-link class="btn btn-secondary btn-block mb-4" :to="{name:'Trending'}">Shop Now</router-link>
                          </div>
                      </div>
                  </div>
                 <!--Testing Repo-->
              </div>
          </div>
      </div>
  </section>
</template>
<script>
import ShoeCarousel from '../ShoeCarousel'
export default {
components:{ShoeCarousel}
};
</script>
<style>
.achieve{
    background-color:rgba(0, 0, 0, 0.212);
}
 .achieve-p{
     font-size:1.8em;
 }
.third-section {
     
    color: white;
    background: url("../../assets/backgrounds/sports.jpg") no-repeat center center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    background-size: cover;
 }
@media only screen and (max-width: 767px) {
.third-section {
        background: url("../../assets/backgrounds/sports.jpg") start;
        
    }
}
 .achieve{
    height:100%;
    display:flex;
    align-items:center;
    justify-content: end;
 }
</style>

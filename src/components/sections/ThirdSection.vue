<template>
  <div class="third-section mt-4">
      <div class="achieve">
          <div class="container mt-4">
              <div class="row">
                  <div class="col-md-6 col-sm-6">
                        <h2 class="display-4">Achieve Greatness</h2>
                        <p class="achieve-p">Train your mind. Train your game.</p>
                        <router-link class="btn btn-secondary btn-block mb-4" :to="{name:'Trending'}">Shop Now</router-link>

                  </div>
                 
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {

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
  height: 100%;
  color: white;
  background: url("../../assets/backgrounds/sports.jpg") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
 }
 .achieve{
    height:100%;
    display:flex;
    align-items:center;
    justify-content: end;
 }
</style>

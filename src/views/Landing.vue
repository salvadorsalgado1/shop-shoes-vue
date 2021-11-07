<template>
  <div class="landing">
    <div class="background-video">
     <div class="container animate__animated animate__fadeIn animate__delay-2s">
      <img src="@/assets/logos/transparent-logo.png" class="img-fluid front-image lazy" alt="Shoe Creative"/>
      <br/>
      <router-link title="Get Started" :to='{name:"Home"}' class="animate__animated animate__fadeIn animate__delay-3s btn btn-lg text-white btn-outline-secondary mt-3 btn-landing">Get Started</router-link>
    </div> 
      <video playsinline autoplay muted loop poster="polina.jpg" id="bgvid">
        <source src="../assets/video/shoes-match-source.mp4" type="video/mp4"> 
      </video> 
    </div>
  </div>
</template>
<script>
 
export default {
  name:'Landing'
}
</script>
<style>
 .btn-landing{
   border-color:white;
   background-color:rgba(128, 128, 128, 0.541);
 }
 .background-video  {
    color:white;
    display:flex;
    align-items: center;
    justify-content: center;
    background-color:rgba(56, 56, 56, 0.418);
    height:100vh;
    width:100vw;
    object-fit: cover;
    top:0;
    left:0;
    z-index:-2;
 }
/* ----------- iPhone X ----------- */

/* Portrait and Landscape */
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3) { 
  
  .landing{
    background-color:rgb(122, 117, 107);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
}
video{
  z-index: -1;
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
}
</style>
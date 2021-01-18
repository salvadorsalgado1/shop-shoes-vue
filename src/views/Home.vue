<template>
  <div class="home">
    <div class="header">
      <img src="@/assets/twitter_header_photo_2.png" class=" shoe-creative-header" alt="Shoe Creative"/>
    </div>
    <div class="container">
      <div class="card mt-4">
        <ShoeCarousel/>
      </div>
    </div>
  </div>
</template>
<script>
import ShoeCarousel from '../components/ShoeCarousel'
export default {
  name: 'Home',
  components: {
    ShoeCarousel
  },
  mounted(){
    
  }
}
</script>
<style>
.shoe-creative-header{
  width:100%!important;
}
</style>

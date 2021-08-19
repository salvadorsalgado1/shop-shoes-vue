<template>
  <div class="second-section">
      <h2 class="text-left mt-5 mb-5 ml-3">More to Explore</h2>
      <div class="container">
          <div class="row">
                <div class="col-md-5 mb-3">
                    <ShoeCarousel/>
                </div>
                
                <div class="col-md-7 mb-3">
                    <div class="card card-next-level">
          <div class="card-body">
            <p class="lead next-level">Walk Up to the Next Level</p>
            <router-link class="btn btn-secondary btn-lg" :to="{name:'StaffPicks'}">Top Picks</router-link>
          </div>
        </div>
                </div>
          </div>
      </div>
      
  </div>
</template>

<script>
import ShoeCarousel from '../../components/ShoeCarousel'

export default {
    data(){
        return{
           test:null 
        }
    },
    components: {
    ShoeCarousel,
     
  },

}
</script>

<style>
div .second-section{
    
    margin:5% 0;
}
.next-level{
   font-family:Optima, sans-serif;
   font-size:3.6em;
 }
.card-next-level{
  background-image:url('../../assets/shoe-forest.jpg');
  background-size:cover;
  color:white;
}
.second-section{
    border:white 5px solid;
    height:100%;
    background-color:white;
}
</style>
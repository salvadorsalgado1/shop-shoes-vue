<template>
  <section class="second-section">
      <h2 class="display-4 text-left mb-3 ml-3">Gallery</h2>
    <div class="container">
      <div class="row">
        <div class="col-md-5 mb-3 col-sm-12">
          <div class="card card-next-level">
            <div class="card-body">
              <p class="lead next-level">Walk Up to the Next Level</p>
                <router-link class="btn btn-secondary btn-lg" :to="{name:'StaffPicks'}">Top Picks</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
.second-section{
  height:100%;
  color:white;
 }
 
.next-level{
   font-family:Optima, sans-serif;
   font-size:2.2em;
 }
.card-next-level{
  background-image:url('../../assets/shoe-forest.jpg');
  background-size:cover;
  color:white;
}

</style>
<template>
  <div class="squares mb-4 mt-4">
      <div class="container">
          <div id="squares" class="row ">
              <div class="col-xs-12 col-md-6 col-sm-12 mb-4 col-lg-6">
                <div class="card">
                    <router-link :to='{name:"StaffPicks"}'>
                    <img loading="lazy" class="card-img-top" src="@/assets/staff-picks.jpg" alt="Staff Picks"/>
                    </router-link>         
                </div>
              </div>
              <div class="col-md-6 col-sm-12 mb-4 col-lg-6">
                <div class="card">
                    <router-link :to='{name:"Trending"}'>
                    <img loading="lazy" class="card-img-top" src="@/assets/trending.jpg" alt="Currently Trending"/>
                    </router-link>               
                </div>
              </div>
              <div class="col-md-6 col-sm-12 mb-4 col-lg-3">
                  <div class="card">
                    <router-link :to='{name:"WomenShoes"}'>
                    <img loading="lazy" class="card-img-top" src="@/assets/shoes-for-women.jpg" alt="Shoes for Women"/> 
                    </router-link>  
                  </div>
              </div>
              <div class="col-md-6 col-sm-12 mb-4 col-lg-3">
                <div class="card">
                    <router-link :to='{name:"MenShoes"}'>
                    <img loading="lazy" class="card-img-top" src="@/assets/shoes-for-men.jpg" alt="Shoes for Men"/>
                    </router-link>               
                </div>
              </div>
              <div class="col-md-6 col-sm-12 mb-4 col-lg-3">
                <div class="card">
                    <router-link :to='{name:"Latest"}'>
                    <img loading="lazy" class="card-img-top" src="@/assets/latest-arrivals.jpg" alt="Shoes for Men"/>
                    </router-link>
                </div>
              </div>
              <div class="col-md-6 col-sm-12 mb-4 col-lg-3">
                <div class="card">
                    <router-link :to='{name:"Clearance"}'>
                    <img loading="lazy" class="card-img-top" src="@/assets/shop-clearance.jpg" alt="Shoes for Men"/>
                    </router-link>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {

}
</script>
<style>
.card-img-top:hover{
opacity:.8;

}
</style>
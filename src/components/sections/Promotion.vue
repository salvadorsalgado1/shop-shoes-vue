<template>
  <section class="third-section mt-4">
      <div class="achieve">
          <div class="container mt-4">
               <div class="row mb-4">
                   <div class="col-md-4 col-sm-12 mb-3">
                       <div class="card sales-card">
                            <div class="card-body card-body-content">
                                <h3 class="card-header-sales">We Are The Trusted Experts</h3>
                                <img src="@/assets/icons/icons8-best-seller-96.png" alt=""/>
                                <p class="card-text-sales">Our experts come from all over the world</p>
                            </div>
                        </div>
                   </div>
                   <div class="col-md-4 col-sm-12 mb-3">
                       <div class="card sales-card">
                            <div class="card-body">
                                <h3 class="card-header-sales">We Deliver the Highest Quality</h3>
                                <img src="@/assets/icons/icons8-good-quality-96.png" alt=""/>
                                <p class="card-text-sales mt-auto">We choose only the finest materials</p>
                            </div>
                        </div>
                   </div>
                   <div class="col-md-4 col-sm-12 mb-3">
                       <div class="card sales-card">
                            <div class="card-body">
                                <h3 class="card-header-sales">We Have Fast Delivery</h3>
                                <img  src="@/assets/icons/icons8-in-transit-96.png" alt=""/>
                                <p class="card-text-sales">For each delivery, we offer 2 day shipping</p>
                            </div>
                        </div>
                   </div>
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
 
.sales-card{
    min-height:100%;
   
}
.card-text-sales{
    font-size:.8em;
    color:teal;
    justify-content:end;
}
.card-header-sales{
    font-size:1em;
    color:teal;
    font-weight: 500;
}
.achieve{
    background-color:rgba(0, 0, 0, 0.212);
}
 .achieve-p{
     font-size:3em;
 }
.third-section {
     
     background-color:rgb(208, 235, 247);
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

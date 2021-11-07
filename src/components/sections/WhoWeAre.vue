<template>
  <div class="who-we-are">
      <div class="container">
          <h2 class="mt-4">This is who we are!</h2>
          <div class="row">
              <div class="col-md-6 col-sm-12 mt-5 mb-5">
                  <img class="lazy rounded-circle about-set" src="../../assets/shoes-setup.jpg" alt=""/>
              </div>
              <div class="col-md-6 col-sm-12  mt-5 mb-5">
                <p class="who-we-are-text lead">We are a small giant company that deals with the best styles and makes of shoes. We have been around for more than 50 years. We have evolved with time and kept up with the latest
                    trends. Why not give us a shot and find out what we have to offer. <router-link :to="{name:'About'}">Learn More</router-link>
                </p>
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
.who-we-are-text{
     font-size:1.6em;
}
.who-we-are{
   height:100%;
    background-color:rgb(231, 229, 229);
    display:flex;
    align-items:center;
}
.about-set{
    width:60%;
}
</style>
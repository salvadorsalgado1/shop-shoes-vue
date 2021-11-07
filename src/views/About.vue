<template>
  <div class="about">
    <div class="container text-white">
      <img class="img-fluid" src="@/assets/logos/transparent-logo.png" alt="Soled Out Kicks"/>
      <h1 class="text-white about-text mt-4">About Us</h1>
      <p class="text-white about-text text-left">Soled Out Kicks caters to all that wish to change their perspective of shoes. Shoes are not only things we wear. Shoes are a statement 
      that has the power to define our everyday lives. They describe how we feel, how we do our jobs, how much of our goal we are accomplishing. They protect our most 
      foundation to which we use everyday. It is important to note that we only sell shoes that consist of top notch quality. We aim for greatness and 
      do not give up until the customer is satisfied with her/his descision on a pair of shoes.</p>
       <h2 class="text-white">History</h2>
       <img class="float-end" src="@/assets/soled-out-kicks-classic.jpg" alt=""/>
       <p class="about-text text-left mt-4">It was all started by a local family in a small town around Los Angeles, California. The shoemakers were convinced that shoes will be around forever.
         There will be advances in styles and different colors. 
         At first, when the store opened, business was often slow and if any, ever existent.
         It only took one customer to make a difference. The sense of comfort of the shoes and customer service sparked a wave around town. 
         The next morning, as the store was about to open, many flocked to the store to check what items were present. There was a line outside of the door. Many of whom were 
         lucky enough to enter, got themselves the newest selection of shoes not available anywhere at the time.
         </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  data(){
    return{
      staffPicks:[]
    }
  },
}
</script>
<style>
.about-text{
  font-size:1.4em;
}
</style>


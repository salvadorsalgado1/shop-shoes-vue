<template>
  <div class="staff-pick-card">
    <div class="card staff-pick">
      <h2 class="card-title card-heading-h2 mt-2">{{title}}</h2>
    <img class="card-img-top" :src="image" alt=""/>
        <div class="card-body card-body-text">
           <p class="text-left price-amount lead">${{price}}</p>
            <p class="lead text-left">
              <br/>{{brand}}
            {{text}}<br/>Product: {{id}}</p>
            <button @click="addToCart(id, title, image, text, price, brand)" class="btn btn-primary">Add to Cart</button>
            <button @click="viewItem(id)" class="btn btn-secondary ml-4">Check It Out</button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
props:['image', 'title', 'text', 'price', 'id', 'brand'],
data(){
  return{
    success:'Added to cart!',
    shoeID:null
  }
},

methods:{
  addToCart(id, title, image, text, price, brand){
    console.log(`${id} added to cart!`);
    let item = {id:id, title:title, image:image, text:text, price:price, brand:brand};
    this.$store.commit('cartIncrement', item);
  },
  viewItem(id){
    this.shoeID = id;
    this.$store.commit('viewItem', this.shoeID);
    this.$router.push('Shoe')
  }
}
}
</script>
<style>
.price-amount{
  font-size:2em;
  
}
</style>

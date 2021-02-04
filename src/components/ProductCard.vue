<template>
  <div class="staff-pick-card">
    <div class="card">
      <h2 class="card-title card-heading-h2 mt-2">{{title}}</h2>
    <img class="card-img-top" :src="image" alt=""/>
        <div class="card-body">
         <div class="row">
           <p class="card-text text-left lead">
             {{brand}}
             <br/>
            {{text}}
            <br/>${{price}}
            <br/>Product: {{id}} <br/>
            
            </p>
            
            
            
         </div>
            <button @click="addToCart(id, title, image, text, price, brand)" class="btn btn-primary">Add to Cart</button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
props:['image', 'title', 'text', 'price', 'id', 'brand'],
data(){
  return{
    success:'Added to cart!'
  }
},
methods:{
  addToCart(id, title, image, text, price, brand){
    console.log(`${id} added to cart!`);
    let item = {id:id, title:title, image:image, text:text, price:price, brand:brand};
    
    this.$store.commit('cartIncrement', item);
   

  }
}
}
</script>

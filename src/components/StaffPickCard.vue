<template>
  <div class="staff-pick-card">
    <div class="card">
      <h2 class="card-title card-heading-h2 mt-2">{{title}}</h2>
    <img class="card-img-top" :src="image" alt=""/>
        <div class="card-body">
         <div class="row">
           <p class="card-text text-left lead">
            {{text}}
            <br/>${{price}}
            <br/>Product: {{id}}</p>
            
            
         </div>
         
            <button @click="addToCart(id)" class="btn btn-primary">Add to Cart</button>
        </div>
    </div>
  </div>
</template>
<script>
export default {
props:['image', 'title', 'text', 'price', 'id'],
data(){
  return{

  }
},
methods:{
  addToCart(id){
    console.log(`${id} added to cart!`);
    this.$store.commit('increment');

  }
}
}
</script>

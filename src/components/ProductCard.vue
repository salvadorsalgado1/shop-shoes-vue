<template>
  <div class="staff-pick-card">
    <div class="card staff-pick">
      <div class="card-header mb-4">
         <p class="card-title card-heading-h2">{{title}}</p>
      </div>
      <div class="row">
        <div class="col">
          <img class="card-img-top img-shoe" :src="image" alt=""/>
        </div>
        <div class="col">
          <p class="text-left price-amount lead">${{price}}</p> 
          <p class="lead text-left">
              <br/>{{brand}}
            {{text}}<br/>Product: {{id}}</p>
         </div>
      </div>
        <div class="card-body card-body-text">
          <div class="" v-if="added">
             <SuccessAlert text="Added to cart!"/>
          </div>
            <button @click="addToCart(id, title, image, text, price, brand)" class="btn btn-block btn-primary">Add to Cart</button>
            <button @click="viewItem(id)" class="btn btn-secondary btn-block ">More</button>         
        </div>
    </div>
  </div>
</template>
<script>
import SuccessAlert from '../components/SuccessAlert';
export default {
props:['image', 'title', 'text', 'price', 'id', 'brand'],
components:{
  SuccessAlert
},
data(){
  return{
    success:true,
    shoeID:null,
    feedback:'Added to cart!',
    added:false
  }
},

methods:{
  addToCart(id, title, image, text, price, brand){
    console.log(`${id} added to cart!`);
    let item = {id:id, title:title, image:image, text:text, price:price, brand:brand};
    this.$store.commit('cartIncrement', item);
    this.added = true;

    setTimeout(()=>{
      this.added=false;
    }, 2000);
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
  font-size:1.4em; 
}
.card-img-top{
  width:100%;
  
}
</style>

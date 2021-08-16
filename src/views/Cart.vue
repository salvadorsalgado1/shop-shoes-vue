<template>
  <div class="cart">
      <div class="container mb-2">
          <div class="row mt-5">
              <div v-if="emptyCart" class="col-md-12 col-sm-12 col-lg-6">
                  <ul class="list-group">
                    <li class="list-group-item text-right mb-4" v-for="(list, id) in checkoutCart" :key="id">
                        <p>{{id}}</p>
                        <img :src="list.image" class="float-left w-25 mr-4"  alt=""/>
                        <button @click="removeFromCart(id)" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
                        <div class="text-left">
                            <h2>{{list.title}}</h2>
                            <p>{{list.brand}}</p>
                            <p>{{list.text}}</p>
                            <p>${{list.price}} </p>
                            <p>Size 8 in Mens</p>
                        </div>
                    </li>
                </ul>
              </div>
              <div class="col-md-12 col-sm-12 col-lg-6">
                  <Total/>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import Total from '../components/Total'
import HeaderImg from '../components/HeaderImg'
import ProductCard from '../components/ProductCard'
export default {
name:'Cart',
components:{
  HeaderImg,
  ProductCard,
  Total
},
data(){
  return{
      cart:[]
  }
},
mounted(){
     
},
methods:{
    removeFromCart(index){
        this.$store.commit('removeCartItem', {index});
        console.log(index);
    }
},
computed:{
    checkoutCart(){
        let basket = this.$store.state.checkout
        return basket;
    },
    emptyCart(){
        if(this.$store.state.cart > 0){
            return true;
        }else{
            return false;
        }
    }
    
},


}
</script>
<style>
.shopping-cart{
    font-size:2.6em;
}
.empty-cart-text{
    font-size:1.6em;
}
</style>
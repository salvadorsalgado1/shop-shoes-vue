<template>
  <div class="cart">
      <div class="container mb-2">
          <div class="row mt-5">
              <div v-if="emptyCart" class="col-md-8 col-sm-12">
                  <ul class="list-group">
                    <li class="list-group-item text-right mb-4" v-for="(list, id) in checkoutCart" :key="id">
                        <img :src="list.image" class="float-left w-25 mr-4"  alt=""/>
                        <button @click="removeFromCart(list.id)" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
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
              <div class="col-md-4 col-sm-12">
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
methods:{
    removeFromCart(id){
        this.$store.commit('removeCartItem', {id});
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
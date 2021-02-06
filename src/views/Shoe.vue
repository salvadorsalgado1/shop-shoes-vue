<template>
  <div class="shoe-view">
      <div class="container">
          <div v-for="(shoe, index) in shoes" :key="index">
                <div class="row mt-4">
                    <div class="col-md-5">
                    <CheckCarousel 
                    :imageOne="shoe.image_url_one" 
                    :imageTwo="shoe.image_url_two" 
                    :imageThree="shoe.image_url_three" 
                    :imageFour="shoe.image_url_four"
                    :imageFive="shoe.image_url_five"/>
                    </div>
                    <div class="col-md-7">
                    <h1 class="lead text-left mt-4 shoe-title text-white">{{shoe.product_title}}</h1>
                    <p class="text-white text-left shoe-brand">by {{shoe.brand}}</p>
                    <p class="shoe-price text-white text-left">${{shoe.listing_price}}</p>
                    <p class="text-left shoe-description text-white">Description: {{shoe.content}}</p>
                    <p class="text-white">Currently in stock: {{shoe.stock}}</p>
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>
<script>
import Axios from 'axios'
import CheckCarousel from '../components/CheckCarousel'
export default {
components:{
CheckCarousel
},
name:'Shoe',
data(){
    return{

    }
},
computed:{
    shoes(){
        let shoe = this.$store.state.check
        return shoe;
    }
},
mounted(){
    Axios.get(`/api/check/info/${this.$store.state.id}`)
    .then(response=>{
        console.log(response.data)
        let data = response.data;
        this.$store.commit('setCheck', data)
    })
}
}
</script>

<style>
.shoe-description{
    font-size:1.6em;
}
.shoe-price, .shoe-title{
    font-size:2em;
}
</style>
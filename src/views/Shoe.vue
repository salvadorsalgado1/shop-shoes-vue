<template>
  <div class="shoe-view">
      <div class="container">
           
          <div v-for="(shoe, index) in shoes" :key="index">
              <div v-if="loading">
        <Loading />
      </div>
                <h1 class="lead mt-4 text-right shoe-title text-white">{{shoe.product_title}}</h1>
                <p class="text-white text-right shoe-brand">by {{shoe.brand}}</p>
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
                        <p class="shoe-price text-white text-left">${{shoe.listing_price}}</p>
                        <p class="text-left shoe-description text-white">Description: {{shoe.content}}</p>
                        <p class="text-white">Currently in stock: {{shoe.stock}}</p>'
                        <p><router-link class="btn btn-primary btn-block" :to="{name:'Home'}">Home</router-link>
                            <router-link class="btn btn-primary btn-block" :to="{name:'EditShoe', 
                            params:{
                            id:shoe.product_id,
                            shoeBrand:shoe.brand, 
                            shoeTitle: shoe.product_title, 
                            shoePrice: shoe.listing_price, 
                            shoeCont: shoe.content, 
                            url1:shoe.image_url_one, 
                            url2:shoe.image_url_two, 
                            url3:shoe.image_url_three, 
                            url4:shoe.image_url_four,
                            url5:shoe.image_url_five }}">Edit</router-link>
                        </p>
                    </div>
                </div>
          </div>
      </div>
  </div>
</template>
<script>
import Axios from 'axios'
import CheckCarousel from '../components/CheckCarousel'
import Loading from '../components/Loading'
export default {
components:{
CheckCarousel, Loading
},
name:'Shoe',
data(){
    return{
        loading:false
    }
},
computed:{
    shoes(){
        let shoe = this.$store.state.check
        return shoe;
    }
},
mounted(){
    this.loading==true
    let currentID = this.$store.state.id;
    if(currentID == null){
        this.$router.push({name:'Home'})
    }
    Axios.get(`/api/check/info/${currentID}`)
    .then(response=>{
        console.log(response.data)
        let data = response.data;
        this.$store.commit('setCheck', data)
        this.loading=false;
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
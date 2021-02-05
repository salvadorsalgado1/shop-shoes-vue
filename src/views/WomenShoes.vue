<template>
  <div class="staff-picks">
      <HeaderImg/>
      <div class="container">
      <h1 class="display-4 text-white">Staff Picks</h1>
      <p class="text-white header-text-p"><em>Staff Picks</em> features shoes that are hand chosen by our staff. This listing of shoes are favorites among
      <em>Creative Shoes</em>.
        <div class="row mb-4">
          <div v-for="(shoe, id) in shoes" :key="id" class="col-md-6 col-sm-12 col-lg-4 mt-4">
            <ProductCard
              :image="shoe.image_url_one"
              :title="shoe.product_title"
              :text="shoe.type"
              :price="shoe.listing_price"
              :id="shoe.product_id"
              :brand="shoe.brand"
            />
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import HeaderImg from '../components/HeaderImg'
import ProductCard from '../components/ProductCard'
import Axios from 'axios'
export default {
name:'WomenShoes',
components:{
  HeaderImg,
  ProductCard
},
data(){
  return{

  }
},
methods:{
  
},
computed:{
  shoes(){
    let shoe = this.$store.state.women
    return shoe;
  },
  
},
mounted(){
    if(this.$store.state.women == null){
      console.log("picks null")
      Axios.get('/api/women/info')
      .then(response=>{
        console.log(response.data)
        this.$store.state.women = response.data
      })
    }
  }

}
</script>

<style>

</style>
<template>
  <div class="staff-picks">
      <HeaderImg/>
      <div class="container">
      <h1 class="display-4 text-white">Shoes for Men</h1>
      <p class="text-white header-text-p">This is a dedicated aisle for <em>men</em>.
      <em>Creative Shoes</em>.
       <div v-if="loading">
        <Loading />
      </div>
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
import Loading from '../components/Loading'
export default {
name:'MenShoes',
components:{
  HeaderImg,
  ProductCard,
  Loading
},
data(){
  return{
    loading:false
  }
},
methods:{
  
},
computed:{
  shoes(){
    let shoe = this.$store.state.men
    return shoe;
  },
  
},
mounted(){
    if(this.$store.state.men == null){
      this.loading=true;
      console.log("picks null")
      Axios.get('/api/men/info')
      .then(response=>{
        console.log(response.data)
        this.$store.state.men = response.data
        this.loading=false;
      })
    }
  }

}
</script>

<style>

</style>
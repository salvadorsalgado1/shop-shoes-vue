<template>
  <div class="staff-picks">
      <HeaderImg/>
      <div class="container">
      <h1 class="display-4 text-white">Staff Picks</h1>
      <p class="text-white header-text-p"><em>Staff Picks</em> features shoes that are hand chosen by our staff. 
      This listing of shoes are favorites among
      <em>Creative Shoes</em>. Just a slight reminder, the juice is temporary, and the sauce is forever.</p>
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
import Loading from '../components/Loading'
import HeaderImg from '../components/HeaderImg'
import ProductCard from '../components/ProductCard'
import Axios from 'axios'
export default {
name:'StaffPicks',
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
    let shoe = this.$store.state.picks
    return shoe;
  },
  
},
mounted(){
    if(this.$store.state.picks == null){
      this.loading=true;
      Axios.get('/api/picks/info')
      .then(response=>{
        console.log(response.data)
        
        this.$store.state.picks = response.data
        this.loading=false;
      })

    }
  }

}
</script>

<style>

</style>
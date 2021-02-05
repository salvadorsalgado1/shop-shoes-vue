<template>
  <div class="staff-picks">
      <HeaderImg/>
      <div class="container">
      <h1 class="display-4 text-white">Clearance Aisle!</h1>
      <p class="text-white header-text-p">You can find the <em>latest kicks</em> AND find them for an amazing price.
      Buyer beware, these prices or products don't last forever on the shelves...
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
name:'Clearance',
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
    let shoe = this.$store.state.clearance
    return shoe;
  },
  
},
mounted(){
    if(this.$store.state.clearance == null){
      console.log("picks null")
      Axios.get('/api/clearance/info')
      .then(response=>{
        console.log(response.data)
        this.$store.state.clearance = response.data
      })
    }
  }

}
</script>
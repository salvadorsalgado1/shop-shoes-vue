<template>
  <div class="staff-picks">
    <HeaderImg/>
    <div class="container">
    <h1 class="display-4 text-white">Shoes For Women</h1>
    <p class="text-white header-text-p"><em>Creative Shoes</em>.</p>
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
            :stars="shoe.rating"
            :reviews="shoe.reviews"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderImg from '../components/HeaderImg'
import ProductCard from '../components/ProductCard'
import Loading from '../components/Loading'
  export default {
  name:'WomenShoes',
  components:{
    HeaderImg, ProductCard, Loading
  },
  data(){
    return{
      loading:false
    }
  },
  computed:{
    shoes(){
      let shoe = this.$store.state.women
      return shoe;
    },
  },
  mounted(){
    if(this.$store.state.women == null){
      this.loading=true;
      this.$store.dispatch('dispatchWomensShoes');
      this.loading=false;
    }
  }
}
</script>
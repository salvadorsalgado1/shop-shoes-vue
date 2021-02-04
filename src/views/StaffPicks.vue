<template>
  <div class="staff-picks">
      <HeaderImg/>
      <div class="container">
      <h1 class="display-4 text-white">Staff Picks</h1>
      <p class="text-white header-text-p"><em>Staff Picks</em> features shoes that are hand chosen by our staff. This listing of shoes are favorites among
      <em>Creative Shoes</em>.
      </p>
        <div class="row mb-4">
          <div v-for="(shoe, id) in shoes" :key="id" class="col-md-6 col-sm-12 col-lg-4 mt-4">
            <ProductCard
            :image="shoe.img"
            :title="shoe.title"
            :text="shoe.type"
            :price="shoe.price"
            :id="shoe.id"
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
export default {
name:'StaffPicks',
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
    let shoe = this.$store.state.picks
    return shoe;
  }
}

}
</script>

<style>

</style>
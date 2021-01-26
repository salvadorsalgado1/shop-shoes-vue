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
            <StaffPickCard
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
import StaffPickCard from '../components/StaffPickCard'
export default {
name:'StaffPicks',
components:{
  HeaderImg,
  StaffPickCard
},
data(){
  return{

  }
},
methods:{
  
},
computed:{
  shoes(){
    return this.$store.state.picks
  }
}

}
</script>

<style>

</style>
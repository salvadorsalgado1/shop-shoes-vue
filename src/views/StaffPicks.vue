<template>
  <div class="staff-picks">
      <HeaderImg/>
      <div class="container">
<h1 class="display-4 text-white">Staff Picks</h1>
      <p class="text-white header-text-p"><em>Staff Picks</em> features shoes that are hand chosen by our staff. This listing of shoes are favorites among
      <em>Creative Shoes</em>.
      </p>
      
      <div class="row">
        
        <div class="col col-md-6 col-sm-12 col-lg-4">
          <StaffPickCard
          image="https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/19fa4e8b-1d78-4152-a8a8-c6d81a089260/sb-dunk-low-pro-street-hawker-release-date.jpg"
          title="SB Unk Low Pro"
          text="Nike"
          price="140"
          id="2"
          />
        </div>
        <div class="col col-md-6 col-sm-12 col-lg-4">
          <StaffPickCard
          image="https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/19fa4e8b-1d78-4152-a8a8-c6d81a089260/sb-dunk-low-pro-street-hawker-release-date.jpg"
          title="SB Unk Low Pro"
          text="Nike"
          price="140"
          id="2"
          />
        </div>
        <div class="col col-md-6 col-sm-12 col-lg-4">
          <StaffPickCard
          image="https://static.nike.com/a/images/t_prod_ss/w_640,c_limit,f_auto/19fa4e8b-1d78-4152-a8a8-c6d81a089260/sb-dunk-low-pro-street-hawker-release-date.jpg"
          title="SB Unk Low Pro"
          text="Nike"
          price="140"
          id="2"
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

}
</script>

<style>

</style>
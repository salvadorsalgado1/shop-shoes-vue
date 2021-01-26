<template>
  <div class="cart">
      <div class="container mb-2">
          <div class="row mt-5">
              <div class="col-md-8 col-sm-12">
                  <ul class="list-group">
                      
                    <li class="list-group-item text-right mb-4" v-for="(list, id) in checkoutCart" :key="id">
                        <img :src="list.image" class="float-left w-25 mr-4"  alt=""/>
                        <button @click="removeFromCart(list.id)" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button>
                        <div class="text-left">
                            <h2>{{list.title}}</h2>
                            <p>{{list.brand}}</p>
                            <p>{{list.text}}</p>
                            <p>${{list.price}} </p>
                            <p>Size 8 in Mens</p>
                        </div>
                        
                    </li>
                </ul>
              </div>
              <div class="col-md-4 col-sm-12">
                  <div class="card">
                      <div class="card-body text-left">
                          <h2 class="text-center">Total</h2>
                          <table class="table">
                            <tbody>
                                <tr>
                                    <th scope="row">Number of Items</th>
                                    <td>{{numItems}}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Price:</th>
                                    <td>$304.45</td>
                                </tr>
                                <tr>
                                    <th scope="row">Discounts</th>
                                    <td>$0.00</td>
                                </tr>
                                <tr>
                                    <th scope="row">Tax</th>
                                    <td>%10.0</td>
                                </tr>
                                 <tr class="table-secondary lead">
                                    <th scope="row">Total</th>
                                    <td>$334.00</td>
                                </tr>
                            </tbody>
                            </table>
                        <button class="btn btn-outline-primary">Order</button>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>
<script>
import HeaderImg from '../components/HeaderImg'
import StaffPickCard from '../components/StaffPickCard'
export default {
name:'Cart',
components:{
  HeaderImg,
  StaffPickCard
},
data(){
  return{
      cart:[]
  }
},
methods:{
    removeFromCart(id){
        this.checkoutCart = this.checkoutCart.filter(list=>{
            return this.checkoutCart.id != id;
        })
    }
},
computed:{
    checkoutCart(){
        this.cart = this.$store.state.checkout;
        return this.cart;
    },
    numItems(){
        let count = this.$store.state.checkout.length;
        return count;
    }
}

}
</script>
<style>

</style>
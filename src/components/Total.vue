<template>
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
                                    <td>$ {{preCartPrice}}</td>
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
                                    <td>$ {{postCartPrice}}</td>
                                </tr>
                            </tbody>
                            </table>
                        <button class="btn btn-outline-primary">Order</button>
                      </div>
                  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
computed:{
    numItems(){
            let count = this.$store.state.checkout.length;
            return count;
        },
        preCartPrice(){
            let price = this.$store.state.total;
            return price;
        },
        postCartPrice(){
            let price = this.$store.state.total;
            let postPrice = (price + (price * .1)).toFixed(2);
            return postPrice;
        }
        
    },
    
}

</script>

<style>

</style>
<template>
  <div class="card">
        <div class="card-body text-left">
            <h2 class="text-center">Total</h2>
            <table class="table" id="fr">
            <tbody>
                <tr>
                    <th scope="row">Number of Items</th>
                    <td>{{numItems}}</td>
                </tr>
                <tr>
                    <th scope="row">Price:</th>
                    <td>$ {{total.toFixed(2)}}</td>
                </tr>
                <tr>
                    <th scope="row">Discounts</th>
                    <td>$0.00</td>
                </tr>
                <tr>
                    <th scope="row">Tax (%10)</th>
                    <td>$ {{tax.toFixed(2)}}</td>
                </tr>
                    <tr class="table-secondary lead">
                    <th scope="row">Total</th>
                    <td>${{finalTaxPrice}}</td>
                </tr>
            </tbody>
            </table>
            <div v-if="success" class="text-center">
                <SuccessAlert text="Your order has been placed!"/>
            </div>
            
        
        <button @click="order" class="btn btn-outline-primary btn-block">Order</button>
        <div v-if="ordered">
        <button @click="generate('fr')" class="btn-block btn btn-outline-secondary mt-3">Print Receipt</button>

        </div>
        </div>
    </div>
</template>
<script>
import jsPDF from 'jspdf'
import SuccessAlert from '../components/SuccessAlert.vue'
export default {
    components:{SuccessAlert},
    data(){
        return{
            tax:0,
            total:0,
            success:false,
            ordered:false
        }
    },
computed:{
    discounts(){
        return 0;
    },
    finalTaxPrice(){
        let amount = this.$store.state.checkout;
        let final = 0;
        amount.map(total=>{
            final+= total.price;
        })
        this.total = final;
        this.tax = (final *.1);
        final = (final * .1) + final;
        return final.toFixed(2);
    },
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
    methods:{
        order(){
            this.success = true;
            this.ordered = true;
            setTimeout(()=>{
                this.success = false;
            }, 2000)
        },
       generate(){

       let currentTime = new Date();
       let minutes = currentTime.getMinutes();
       let hours = currentTime.getHours();
       if(hours == 0){
           hours = 12;
       }
       let day = currentTime.getDate();
       let month = currentTime.getMonth()+1;
       let year = currentTime.getFullYear();
       let time = `${month}/${day}/${year} ${hours}:${minutes} `;
     
         let pdfName = 'receipt';
         
        let img = new Image();
        var doc = new jsPDF();
       // let src = "https://shop-online-vue.herokuapp.com/img/logo.f4d0786c.png"
        img.src = "https://shop-online-vue.herokuapp.com/img/logo.f4d0786c.png";
        doc.addImage(img, 'png', 20, 20, 80, 80);


         doc.setLanguage("en-US");
         doc.text(120, 40, `Number of Items: ${this.numItems}`);
         doc.text(120, 50, `Price: $ ${this.total.toFixed(2)}`);
         doc.text(120, 60, `Discounts: $ ${this.discounts.toFixed(2)}`);
         doc.text(120, 70, `Tax (%10) $ ${this.tax.toFixed(2)}`)
         doc.text(120, 75, "_____________________");
        doc.text(120, 85, `Final Price: $ ${this.finalTaxPrice}`);
        doc.text(20, 140, `${time}`);
        doc.text(20, 150, "We take pride in our shoes. All returns are valid");
        doc.text(20, 160, "up to seven days. If you have any questions, please");
        doc.text(20, 170, "feel free to drop in. Thank you for your business!");


        doc.save(pdfName + '.pdf');
 
       }
    }
    
}

</script>

<style>

</style>
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
        <button class="btn btn-outline-primary">Order</button>
        <button @click="generate('fr')" class="btn btn-outline-secondary">Print Receipt</button>
        </div>
    </div>
</template>
<script>
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
export default {
    data(){
        return{
            tax:0,
            total:0
        }
    },
computed:{
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
       generate(){
        let pdfName = 'test';
        let output = [];
        let img = new Image();
        let src = "data:image/jpeg;base64,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"
        img.src = src;

        for(index in this.$store.state.cart){
            output.push(index)
        }
        

        var doc = new jsPDF();
        doc.addImage(img, "png", 10, 10, 150, 150);
        doc.autoTable({html: '#fr'});
        doc.text(output, 40, 10)
        doc.setLanguage("en-US");
        doc.save(pdfName + '.pdf');
       }
    }
    
}

</script>

<style>

</style>
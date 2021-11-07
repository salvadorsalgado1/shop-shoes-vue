<template>
  <div class="edit-shoe lead">
      <div class="container">
          <h2 class="edit-shoes-heading">{{shoeBrand}}</h2>
      <div class="card">
          <div class="card-body">
              <h3>Shoe With ID: {{id}} </h3>
              <form @submit.prevent="submitEdits(editShoeItem.id, editShoeItem.brand, editShoeItem.title, editShoeItem.price, editShoeItem.url1, editShoeItem.url2, editShoeItem.url3, editShoeItem.url4, editShoeItem.url5)">
                  <div class="row">
                    <div class="col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Brand {{}}</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Brand" v-model="editShoeItem.brand"> 
                        </div>
                    </div>
                    <div class="col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Product Title</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Product Title" v-model="editShoeItem.title">
                         </div>
                    </div>
                  </div>
                  <div class="row">
                        <div class="col-lg-6 col-sm-12">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Listing Price</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Listing Price" v-model="editShoeItem.price">
                            </div>
                        </div>
                        <div class="col-lg-6 col-sm-12">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Url 1</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="editShoeItem.url1">
                             </div>
                        </div>
                    </div>
                  <div class="row">
                      <div class="col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Url 2</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="editShoeItem.url2">
                         </div>
                      </div>
                      <div class="col-lg-6 col-sm-12">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Url 3</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="editShoeItem.url3">
                         </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-6 col-sm-12">
                          <div class="form-group">
                            <label for="exampleInputEmail1">Url 4</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="editShoeItem.url4">
                         </div>
                      </div>
                      <div class="col-lg-6 col-sm-12">
                            <div class="form-group">
                                <label for="exampleInputEmail1">Url 5</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="editShoeItem.url5">
                             </div>
                      </div>
                  </div>
                 <button type="submit"  class="btn btn-primary">Submit</button>
            </form> 
          </div>
      </div>
      </div> 
      <hr/>
  </div>
</template>
<script>
import Axios from 'axios';
export default {
    props:['id', 'shoeBrand', 'shoeTitle', 'shoePrice', 'shoeCont', 
    'url1', 'url2', 'url3', 'url4', 'url5'],
    methods:{
         submitEdits(id, brand, title, price, url1, url2, url3, url4, url5){
            let amount = parseInt(price);
             Axios.post('/api/check/info/edit', {
                id:id,
                brand:brand,
                title:title,
                price:amount,
                url1:url1,
                url2:url2,
                url3:url3,
                url4:url4,
                url5:url5

            }).then(()=>{
                this.$router.push({name:'Shoe'})
            })
        }
    },
    beforeMount(){
        this.$store.dispatch('editShoeItems', this.id);
    },
    mounted(){
        let currentID = this.$store.state.id;
        if(currentID == null){
            this.$router.push({name:'Home'})
        }
    },
    computed:{
         editShoeItem(){
             let shoe = {
                id:this.id,
                brand:this.shoeBrand, title: this.shoeTitle, 
                price: this.shoePrice, url1:this.url1, url2: this.url2, 
                url3: this.url3, url4:this.url4, url5:this.url5}
             return shoe;
         },
    }
}
</script>
<style>
    .edit-shoes-heading{
        color:white;
        font-size:2.2em;
    }
</style>
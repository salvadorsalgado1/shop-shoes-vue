<template>
<div class="barr">
    <p class="lead text-white">{{currentStatus}}</p>
    <div class="progress">
        <div class="progress-bar progress-bar-striped bg-success progress-bar-animated" role="progressbar" 
        aria-valuenow="80"
        aria-valuemin="0" 
        aria-valuemax="100" v-bind:style="{width: currentProgress + '%'}">{{currentProgress}}%</div>
    </div>
    <p class="text-white"></p>
    <router-link type="button" class="btn btn-outline-secondary btn-lg text-white" :to="{name:'Home'}">Proceed</router-link>
</div>
  
</template>

<script>
export default {
    data(){
        return{
            percent:100,
            status:null,
            value:0
        }
    },
    mounted(){
        this.loadingBar();
    },
    methods:{
        loadingBar(){
            
        }
    },
    computed:{
        currentStatus(){
            if(this.percent <= 30){
                this.status = 'Loading Shoes...';
            }else if( this.percent > 30 && this.percent < 60){
                this.status = 'Adding Color...';
            }else if( this.percent >= 60 && this.percent < 90){
                this.status = 'Loading Greatness...';
            }else{
                this.status = 'Finalizing...';
            }
            return this.status;
        },
        currentProgress(){

        }
    
    }
}
</script>


<style>

</style>
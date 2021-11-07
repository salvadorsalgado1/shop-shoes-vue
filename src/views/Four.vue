<template>
    <div class="four container">
        <h1 class="display-4 four-heading">Woops! Four Oh Four</h1>
        <img class="four-img" src="../assets/logos/logo.png" alt="Sold Out Kicks"/>
        <div class="four-text">
            <p>Sorry! You reached a page that doesn't exist. How about we go back to the <router-link :to="{name:'Home'}">Home Page</router-link> to check out our latest shoes. 
            Or you can get redirected to the Home page automatically by staying on this page.</p>
            <p>It will only take {{this.second}} seconds...</p>
        </div> 
    </div>
</template>

<script>
export default {
    data(){
        return{
             second:10,
        }
    },
    mounted(){
        let seconds = 10;
        const interval = setInterval(()=>{
            console.log(seconds)
             this.second--;
            if(this.second < 0){
                clearInterval(interval);
                this.second=0;
                console.log("Redirecting...");
                this.$router.push({name:'Home'})
            }
        }, 1000)
    },     
}
</script>
<style>
.redirect{
    color:white;
    font-size:3em;
}
.four-img{
    width:50%;
}
.four-heading{
    
    color:white;
}
.four-text{
    font-size:1.6em;
    color:white;
}
</style>
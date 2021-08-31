<template>
  <section class="footer" v-if="this.$route.name !=='Front'">
        <p class="footer-text text-left ml-3"><a href="https://github.com/salvadorsalgado1/shop-shoes-vue" title="Github"><i id="github-icon" class="mt-1 fab fa-github"></i></a></p>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.footer{
    background-color: rgba(154,144,100,.5);
    height:40px;
    margin:0, 0, 0, 0;
    width:100%;
    max-height:50px;
}
.footer-text{
    color:white;
    
}
 #github-icon{
     font-size:1.4em;
     max-height:50px;
    color:white;
 }
 #github-icon:hover{
     color:rgb(107, 107, 107);
 }
</style>
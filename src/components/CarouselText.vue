<template>
  <div class="carousel-text">
       <div id="carousel-news-indicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carousel-news-indicators" data-slide-to="0" class="active"></li>
    <li data-target="#carousel-news-indicators" data-slide-to="1"></li>
    <li data-target="#carousel-news-indicators" data-slide-to="2"></li>
    <li data-target="#carousel-news-indicators" data-slide-to="3"></li>
    <li data-target="#carousel-news-indicators" data-slide-to="4"></li>
    <li data-target="#carousel-news-indicators" data-slide-to="5"></li>
  </ol><!--https://getbootstrap.com/docs/5.1/components/carousel/-->
  <div class="carousel-inner" >
    <div class="carousel-item active">
        <img id="image-gray-overlay" class="d-block w-100" src="@/assets/soccer-cleat-1.jpg" alt="First slide"> 
      <div class="carousel-caption d-none d-md-block">
          <h2 class="display-3">Sports News</h2>
          <p class="lead">Take a look at this week's top headlines.</p>
      </div>
    </div>
     
    <div v-for="(entry, index) in NewsFeeds" :key="index" class="carousel-item">
      <a :href="entry.url">
      <img id="image-gray-overlay" class="carousel-image d-block w-100" :src="entry.urlToImage" alt="Second slide">
      <div class="carousel-caption d-none d-md-block">
          
          <p class="entry-desc">{{entry.description}}</p>
          <h3>{{entry.author}}</h3>
      </div>
      </a>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carousel-news-indicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carousel-news-indicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
  </div>
</template>

<script>
export default {
  computed:{
      NewsFeeds(){
        let news = this.$store.state.news;
        return news;
    }
  },
mounted(){
     $(document).ready(function(){
      $('.carousel-news').carousel({
        interval: 1500
      })
});
}
}
</script>
<style>
.entry-desc{
  font-size:1.6em;
}

#image-gray-overlay{
  filter:brightness(60%);
}
</style>
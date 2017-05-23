<template>
  <div class="swipepage">
    <div class="swiper-container">
      <ul class="swiper-wrapper">
        <li v-for="item in alldata" class="swiper-slide list">
          <img :src="item.PictureWebp">
        </li>
      </ul>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import swiper from '@/static/js/swiper.min.js'
import '@/static/css/swiper.css'
export default {
  name: 'swipepage',
  props: ['alldata'],
  data () {
    return {
      swiperpage: ''
    }
  },
  mounted () {
    this.swiperpage = new Swiper('.swiper-container', {
      autoplay: 1000,
      pagination: '.swiper-pagination',
      paginationClickable: true
    })
  },
  updated () {
    this.swiperpage.update()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
ul {
  list-style-type: none;
  padding: 0;
}
.list img{
  width:100%;
}
.swiper-pagination .swiper-pagination-bullet{
  width: 10px;
  height: 2px;
}
.swiper-pagination .swiper-pagination-bullet-active{
  width: 20px;
  height: 2px; 
}
</style>

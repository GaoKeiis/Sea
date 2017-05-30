<template>
  <div class="swipepage">
    <div class="swiper-container">
      <ul class="swiper-wrapper">
        <li v-for="item in alldata" class="swiper-slide lists">
          <img v-if="item.picture" :src="item.picture">
          <img v-else-if="item.PictureWebp" :src='item.PictureWebp'>
          <img v-else :src="item">
        </li>
      </ul>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import '@/static/css/swiper.css'
import swiper from '@/static/js/swiper.js'  
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
<style lang='less'>
.lists {
  width: 100%;
  img{
    display: block;
    width:100%;
  }
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

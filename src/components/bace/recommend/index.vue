<template>
  <div class="recommendpage">
    <div class="recommend-title">
      <h3>{{recommendate.Channel}}</h3>
    </div> 
    <ul class="recommend-uls">
      <li v-for='item in recommendate.Records'>
        <img _v-7536536a="" :src="item.PictureWebp">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'recommend',
  props: ['recommendate']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.recommendpage{
  margin-top: 10px;
  background: #fff;
}
.recommend-title{
 padding: 10px 0;
 text-align: center;
 background: #fff;
 border-bottom: 1px solid #eee;
  h3{
  font-size: 14px;
  }
}
.recommend-uls{
  display: flex;
  flex-wrap: wrap;
  li{
      width: 50%;
      img{
          width: 100%;
      }
  }
}
</style>

<template>
  <div class="watchList">
    <div class="watchList-title">
      <img :src="brandlist2data.title">
    </div> 
    <div class="watchList-cont">
      <dl v-for='item in brandlist2data.content'>
        <dt>
          <img :src="item.PictureWebp">
        </dt>
        <dd>
          <p class="nowrap introduce">{{item.SlideName}}</p>
          <span class="price">{{item.Description}}</span> 
        </dd>
      </dl>  
    </div>
  </div>
</template>

<script>
export default {
  name: 'watchList',
  props: ['brandlist2data']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.watchList-title{
  img{
      width: 100%;
  }
}
.watchList-cont {
  width: 100%;
  display: inline-block;
  white-space: nowrap; 
  overflow-x:scroll;
  text-align: center;
  dl{
    width: 25%;
    text-align: center;
    display: inline-block;
    dt{
      img{
        width: 100%;
      }
    }
    dd{
      span{
        color: #ccc;
      }
    }
  }
}
</style>

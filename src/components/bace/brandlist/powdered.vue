<template>
  <div class="powdered">
    <div class="powdered-title">
      <img :src="brandlist3data.title">
    </div> 
    <div class="powdered-cont">
      <dl v-for='item in brandlist3data.content'>
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
  name: 'powdered',
  props: ['brandlist3data']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.powdered-title{
  img{
      width: 100%;
  }
}
.powdered-cont {
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

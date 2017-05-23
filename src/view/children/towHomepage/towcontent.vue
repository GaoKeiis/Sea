<template>
  <div class="productList">
    <div v-if='towcontentData.img!=""' v-for="iemt in towcontentData.img.Records" class="img">
      <img :src="iemt.PictureWebp" alt="">
    </div>
    <div v-for='item in towcontentData.cont'>
      <div class="product-title">
        <h3>{{item.Title}}</h3>
      </div>
      <div class="product-list">
        <dl v-for='items in item.Products'>
          <dt>
            <img :src="items.PicturesWebp">
          </dt>
          <dd>
            <p class="nowrap">{{items.Subject}}</p>
            <span>¥{{items.FinalPrice}}</span>
          </dd>
        </dl>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'towcontent',
  props: ['towcontentData']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.img{
  img{
    width:100%;
  }
}
.product-title{
  padding: 10px 0;
  text-align: center;
  h3{
    font-size: 14px;
  }
}
.product-list{
  display: flex;
  flex-wrap: wrap;
  dl{
    background: #fff;
    padding: 0 5px;
    margin-right: 4px;
    width: 45%;
    text-align: center;
    margin-bottom: 10px;
    dt{
      img{
        width: 100%;
      }
    }
  }
}
</style>

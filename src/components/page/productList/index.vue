<template>
  <div class="productList">
    <div v-for='item in fontdata'>
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
  name: 'productList',
  props: ['fontdata']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.product-title{
  padding: 10px 0;
  text-align: center;
  background: #fff;cx 
  h3{
    font-size: 14px;
  }
}
.product-list{
  display: flex;
  flex-wrap: wrap;
  dl{
    padding: 0 5px;
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

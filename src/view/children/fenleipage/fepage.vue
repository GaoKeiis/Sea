<template>
  <div class="productList">
      <div class="product-list">
        <dl v-for='items in dataAll'>
          <router-link :to="{ name: 'sonpDeall',params:{ProductID:items.ProductID} }">
            <dt>
                <img :src="items.PicturesWebp">
                <span>月售{{items.MonthSalesNum}}件</span>
            </dt>
            <dd>
              <p class="nowrap">{{items.Subject}}</p>
              <span>¥{{items.FinalPrice}}</span>
            </dd>
          </router-link>
        </dl>
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'fenchild',
  props: ['dataAll']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.product-title{
  padding: 10px 0;
  text-align: center;
  background: #fff;
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
      position: relative;
      &:after{
        content:'';
        padding-top: 100%; 
        display: block;
        width: 100%;
      }
      img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
      }
      span{
          position: absolute;
          bottom: 0;
          right: 0;
          padding: .1rem .147rem;
          background: rgba(0,0,0,.4);
          color: #fff;
      }
    }
  }
}
</style>

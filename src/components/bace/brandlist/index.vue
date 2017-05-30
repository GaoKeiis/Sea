<template>
  <div class="brandlist">
    <div class="brandlist-title">
      <img :src="brandlist1data.title">
    </div> 
    <div class="brandlist-cont">
     <router-link v-for='item in brandlist1data.content' :to="{ name: 'sonpDeall',params:{ProductID:item.CastID} }" class='brandlist-dl'>
      <dl>
        <dt>
          <img :src="item.PictureWebp">
        </dt>
        <dd>
          <p class="nowrap introduce">{{item.SlideName}}</p>
          <span class="price">{{item.Description}}</span> 
        </dd>
      </dl>
     </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'brandlistpagr',
  props: ['brandlist1data']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss'>
.brandlist{
  margin-top: 10px;
  padding-bottom: 10px; 
  background: #fff;
}
.brandlist-title{
  img{
      width: 100%;
  }
}
.brandlist-cont {
  width: 100%;
  display: inline-block;
  white-space: nowrap; 
  overflow-x:scroll;
  text-align: center;
  .brandlist-dl{
    width: 25%;
    text-align: center;
    display: inline-block;
    dl{
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
}
</style>

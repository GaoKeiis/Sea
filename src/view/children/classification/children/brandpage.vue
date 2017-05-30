<template>
<div class="brandpage">
  <div>
    <div class="m-brandlist">
      <router-link  v-for='item in brandData.Records' :to="{ name: 'fenpage',params:{Subject:item.CastID} }" class='brandpage-dls'>
        <dl>
          <dt><img :src="item.PictureWebp" alt=""></dt>
          <dd>
            <h6>{{item.SlideName}}</h6>
            <p class="nowrap">{{item.Description}}</p>
          </dd>
      </dl>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
export default {
	name: 'brandpage',
  props: ['brandData']
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.m-brandlist{
  display: flex;
  flex-wrap: wrap;
  .brandpage-dls {
    width: 33.3%;
    dl{
      dt{
        width: 100%;
        img{
          width: 100%;
        }
      }
      dd{
        text-align: center;
        p{
          width: 80%;
          color: #999;
          padding-left: 10px;
          padding-bottom: 3%;  
        }
      }
    }
  }
}
</style>

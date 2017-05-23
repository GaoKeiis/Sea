<template>
<div class="brandpage">
  <div>
    <div class="m-brandlist">
      <dl v-for='item in brandData.Records'>
        <dt><img :src="item.PictureWebp" alt=""></dt>
        <dd>
          <h6>{{item.SlideName}}</h6>
          <p class="nowrap">{{item.Description}}</p>
        </dd>
      </dl>
    </div>
  </div>
</div>
</template>

<script>
export default {
	name: 'brandpage',
  props: ['brandData'],
  data () {
    return {
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.m-brandlist{
  display: flex;
  flex-wrap: wrap;
  dl{
    width: 33.3%;
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
</style>

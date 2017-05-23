<template>
<div class="branchpage">
  <div>
    <div class="banner" v-for='item in branchData.Records' v-if='item.PictureWebp !=""'>
      <img :src="item.PictureWebp" alt="">
    </div>
    <div class="introduce" v-else>
      <a href="item.MoreLink">
         <span>{{item.SlideName}}</span>
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
	name: 'branchpage',
  props: ['branchData'],
  data () {
    return {
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.banner{
  img{
    width: 100%;
  }
}
.introduce{
  padding:0 3%;
  display: inline-block;
  span{
    padding: .2rem .32rem;
    border: 1px solid #e5e5e5;
    float: left;
    margin: 0 0 .333rem .373rem;
  }
}
</style>

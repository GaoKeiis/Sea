<template>
<div class="Logincomplete">
  <div class='m-title'>
    <div class="m-left">
        <input type="file" accept="image/*" _v-b9042162="">
        <img _v-b9042162="" src="//m.haimi.com/static/images/web/default-avatar-square.png?imageView2/1/w/100/h/100">
    </div>
    <span>海蜜_cu2rqr</span>
    <i class='iconfont icon-bianjishuru'></i>
  </div>
</div>
</template>
<script>

export default {
	name: 'shopping',
	data () {
    return {
      shoppingData: []
    }
  },
  components: {

  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.m-title{
  padding: 3%;
  .m-left{
    position: relative;
    display: inline-block;
    width: 17%;
    img{
        width: 100%;
        display: block;
    }
    input{
      position: absolute;
      z-index: 100;
      top: 0;
      left: 0;
      width: 100%;
      height: 11%;
      opacity: 0
    }
  }
  span{
    
  }
}
</style>

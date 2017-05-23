<template>
  <div class="classification">
    <div class="m-title">
     <router-link v-for='item in titleData' to="" active-class='on' class="list">
     {{item}}
     </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'classification',
  data () {
    return {
      titleData: ['分类','品牌']
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.m-title{
  padding: 10px 0;
}
.on:after{
  content: '';
  position: absolute;
  bottom: -38%;
  left: 14%;
  display: block;
  width: 65%;
  height: 3px;
  background: #000;
}
</style>

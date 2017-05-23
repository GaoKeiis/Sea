<template>
  <div class="navlist">
    <dl v-for='item in navlistdata'>
      <dt><img :src="item.PictureWebp" alt=""></dt>
      <dd>{{item.SlideName}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'navlist',
  props: ['navlistdata']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navlist{
  margin-top: 10px;
  display: flex;
  text-align: center;
  background: #fff;
}
.navlist dl{
  flex: 1;
}
.navlist dl dt img{
  width: 100%;
}
.navlist dl dd{
  font-size: 14px;
}
</style>

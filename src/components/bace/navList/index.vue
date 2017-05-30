<template>
  <div class="navlist">
    <router-link v-for='item in navlistdata' :to="{ name: 'navlistchilde',params:{ActivityID:1077} }">
      <dl>
        <dt><img :src="item.PictureWebp" alt=""></dt>
        <dd>{{item.SlideName}}</dd>
      </dl>
    </router-link>  
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

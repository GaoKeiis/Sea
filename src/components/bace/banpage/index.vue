<template>
  <div class="banpage">
    <div v-for='item in bannerData.bannerdata'>
      <router-link :to="{ name: 'sonpDeall',params:{ProductID:item.CastID} }">
        <img :src="item.PictureWebp">
      </router-link>
    </div>
    <div v-for='items in bannerData.banerdata'>
      <router-link :to="{ name: 'sonpDeall',params:{ProductID:items.CastID} }">
        <img :src="items.PictureWebp">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banpage',
  props: ['bannerData']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.banpage{
  padding-bottom: 10px;
}
.banpage img{
  width: 100%;
}
</style>

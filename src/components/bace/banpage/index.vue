<template>
  <div class="banpage">
    <div v-for='item in bannerdata'>
      <img :src="item.PictureWebp">
    </div>
    <div v-for='items in banerdata'>
      <img :src="items.PictureWebp">
    </div>
  </div>
</template>

<script>
export default {
  name: 'banpage',
  props: ['bannerdata','banerdata']
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

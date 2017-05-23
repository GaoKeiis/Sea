<template>
  <div class="navpage">
    <ul>
      <li v-for='item in listData'>
        <router-link :to="item.Link" active-class='on'>{{item.Title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navpage',
  props: ['listData']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.navpage{
  background: #fff;
}
.navpage ul{
  padding: 10px 0; 
  overflow-x: scroll;
  white-space: nowrap;
}
.navpage ul li{
  position: relative;
  display: inline-block;
  a{
    padding: 0 10px;
  } 
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

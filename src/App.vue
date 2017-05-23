<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import '@/static/css/common.css'
import '@/static/css/reset.css'
import '@/static/css/iconfont.css'

export default {
  name: 'app'
}
</script>

<style>
.home{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  background: #eee;
  overflow: hidden;
}
.main{
  overflow: hidden;
  height: 90%;
  overflow-y: scroll;
}

</style>

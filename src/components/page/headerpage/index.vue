<template>
  <div class="header">
    <div class="text">
      <i class="iconfont icon-sousuo"></i>
      <input placeholder="搜索宝贝" type="text">
    </div>
     <router-link to='/searchpage'>
      <div class="submit">搜索</div>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.header{
  background: #242424;
  border-bottom: 1px solid #e5e5e5;
  box-sizing: border-box;
}
.text{
  position: relative;
  padding: 5px 10px;
  display: inline-block;
  width: 78%;
}
.text i{
  position: absolute;
  top: 22%;
  left: 3%;
  color: #ccc;
}
.text input{
    width: 100%;
    padding: 5px 0;
    background: #1a1a1a;
    color: #fff;
    padding-left: 20px;
}
.submit{
    padding: 0 8px;
    margin-left: 2%;
    display: inline-block;
    color: #fff;
}
</style>

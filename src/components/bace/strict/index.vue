<template>
  <div class="strictpage">
    <div class="strict-title">
      <h3>{{strictdata.Channel}}</h3>
    </div> 
    <div class="strict-content">
      <div class="strict-left">
        <div class="left-top">
        <router-link :to="{ name: 'sonpDeall',params:{ProductID:strictdata.RecordsId0} }">
          <img :src="strictdata.Records0">
        </router-link>    
        </div>
        <div class="left-bottom">
          <router-link :to="{ name: 'fenpage',params:{Subject:strictdata.RecordsId1} }">
            <img :src="strictdata.Records1"> 
          </router-link>    
        </div>
      </div>
      <div class="strict-right">
        <router-link :to="{ name: 'fenpage',params:{Subject:strictdata.RecordsId2} }">
          <img :src="strictdata.Records2">
        </router-link>  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'strictpage',
  props: ['strictdata']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.strict-title{
  padding: 10px 0;
  text-align: center;
  background: #fff;
  border-bottom: 1px solid #eee;
  h3{
    font-size: 14px;
  }
}
.strict-content{
  display: flex;
}
.strict-left{
  width: 50%;
}
.strict-left .left-top img{
  width: 100%;
}
.strict-left .left-bottom img{
  width: 100%;
}
.strict-right{
  width: 50%
}
.strict-right{
  img{
    width: 100%;
  }
}
</style>

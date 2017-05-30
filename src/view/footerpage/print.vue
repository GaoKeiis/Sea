<template>
<div class="home">
	<div class="main">
   <div class="m-title">
    <router-link v-for='(item,index) in titleData' :to="item.Link" active-class='fot' class="list">
     {{item.txt}}
    </router-link>
  </div>
    <router-view></router-view>
	</div>
	<footerList></footerList>
</div>
</template>

<script>
import footerList from '@/components/page/fooderList/index'
export default {
	name: 'print',
	data () {
    return {
      titleData: [
        {
          txt:'分类',
          Link:'/print/branch'
        },
        {
          txt: '品牌',
          Link: '/print/brand' 
        }
      ]
    }
  },
  components: {
    footerList
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.m-title{
  padding: 10px 0;
  text-align: center;
  background: #fff;
}
.list{
  margin-right: 10%;
  padding-bottom: 5px; 
}
.fot{
  border-bottom: 3px solid #000;
}
</style>

<template>
  <div class="header">
    <div class="text">
      <i class="iconfont icon-sousuo"></i>
      <input placeholder="搜索宝贝" type="text">
    </div>
    <div class="submit">搜索</div>
    <div class="search">
    	<h3>热搜宝贝</h3>
		<div class="splist">
    <router-link v-for='item in searchData' :to="{ name: 'fenpage',params:{Subject:item} }">
      <span>{{item}}</span>  
    </router-link>
		</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchpage',
  data () {
    return {
    	searchData: [],
      aipt: ''
    }
  },
  created () {
    this.getsearchData()
  },
  methods: {
    getsearchData () {
      this.$http.jsonp('http://m.haimi.com/api/search/hotword?type=PRODUCT&platform=WAP',{
        jsonp: '_callback'
      }).then(function(res){
      		this.searchData = res.body.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.header{
  background: #fff;
  box-sizing: border-box;
}
.text{
  position: relative;
  padding: 5px 10px;
  display: inline-block;
  width: 78%;
  border-bottom: 1px solid #e5e5e5;
}
.text i{
  position: absolute;
  top: 22%;
  left: 3%;
  color: #ccc;
}
.text input{
    width: 100%;
    border: none;
    padding: 5px 0;
    background: #fff;
    color: #333;
    padding-left: 20px;
}
.submit{
    padding: 0 8px;
    margin-left: 2%;
    display: inline-block;
    color: #000;
}
.search{
	padding: 3%;
	h3{
		padding-bottom: 5px; 
	}
	.splist {
	  span{
	  	display: inline-block;
	    padding: 3px 10px;
  		border: 1px solid #e5e5e5;
  		margin-right: 5px;
  		margin-bottom: 2%;	
	  }
	}
}
</style>

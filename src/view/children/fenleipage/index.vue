<template>
  <div class="fenail">
    <div class="header">
       <div class="text">
        <i class="iconfont icon-sousuo"></i>
        <input placeholder="搜索宝贝" type="text" ref='inpt'>
      </div>
      <div class="submit">搜索</div>
    </div>
    <div>
      <div class="title">
        <router-link v-for='item in titleData' :to='item.Link' active-class='addClo' class="tit-a">
          <span>{{item.txt}}</span>
        </router-link>
      </div>
      <router-view :dataAll='dataAll.allData'></router-view>
    </div>
  </div>
</template>

<script>

export default {
  name: 'fenail',
  data () {
    return {
      dataAll:{
          allData: []
      },
      titleData: [
          {
            txt:'综合排名',
            Link: '/fenpage/fenchild/:Subject'
          },
          {
            txt: '销量优先',
            Link: '/fenpage/fentowpage/:Subject'
          },
          {
            txt: '价格排序',
            Link: '/fenpage/fepage/:Subject'
          }
      ]
    }
  },
  components: {
      
  },
  mounted () {
     this.getDetailData()
  },
  methods: {
    getDetailData () {
       var Subject = this.$route.params.Subject;
      if(isNaN(Subject)){
        this.$refs.inpt.value= Subject; 
        this.$http.jsonp('http://www.haimi.com/api/search/product?ActivityID=&BonusID=&Status=ON&page=1&pageSize=20&Subject='+Subject+'&Sort=&BrandID=&platform=WAP',{
          jsonp: '_callback'
        }).then(function(res){
          this.dataAll.allData = res.body.data
        })
      }else{
        this.$http.jsonp('http://www.haimi.com/api/search/product?ActivityID=&BonusID=&Status=ON&page=1&pageSize=20&Subject=&Sort=&BrandID='+Subject+'&platform=WAP',{
          jsonp: '_callback'
        }).then(function(res){
          this.dataAll.allData = res.body.data
        })
      }
     
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
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
    padding: 8px 8px;
    margin-left: 2%;
    display: inline-block;
    color: #000;
    border-bottom: 1px solid #e5e5e5;
}
.title{
  display: flex;
  border: 1px solid #ccc;
  text-align: center;
  align-items: center;
  .tit-a{
    flex: 1;
    padding: 5px 0;
    border-right: 1px solid #ccc;
  }
}
.addClo{
  color: #991f33;
}
</style>

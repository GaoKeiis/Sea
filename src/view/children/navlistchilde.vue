<template>
   <div class="navlistchilde"> 
    <div class="navlistchilde-tit">
      <img src="//img.haimi.com/FpITbmepYfWQ1V3QtEenAqakw37Z" alt="">
    </div>
    <div class="navlistchilde-cont">
      <dl v-for = "item in navlistchildeData">
          <dt>
            <img :src="item.PicturesWebp" alt="">
          </dt>
          <dd>
            <h3 class="nowrap">{{item.Subject}}</h3>
            <h5>{{item.SecondSubject}}</h5>
            <p>
              <span>￥{{item.NewComerPrice}}</span>
            </p>
          </dd>
      </dl>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navlistchilde',
  data () {
    return {
      navlistchildeData: []
    }
  },
  components: {
      
  },
  mounted () {
     this.getDetailData()
  },
  methods: {
    getDetailData () {
      var ActivityID = this.$route.params.ActivityID;
      this.$http.jsonp('http://www.haimi.com/api/promotion/activity-products-cdn?_callback=doSuccess2&ActivityID='+ActivityID+'&pageSize=40',{
        jsonp: '_callback'
      }).then(function(res){
          let data = res.body.data
          this.navlistchildeData = res.data.data.Specials[0].Products
          console.log(this.navlistchildeData)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.navlistchilde-tit{
  img{
    width:100%;
    display: block;
  }
}
.navlistchilde-cont{
  dl{
      display: flex;
    dt{
      width: 40%;
      padding-right: 2%; 
      img{
        width: 100%;
         display: inline-block;
      }
    }
    dd{
       width: 50%;
       padding-top: 5%;
       h3{
          font-size: 15px;
       }
       h5{
          color: #ccc;
       }
       p{
            font-size:14px;
            text-align: right;
            background-image: url(//img.haimi.com/Fodwf3ZSFlsKKWphQD4P_BCJvyw0);
            background-size: 60px;
            background-position: left bottom;
            background-repeat: no-repeat;
            padding-top: 14px;
            font-weight: bold;
       }
    }
  }
}
</style>

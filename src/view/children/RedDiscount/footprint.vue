<template>
  <div class="footprint">
    <dl v-for="item in footprintData">
      <dt><img :src="item.Products.PicturesWebp" alt=""></dt>
      <dd>
        <h5>{{item.Products.Subject}}</h5>
        <p>￥<span>{{item.Products.FinalPrice}}</span></p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'footprint',
   data () {
    return {
    	footprintData: []
    }
  },
    created () {
    this.gettitData()
   
  },
  mounted () {
    
  },
  methods: {
    gettitData: function () {
      this.$http.jsonp('http://m.haimi.com/api/me/view-log?page=1&pageSize=20&platform=WAP',{
        jsonp: '_callback'
      }).then(function(res){
      	this.footprintData = res.body.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.footprint{
  padding: 5%;
  dl{
    display: flex;
    dt{
      width: 35%;
      img{
        height: 100px;
      }
    }
    dd{
      padding-left: 10px;
      padding-top: 15px;
      h5{
        padding-bottom: 20px;
      }
      p{
        color: #991f33;
      }
    }
  }
}
</style>

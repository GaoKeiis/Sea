<template>
  <div class="homepage">
      <swipepage :alldata='alldata'></swipepage> 
      <navList :navlistdata='navlistdata'></navList>
      <banpage :bannerData='bannerData'></banpage>
      <strictpage :strictdata='strictdata'></strictpage> 
      <recommendpage :recommendate='recommendate'></recommendpage>
      <brandlistpagr :brandlist1data='brandlist1data'></brandlistpagr>
      <powdered :brandlist3data='brandlist3data'></powdered>
      <productList :fontdata='fontdata'></productList>
  </div>
</template>
<script>
import swipepage from '@/components/page/swipepage/'
import navList from '@/components/bace/navList/'
import banpage from '@/components/bace/banpage/'
import strictpage from '@/components/bace/strict/'
import recommendpage from '@/components/bace/recommend/'
import brandlistpagr from '@/components/bace/brandlist/'
import powdered from '@/components/bace/brandlist/powdered'
import productList from '@/components/page/productList/'
export default {
  name: 'homepage',
  data () {
    return {
      alldata: [],
      fontdata: [], 
      navlistdata: [],
      bannerData: {
        bannerdata: [],
        banerdata: []
      },
      strictdata: {
        Channel: '',
        Records0: '',
        Records1: '',
        Records2: '',
        RecordsId0: '',
        RecordsId1 : '',
        RecordsId2 : ''
      },
      recommendate: {
          Channel: ''
      },
      brandlist1data: {
        title: '',
        content: ''
      },
      brandlist3data: {
        title: '',
        content: ''
      }
    }
  },
  components: {
    swipepage,
    navList,
    banpage,
    strictpage,
    recommendpage,
    brandlistpagr,
    powdered,
    productList
  },
  created () {
    this.getfootData()
    this.getailData()
  },
  methods: {
    getailData () {
      this.$http.jsonp('http://m.haimi.com/api/ad-module/get?Alias=index_2&platform=WAP',{
        jsonp: '_callback'
      }).then(function(res){
        let data = res.body
          this.alldata = data.data[0].Records
          this.navlistdata = data.data[1].Records
          this.bannerData.bannerdata = data.data[2].Records
          this.bannerData.banerdata = data.data[3].Records
          this.strictdata = data.data[4]
          this.strictdata.Channel =  this.strictdata.Channel.Name
          this.strictdata.Records0 = this.strictdata.Records[0].PictureWebp
          this.strictdata.Records1 = this.strictdata.Records[1].PictureWebp
          this.strictdata.Records2 = this.strictdata.Records[2].PictureWebp
          this.strictdata.RecordsId0 = this.strictdata.Records[0].CastID
          this.strictdata.RecordsId1 = this.strictdata.Records[1].CastID
          this.strictdata.RecordsId2 = this.strictdata.Records[2].CastID
          this.recommendate = data.data[5]
          this.recommendate.Channel = this.recommendate.Channel.Name
          this.brandlist1data = data.data[6]
          this.brandlist1data.title = this.brandlist1data.Records[0].
          PictureWebp
          this.brandlist1data.content = data.data[7].Records
          this.brandlist3data = data.data[8]
          this.brandlist3data.title = this.brandlist3data.Records[0].PictureWebp
          this.brandlist3data.content = data.data[9].Records
      })  
    },
    getfootData () {
      this.$http.jsonp('http://m.haimi.com/api/nav/advert-team-products?NavID=2&page=1&pageSize=100&platform=WAP',{
        jsonp: '_callback'
      }).then(function(res){
        this.fontdata = res.body.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

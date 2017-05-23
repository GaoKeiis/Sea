<template>
  <div class="homepage">
      <swipepage :alldata='alldata'></swipepage> 
      <navList :navlistdata='navlistdata'></navList>
      <banpage :bannerdata='bannerdata' :banerdata='banerdata'></banpage>
      <strictpage :strictdata='strictdata'></strictpage> 
      <recommendpage :recommendate='recommendate'></recommendpage>
      <brandlistpagr :brandlist1data='brandlist1data'></brandlistpagr>
      <watchList :brandlist2data='brandlist2data'></watchList>
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
import watchList from '@/components/bace/brandlist/watch'
import powdered from '@/components/bace/brandlist/powdered'
import productList from '@/components/page/productList/'
export default {
  name: 'homepage',
  data () {
    return {
      alldata: [],
      fontdata: [], 
      navlistdata: [],
      bannerdata: [],
      banerdata: [],
      strictdata: {
        Channel: '',
        Records0: '',
        Records1: '',
        Records2: ''
      },
      recommendate: {
          Channel: ''
      },
      brandlist1data: {
        title: '',
        content: ''
      },
      brandlist2data: {
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
    watchList,
    powdered,
    productList
  },
  created () {
    this.getallData()
    this.getfootData()
  },
  methods: {
    getallData: function () {
      this.$http.get('/api/alldata').then(function (response) {
        let data = response.body
        this.alldata = data.data[0].Records
        this.navlistdata = data.data[1].Records
        this.bannerdata = data.data[2].Records
        this.banerdata = data.data[3].Records
        this.strictdata = data.data[4]
        this.strictdata.Channel =  this.strictdata.Channel.Name
        this.strictdata.Records0 = this.strictdata.Records[0].PictureWebp
        this.strictdata.Records1 = this.strictdata.Records[1].PictureWebp
        this.strictdata.Records2 = this.strictdata.Records[2].PictureWebp
        this.recommendate = data.data[5]
        this.recommendate.Channel = this.recommendate.Channel.Name

        this.brandlist1data = data.data[6]
        this.brandlist1data.title = this.brandlist1data.Records[0].
        PictureWebp
        this.brandlist1data.content = data.data[7].Records

        this.brandlist2data = data.data[8]
        this.brandlist2data.title = this.brandlist2data.Records[0].PictureWebp
        this.brandlist2data.content = data.data[9].Records
        this.brandlist3data = data.data[10]
        this.brandlist3data.title = this.brandlist3data.Records[0].PictureWebp
        this.brandlist3data.content = data.data[11].Records
      })
    },
    getfootData: function () {
      this.$http.get('/api/foonterdata').then(function (response) {
        let data = response.body
        this.fontdata = data.data
      })  
    }  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

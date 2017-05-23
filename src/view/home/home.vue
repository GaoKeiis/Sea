<template>
  <div class="home">
    <div class="main">
      <headerpage></headerpage>
      <navpage :listData='listData'></navpage>
      <router-view></router-view>
    </div> 
    <footerList></footerList>
  </div>
</template>

<script>
import headerpage from '@/components/page/headerpage/'
import navpage from '@/components/page/navpage/'
import footerList from '@/components/page/fooderList/'

export default {
  name: 'home',
  data () {
    return {
      listData: []
    }
  },
  components: {
    headerpage,
    navpage,
    footerList
  },
  created () {
    this.getData()
  },
  methods: {
    getData: function () {
      this.$http.get('/api/data').then(function (response) {
        this.listData = response.data.data
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

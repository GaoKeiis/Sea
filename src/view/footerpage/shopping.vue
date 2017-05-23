<template>
<div class="home">
	<div class="main">
    <shoppingpage :shoppingData='shoppingData'></shoppingpage> 
	</div>
  <footerList></footerList>
</div>
</template>
<script>
import footerList from '@/components/page/fooderList/index'
import shoppingpage from '@/view/children/shoppingpage'
export default {
	name: 'shopping',
	data () {
    return {
      shoppingData: []
    }
  },
  components: {
    footerList,
    shoppingpage
  },
  created () {
    this.getshoppingData()
  },
  methods: {
    getshoppingData: function () {
      this.$http.get('/api/shopping').then(function (response) {
        this.shoppingData = response.body.extra.Suggest
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
<div class="branch">
  <brandpage v-for='item in brandData' :brandData='item'></brandpage>
</div>
</template>

<script>
import brandpage from '@/view/children/classification/children/brandpage'
export default {
	name: 'branch',
  data () {
    return {
      brandData: []
    }
  },
  components: {
    brandpage
  },
  created () {
    this.getbrandData()
  },
  methods: {
    getbrandData: function () {
      this.$http.get('/api/brand').then(function (response) {
        this.brandData = response.data.data
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>

</style>

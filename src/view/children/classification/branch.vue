<template>
<div class="branch">
  <branchpage v-for='item in branchData' :branchData='item'></branchpage>
</div>
</template>

<script>
import branchpage from '@/view/children/classification/children/branchpage'
export default {
	name: 'branch',
  data () {
    return {
      branchData: []
    }
  },
  components: {
    branchpage
  },
  created () {
    this.getbranchData()
  },
  methods: {
    getbranchData: function () {
      this.$http.get('/api/classification').then(function (response) {
        this.branchData = response.data.data
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
</style>

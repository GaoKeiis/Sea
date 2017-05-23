<template>
  <div class="towpage">
    <towcontent :towcontentData='towcontentData'></towcontent>
  </div>
</template>

<script>
import towcontent from '@/view/children/towHomepage/towcontent'
export default {
  name: 'towpage',
  data () {
    return {
      towcontentData: {
        img: [],
        cont: []
      }
    }
  },
  components: {
    towcontent
  },
  created () {
    this.getcontData()
  },
  methods: {
    getcontData: function () {
      this.$http.get('/api/household').then(function (response) {
        this.towcontentData.cont = response.data.data
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

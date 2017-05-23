<template>
  <div class="indexTab">
    <towcontent :towcontentData='towcontentData'></towcontent>
  </div>
</template>

<script>
import towcontent from '@/view/children/towHomepage/towcontent'
export default {
  name: 'indexTab',
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
    this.gettitData()
    this.getcontData()
  },
  methods: {
    gettitData: function () {
      this.$http.get('/api/peishi').then(function (response) {
        this.towcontentData.img = response.data.data[0]
      })
    },
    getcontData: function () {
      this.$http.get('/api/peishicontent').then(function (response) {
        this.towcontentData.cont = response.data.data
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

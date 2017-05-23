<template>
<div class="home">
	<div class="main">
    <Logincomplete></Logincomplete>
	</div>
  <footerList></footerList>
</div>
</template>
<script>
import footerList from '@/components/page/fooderList/index'
import Logincomplete from '@/view/children/Logincomplete'
export default {
	name: 'shopping',
	data () {
    return {
      shoppingData: []
    }
  },
  components: {
    Logincomplete,
    footerList
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

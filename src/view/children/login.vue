<template>
<div class="home">
	<div class="main">
    <mypage></mypage> 
	</div>
</div>
</template>
<script>
import mypage from '@/view/children/mypage'
export default {
	name: 'login',
	data () {
    return {
    }
  },
  components: {
    mypage
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

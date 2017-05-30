<template>
  <div class="productList">
    <div class="replace">
      <img class="face" src="//m.haimi.com/static/images/web/default-avatar-square.png"> 
      <div class="f16">您的手机号码：+86 {{userName}}</div> 
      <a class="submit f16" href="/login">确认更换</a>
     </div>
  </div>
</template>

<script>
export default {
  name: 'replace',
  data () {
    return {
        userName:''
    }
  },
  created () {
    this.add()
  },
  methods: {
    add () {
      let uesr = JSON.parse(window.localStorage.getItem('userInfor'));
        this.userName = uesr.userName
    }
   } 
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='scss'>
.replace{
 margin: 20px auto;
  img{
    margin: 0 auto;
    width: 15%;
    display: block;
  }
  div{
    font-size: 14px;
    padding-left: 55px;
    padding-top: 10px;
  }
  a{
    background: #991f33;
    color: #fff;
    padding: 5px 0;
    display: block;
    text-align: center;
    margin-top: 10px;
  }
}
</style>

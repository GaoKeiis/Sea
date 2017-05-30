<template>
  <div class="RedDiscount">
    <ul>
      <li v-for='item in ReapageData'>
        <router-link :to="item.Link" active-class='on'>
        {{item.Title}}
        </router-link>
       
      </li>
    </ul>
    <div class="bonus-text"> 
      <h5 class="f14">提醒</h5> 
      <p>
        <span class="c_666">1、红包/优惠券每个订单</span>只可使用一个</p> 
        <p><span class="c_666">2、红包/优惠券金额大于订单应付金额时，</span>差额不予退回。</p> 
        <p><span class="c_666">3、使用红包/优惠券的订单发生退款，红包/优惠券不予退回</span>（特殊未指定的除外）</p> 
    </div>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'RedDiscount',
  data () {
    return {
      ReapageData: [
        {
          Title:"可用",
          Link:"/RedDiscount/available"
        },
        {
          Title:"已使用",
          Link:"/RedDiscount/Oneisfor"
        },
        {
          Title:"已过期",
          Link:"/RedDiscount/Expired"
        } 
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.bonus-text {
    padding: 15px;
    background: #fff;
    color: #6a6a6a;
}
.RedDiscount{
  background: #fff;
  ul{
  padding: 10px 0;
  display: flex;
  white-space: nowrap;
  text-align: center;
  li{
    flex: 1;
    position: relative;
    } 
  }
}
.on:after{
  content: '';
  position: absolute;
  bottom: -38%;
  left: 14%;
  display: block;
  width: 65%;
  height: 3px;
  background: #000;
}
</style>

<template>
  <div class="order">
    <ul>
      <li v-for='item in orderData'>
        <router-link :to="item.Link" active-class='on'>
        {{item.Title}}
        </router-link>
       
      </li>
    </ul>
     <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'order',
  data () {
    return {
      orderData: [
        {
          Title:"全部",
          Link:"/order/all"
        },
        {
          Title:"代付款",
          Link:"/order/Payment"
        },
        {
          Title:"代发货",
          Link:"/order/Delivery"
        },
        {
          Title:"代收货",
          Link:"/order/Collecting"
        }, 
        {
          Title:"退款",
          Link:"/order/refund"
        } 
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.order{
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

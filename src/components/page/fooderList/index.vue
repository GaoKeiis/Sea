<template>
  <div class="footerder">
    <router-link v-for='item in runData' :to="item.Link" active-class='colo' class="footlist">
      <dl>
        <dt><i :class="item.icon"></i></dt>
        <dd>{{item.txt}}</dd>
      </dl>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'footerList',
  data () {
    return {
      runData: [
        {
          icon: 'iconfont icon-liwu',
          txt: '首页',
          Link: '/home'
        },
        {
          icon: 'iconfont icon-yingyongchengxu',
          txt: '分类',
          Link: '/print'
        },
        {
          icon: 'iconfont icon-wodehongbao',
          txt: '购物车',
          Link: '/shopping'
        },
        {
          icon: 'iconfont icon-yewu-xianxing',
          txt: '我的',
          Link: '/my'
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less'>
.footerder{
  display: flex;
  text-align: center;
  background: #fff;
  border-top: 1px solid #eee;
  .footlist{
    padding: 5px 0;
    flex: 1;
    color: #999;
    dl{
      dt i{
        font-size: 20px;
      }
      dd{
        font-size: 14px;
      }
    }
  }
}
.colo{
  dl{
    dt i{
      color: #801a2a;
    }
    dd{
      color: #801a2a;
    }
  } 
}

</style>

<template>
<div class="Logincomplete">
  <div class='m-title'>
    <div class="m-left">
        <input type="file">
        <img src="//m.haimi.com/static/images/web/default-avatar-square.png?imageView2/1/w/100/h/100">
    </div>
    <div class="m-name">
      <span ref='cu2r'>海蜜_cu2rqr</span>
      <i class='iconfont icon-bianjishuru' @click='Check'></i>
    </div>
     <div class="img-div" ref='disImg' @click='Idiv'>
      <div class="Popup"> 
        <h3 class="f18">请输入昵称</h3> 
        <input type="text" class="fl f14" placeholder="请出入要修改的内容" ref='nameInp'> 
        <p>
          <span  @click='cancel'>取消</span><span @click='Determine'>确定</span> 
        </p>
      </div>
    </div>
  </div>
  <div class="user-menu"> 
    <ul> 
      <li class="line">
        <router-link to="/order" class="f14 m-sun" >
          我的订单
          <span class="f12">
            查看全部订单
            <i class="iconfont icon-gengduo1"></i>
          </span>
        </router-link>
      </li>
      <li class="column cle">
        <router-link v-for='item in orderData' :to="item.Link" active-class='on'>
         <i :class="item.icon"></i>
          {{item.Title}}
        </router-link>
      </li> 
      <li class="line">
        <a class="f14" href="/Collection">
          <i class="iconfont icon-xiangbao f20 colHui"></i>
          收藏宝贝
        </a>
      </li> 
      <li class="line">
        <a class="f14" href="/RedDiscount">
          <i class="iconfont icon-zhangdan-xianxing f20 colHui"></i>
          红包优惠券
        </a>
      </li> 
      <li class="line">
        <a class="f14" href="/footprint">
          <i class="iconfont icon-dingwei f20 colHui"></i>
          足迹
        </a>
      </li> 
      <li class="line">
        <a href="" class="f14">
          <i class="iconfont icon-jifen-xianxing f20 colHui"></i>
          积分商城
        </a>
      </li> 
      <li class="line">
        <a class="f14" href="">
          <i class="iconfont icon-ditu f20 colHui"></i>
          收货地址
        </a>
      </li> 
      <li class="line">
        <a class="f14" href="/replace">
          <i class="iconfont icon-iconfontshouji f20 colHui"></i>
          绑定手机
          <span class="fr colHui">{{userName}}</span>
        </a>
      </li> 
      <li class="line">
      <a class="f14" href="">
        <i class="iconfont icon-yinle f20 colHui"></i>
        海蜜客服
      </a>
      </li>
    </ul> 
  </div>
  <div class="Sign f16" @click='add'>退出登录</div>
</div>
</template>
<script>
export default {
	name: 'shopping',
	data () {
    return {
      orderData: [
        {
          Title:"全部",
          Link:"/order/all",
          icon:'iconfont icon-wodedingdan'
        },
        {
          Title:"代付款",
          Link:"/order/Payment",
          icon:"iconfont icon-qiyeshenfenrz"
        },
        {
          Title:"代发货",
          Link:"/order/Delivery",
          icon:"iconfont icon-yunshuzhongwuliu-xianxing"
        },
        {
          Title:"代收货",
          Link:"/order/Collecting",
          icon:"iconfont icon-jilu"
        }, 
        {
          Title:"退款",
          Link:"/order/refund",
          icon:"iconfont icon-hongbao"
        } 
      ],
      userName: ''
    }
  },
  components: {
    
  },
  mounted () {
    this.Check()
    this.cancel()
    this.Determine()
    this.addsu()
  },
  methods: {
    add () {
        window.localStorage.removeItem('userInfor');
        this.$router.push({name:'login'})       
    },
    addsu () {
      let uesr = JSON.parse(window.localStorage.getItem('userInfor'));
        this.userName = uesr.userName
    },
    //点击蒙层
    Idiv () {
       this.$refs.disImg.style.display = 'none'
    },
    // 点击修改
    Check () {
      this.$refs.disImg.style.display = 'block'
    },
    // 点击取消
    cancel () {
      this.$refs.disImg.style.display = 'none'
    },
    // 点击确定
    Determine () {
      if (this.$refs.nameInp.value!='') {
          this.$refs.cu2r.innerHTML = this.$refs.nameInp.value
          this.$refs.disImg.style.display = 'none'
          this.$refs.nameInp.value = ""
      }
      
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.m-title{
  padding: 3%;
  display: flex;
  background: #fff;
  .m-left{
    position: relative;
    width: 17%;
    img{
        width: 100%;
        display: block;
    }
    input{
      position: absolute;
      z-index: 100;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0
    }
  }
  .m-name{
    padding-top: 5%;
    padding-left: 3%; 
    span{
      padding-right: 5px; 
      white-space: nowrap;
     font-size: 14px;
    }
    i{
      color: #ccc;
    }
  }
}
.user-menu{
  background: #fff;
  margin-top: 3%;
  padding:0 3%;
  .line{
    position: relative;
    padding: 10px 0;
    border-bottom: 1px solid #eee;
  }
  .m-sun{
    span{
      position: absolute;
      right: 0;
    }
  }
  .column{
    display: flex;
    a{
      text-align: center;
      padding: 10px 0;
      flex:1;
      i{
        display: block;
      }
    }
  }
}
.Sign{
    width: 100%;
    margin-top: 3%; 
    padding: 10px 0;
    background: #fff;
    text-align: center;
}
.colHui{
  color: #999;
}
.fr {
    float: right;
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
.img-div{
    display: none;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.2);
    z-index: 100;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    .Popup{
      background: #fff;
      width: 70%;
      margin-top: 50%;
      margin-left: 15%;
      padding-top: 20px;
      input{
        padding: 10px;
        width: 85%;
      }
      p{
        display: flex;
        padding: 10px 0;
        span{
          flex: 1;
        }
      }
    }
  }
</style>

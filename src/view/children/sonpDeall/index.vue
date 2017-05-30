<template>
  <div class="detail">
      <div class="main">
        <swipepage :alldata="alldata"></swipepage>
        <div class="detail-tit">
        <div class="detail-tit-tit">
          <h2>{{title}}</h2>
          <p>
            <span>￥{{price}}</span>
            <span>月售{{count}}件</span>
          </p>
        </div>
        <div class="detail-tit-con">{{data.TaxText}}</div>
        </div>
        <div class="list">
          <ul>
            <li v-for="item in list">
              <i class="iconfont icon-zhengquewancheng-yuankuang"></i>
              {{item}}
            </li>
          </ul>
        </div>
        <div class="selec" v-for="item in selec">
          <span>请选择:{{item.AttrName}}</span>
          <span><i class="iconfont icon-gengduo1"></i></span>
        </div>
        <div class="comment">
          <div class="comment-box1">
            <p>
              <span>宝贝评分</span>
              <i class="iconfont icon-shoucang"></i>
              <i class="iconfont icon-shoucang"></i>
              <i class="iconfont icon-shoucang"></i>
              <i class="iconfont icon-shoucang"></i>
              <i class="iconfont icon-shoucang"></i>
              <b>5.0分</b>
            </p>
          </div>
          <div class="comment-box2" v-for='items in Reviews'>
            <div class="comment-box2-top">
              <div class="comment-box2-f1">
                <img :src="items.Buyer.Avatar">
              </div>
              <div class="comment-box2-f2">{{items.Buyer.NickName}}</div>
              <div class="comment-box2-f3">{{items.CreateTime}}</div>
            </div>
            <p class="comment-box2-cen">{{items.BuyerNote}}</p>
            <div class="comment-box2-bot">
                <ul>
                  <li v-for='(itema,index) in swipe'>
                    <img :src="itema" @click='look(index)'>
                  </li>
                </ul>
                <div class="img-div" :style="{display:display}"  @click='Dispnone'>
                  <swipepage :alldata="swipe"></swipepage>
                </div>
            </div>
          </div>
          <div class="allCom">
            <a>全部评价（29）</a>
          </div>
        </div>
        <div v-html='data.Descriptioin' class="Descriptioin">
      </div>
      </div>
      <footer class="fonts">
        <div><i class="iconfont icon-shouye-xianxing"></i>
            <i class="iconfont icon-shoucang-xianxing"></i>
            <i class="iconfont icon-xihuan-xianxing"></i></div>
        <div>
          <span class="f14" @click="add">加入购物车</span>
        </div>
        <div>
          <span class="f14" @click="add">立即购买</span>
        </div>
      </footer>
      <shopcar :shopData = 'shopData' ref="popup"></shopcar>
  </div>
</template>

<script>
import '@/static/css/swiper.css'
import swiper from '@/static/js/swiper.js'  
import swipepage from '@/components/page/swipepage/'
import shopcar from '@/components/bace/popup/shopcar'
export default {
  name: 'detail',
  data () {
    return {
      alldata: [],
      data: '',
      Reviews: [],
      title: '',
      content: '',
      list: [],
      count: '',
      price: '',
      selec: [],
      name: '',
      proList: [],
      swipe: [],
      'display' : 'none',
      shopData: {
        shopPicture: [],
        productPrice:[],
        PropertySku:[]
      }
    }
  },
  components: {
    swipepage,
    shopcar
  },
  created () {
    this.getDetailData()
    this.look()
    this.Dispnone()
  },
  methods: {
    getDetailData () {
      var ProductID = this.$route.params.ProductID;
      this.$http.jsonp('http://m.haimi.com/api/product/detail-cdn?ProductID='+ProductID+'&platform=WAP',{
        jsonp: '_callback'
      }).then(function(res){
        this.data = res.data.data
        this.Reviews =  this.data.TopReviews
        this.alldata = JSON.parse(res.data.data.ProductPictures);
        this.title = res.data.data.Subject;
        this.count = res.data.data.MonthSalesNum;
        this.content = res.data.data.Descriptioin;
        this.list = res.data.data.Promises;
        this.price = res.data.data.FinalPrice;
        this.selec = res.data.data.AttrInfoArray;
        this.proList = res.data.data.Recommend;
        this.name = res.data.data.BrandName;
        this.swipe =  this.data.PicturesThumbWebp.split(",")
        this.shopData.shopPicture = this.alldata[0].picture;
        this.shopData.productPrice = this.data.FinalAmount; //产品价格
        this.shopData.PropertySku = this.data.PropertySku; //商品详情
      })
    },
    look (index) {
      if (this.display == "none") {
          this.display = "block"
      }
    },
     Dispnone () {
        if (this.display == "none") {
            this.display = "block"
        }else{
           this.display = "none";
        }
     },
     add () {
        this.$refs.popup.$refs.buyShopCar.style.display="block" 
        this.$refs.popup.$refs.buyShop.style.display="block" 
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.comment {
  margin-top: 10px;
  margin-bottom: 10px;
  border-bottom: 5px solid #eee;
  background: #eee;
  .comment-box1 {
    height: 40px;
    line-height: 40px;
    background: #fff;
    padding-left: 10px;
    border-bottom: 1px solid #ccc;
    i {
      color: red;
      font-size: 14px;
    }
  }
  .comment-box2 {
    background: #fff;
    padding-bottom: 15px;
    border-bottom: 1px solid #ccc;
    .comment-box2-top {
      position: relative;
      height: 40px;
      line-height: 40px;
      div {
        display: inline-block;
        &.comment-box2-f1 {
          padding-left: 5px;
          width: 19px;
          img {
            width: 100%;
          }
        }
        &.comment-box2-f2 {
          padding-left: 5px;
        }
        &.comment-box2-f3 {
          position: absolute;
          right: 10px;
          top: 0;
        }
      }
    }
    .comment-box2-cen {
      padding: 10px 0;
      padding-left: 10px;
    }
  }
  .allCom {
    height: 40px;
    line-height: 40px;
    background: #fff;
    text-align: center;
  }
}
.detail {
   background: #eee;
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   display: flex;
   flex-direction: column;
}
.detail-tit {
  padding-top: 10px;
  background: #fff;
  .detail-tit-tit {
    padding-left: 10px;
    padding-right: 10px;
    border-bottom: 1px solid #ccc;
    h2 {
        font-weight: normal;
        font-size: 14px;
      }
    p {
      padding-top: 10px;
      padding-bottom: 10px;
      position: relative;
      span {
         height: 30px;
         line-height: 30px;
         &:nth-of-type(1){
          color: #991f33;
          font-size: 14px;
        }
        &:nth-of-type(2){
          color: #ccc;
          position: absolute;
          right: 10px;
        }
      }
    }
  }
  .detail-tit-con {
    color: #999;
    height: 30px;
    line-height: 30px;
    padding-left: 10px;
  }
}
.list {
  margin-top: 10px;
  background: #fff;
  padding-left: 10px;
  padding-right: 20px;
  ul {

    li {
     display: inline-block;
     padding-left: 5px;
     padding-right: 5px;
     height: 30px;
     line-height: 30px;
     i {
      font-size: 12px;
      color: #991f33;
     }
    }
  }
}
.selec {
  margin-top: 10px;
  background: #fff;
  height: 30px;
  line-height: 30px;
  position: relative;
  span {
    &:nth-of-type(1){
      padding-left: 10px;
    }
    &:nth-of-type(2){
       position: absolute;
       right: 10px;
       top: 0;
       i {
         font-size: 12px;
         color: #ccc;
       }
    }
  }
}
.Descriptioin{
  p{
    img{
      width: 100%;
    }
  }
}
.fonts{
  display: flex;
  padding: 10px 0;
  align-items: center;
  div{
      flex: 1;
    i{
      font-size: 22px;
      color: #ccc;
    }
    span{
      white-space: nowrap;
    }
    &:nth-child(3){
      span{
        padding-left: 0;
        background: #801a2a;
        color: #fff;
        padding: 10px;
      }
    }
  }
}
.comment-box2-bot{
  ul{
    display: flex;
    flex-wrap: wrap;
    li{
      width: 20%;
      img{
        width: 100%;
      }
    }
  }
}
.img-div{
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.2);
    z-index: 100;
    padding-top: 50%;
  }
</style>

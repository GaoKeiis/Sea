<template>
  <div class="available">
  	<div v-for="(item,index) in availableData" class="available-all">
  	  <dl>
    		<dt>
    			<p>
    			  ￥<span>{{item.Amount}}</span>
    			</p>
    			<b>满{{item.LimitAmout}}使用</b>
    		</dt>
    		<dd>
    			<h6>{{item.Title}}</h6>
    			<time>2017.05.23-2017.05.30</time>
    		</dd>
    	</dl>
    	<div @click="displa(index)">使用说明</div>
    	<span class="disp" ref='disp'>该优惠券仅适用于全平台指定商品，特殊活动除外</span>
    </div>

  </div>
</template>

<script>
export default {
  name: 'available',
   data () {
    return {
    	availableData: [],
      'display' : 'none',
    }
  },
    created () {
    this.gettitData()
   
  },
  mounted () {
    
  },
  methods: {
    gettitData: function () {
      this.$http.jsonp('http://m.haimi.com/api/bonus/all-list?page=1&pageSize=20&IsActivated=Y&current=Y&IsUsed=N&platform=WAP',{
        jsonp: '_callback'
      }).then(function(res){
      	this.availableData = res.body.data
      })
    },
    displa (index) {
      console.log()
    	if (this.$refs.disp[index].style.display == "none") {
          this.$refs.disp[index].style.display = "block"
      }else{
       this.$refs.disp[index].style.display = "none"
      }
    	
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.available-all{
  padding: 4%;
  dl{
	display: flex;
	padding-bottom: 3%;
	dt{
	    width: 50%;
		color: #991f33;
		p{
		  span{
		  font-size: 16px;
		  font-weight: bold;
		  }
		}
		b{
		  font-weight: normal;
		}
	 }
	dd{
		time{
		  white-space: nowrap;
		  color: #999;
		}
	}
  }
 div{
  	color: #999;
  }
  disp{
    display:'none';
  }
}
</style>

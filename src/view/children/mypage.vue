<template>
  <div class="mypage">
    <div class="tips">请输入手机号码验证码直接登录</div>
    <div class="sign">
      <div class="box">
        <div class="cle">
          <span class="fl f14 c_666">手机号：</span>
            <input type="number" @focus="fun" @blur="blur" v-model.trim='Cellphone' ref='numb'>
            <span class="noe" ref='close' @click='clo'>清除</span>
          </div>
          <div class="cle">
            <span class="sp1">验证码：</span>
            <input type="number" v-model='verification'>
            <span class="sp2" @click='yanclick' ref='span'>{{tishi}}</span>
          </div>
          <div class="loging" @click="btn">
            <a>登录</a>
          </div>
          <div id="pop" class="hide">
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'mypage',
  data () {
    return {
      mybind: '',
      Cellphone: '',
      verification: '',
      tishi:'发送验证码',
      panduan:false
    }
  },
  mounted () {
    this.btn(),
    this.fun(),
    this.blur()
  },
  methods: {
    fun:function() {
        this.$refs.close.className='close'
    },
    blur:function() {
      if(this.Cellphone == ""){
        this.$refs.close.className='noe'
      }
    },
    clo:function(){
      this.$refs.numb.value = "";
      this.$refs.close.className='noe'
    },
    btn:function() {
      var reg=/^1[34578]\d{9}$/;
      if(this.Cellphone != "" && reg.test(this.Cellphone) && this.verification != ""){
        let userData = {
            userName : this.Cellphone,
            userPhone: this.Cellphone,
            userPhoto: this.verification
        }
        var url = this.$route.query.to;
        if(url){
        window.localStorage.setItem("userInfor",JSON.stringify(userData));
        this.$router.push({name:url})
      }else{
        this.$router.push({name:'my'})
      }

        
      }
    },
    yanclick (){
      if (this.panduan) {return false}
      var sui = '';
      var that = this;
      var num = 3;
      for(var i=0;i<6;i++){
        sui += parseInt(Math.floor(Math.random()*10));
      }
      this.verification = sui;
      that.tishi = num;
      var time = setInterval(function(){
        num--;
        that.tishi = num;
        if (num ==0) {
          that.tishi = '重新获取'
          clearInterval(time)
          that.panduan = false;
          that.$refs.span.className = 'sp2'
        }
      },1000)
      that.panduan = true;
      this.$refs.span.className = 'sp3'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang='less'>
.mypage{
  padding: 10px 0;
  background: #fff;
}
.tips {
  background: #fff9f3;
  text-align: center;
  color: #991f33;
}
.noe{
  display: none;
}
.close {
    display: block;
    height: 15px;
    font-size: 0;
    line-height: 0;
    overflow: hidden;
    width: 15px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjdCQzk4NDhBODYwNDExRTZCRDlERDVENTczQjIwN0Y2IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdCQzk4NDhCODYwNDExRTZCRDlERDVENTczQjIwN0Y2Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6N0JDOTg0ODg4NjA0MTFFNkJEOURENUQ1NzNCMjA3RjYiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6N0JDOTg0ODk4NjA0MTFFNkJEOURENUQ1NzNCMjA3RjYiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5HK54VAAACkUlEQVR42ryXTUhUURTHn4+wsLQgDZcp5sYwTSQykMaNpqbjokKsVaALWwSVuSlwVQq1CBIGol2CH6CBGZboSiQjUpGiUtsG08KvnEGC/J84Ty5P79d8Hfht3rtz/v+5975zz00LhUKOYRwB9SAASkAeOAr+gTXwE8yBSTAGNk2SHjAYcwrcB80gQzLmBHMOtLF4H+gGK6rkruIdifWAL+CmQlw2W63gK3gEDtkaoH/9AdwznCVZpINOMAPyTQ2UgWlw2klclMhy+g0UgLcgx0l85PIGLZAZoDUeTpK4F5R7QNwTooGuBE+7LErBQ7+BQnDbSV3c8TalZ6BTs9ujoBd8MkgeAc/BR83X0eEZyALXNElfgnZQCd4pxm2BRnALNGlytoDDLpdXXZEp542zxYnfS8SDwruLBsWqlgxUGUwrGRgRTAR9JvzPgjxrugiQgTOGG6daYsIvTkvQz+usi2KXTzUnDhMBn/iAofj/wufykerEYWI2RnGKTDKQFsN3TF9Dse9Zq6X4biFatfxNhKd+1vf8CpiwzLXhcidjK+7VggbwGhwUaoCNiWUyMG8h3iSIXwaDbGIkRhMLLh+Ruoiy+LggPiSsec0+JkzyTpKBUf53qnihEHckJm5oclLfOEYG1rlwqOIsOM5nxpBit9fwnsg2qLCvwB/vBHwMritOxArw26JOhDVjtrnh3T2Ov4FnKewHnnrtutgRPQCLKRD/zN3XnpbMO2rDSRSn3Ff5q9q3K14Cl5Jk4hdvzCXdvYDargsJXo45WU7ZzegH3/OegL9xCG/z/fC87I7oavq7u6CIu5uIhfAmF68ibnij8dyOv/PllNr2Ol5HumqdBMd4zCofarTDp8Ab0+v5jgADABSilJXiVZaAAAAAAElFTkSuQmCC) 100% no-repeat;
    background-size: 100%;
    float: right;
}
.cle {
    margin:40px 3% 0 3%;
    background: #fff;
    border-bottom: 1px solid #ccc;
    input{
      height:100%;
    }
    .sp2{
      color: #991f33;
    }
    .sp3{
      color:#999;
    }
}
.loging {
    text-align: center;
    padding: 10px 0;
    background: #991f33;
    margin-top: 8px;
    a{
      color: #fff;
      font-size: 14px;
    }
}
</style>

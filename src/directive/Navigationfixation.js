export default {
  inserted: function (el, binding, vnode) {
    var offsetTop = el.offsetTop;
    el.parentNode.addEventListener("scroll", function(){
      var scrollTop = el.parentNode.scrollTop;
      if(scrollTop>=offsetTop){
        el.style.position = "fixed";
        el.style.top = 0;
        el.style.zIndex = 100;
        el.style.background = "#fff";
      }else{
        el.style.position = "relative";
      }
    },false)
  }
}
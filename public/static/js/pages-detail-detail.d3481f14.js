(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail"],{"3e36":function(t,e,i){"use strict";var n,a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"index"},[i("v-uni-swiper",{style:{height:t.screenHeight+"px"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.swpierChange.apply(void 0,arguments)}}},t._l(t.data,(function(e,n){return i("v-uni-swiper-item",{key:e,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.preImg(n)}}},[i("v-uni-image",{attrs:{src:e,mode:"widthFix"}})],1)})),1)],1)},o=[];i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}))},"8a81":function(t,e,i){"use strict";i.r(e);var n=i("a0ef"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},a0ef:function(t,e,i){"use strict";(function(t){i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{imgShow:!1,index:0,showBtn:!1,screenHeight:0,imgLength:0,providerList:[],data:[],detailDec:""}},onLoad:function(e){var i=this;this.screenHeight=uni.getSystemInfoSync().windowHeight,this.detailDec=e.data;var n=JSON.parse(decodeURIComponent(e.data));this.imgLength=n.img_num,this.data.push(n.img_src),this.getData(n.id),uni.setNavigationBarTitle({title:"1/"+this.imgLength}),uni.getProvider({service:"share",success:function(t){for(var e=[],n=0;n<t.provider.length;n++)switch(t.provider[n]){case"weixin":e.push({name:"分享到微信好友",id:"weixin"}),e.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":e.push({name:"分享到QQ",id:"qq"});break;default:break}i.providerList=e},fail:function(e){t("log","获取登录通道失败",e," at pages/detail/detail.vue:80")}})},onShareAppMessage:function(){return{title:"欢迎使用uni-app看图模板",path:"/pages/detail/detail?data="+this.detailDec,imageUrl:this.data[this.index]}},onNavigationBarButtonTap:function(t){0===t.index&&this.collect()},methods:{download:function(){uni.downloadFile({url:this.data[this.index],success:function(t){uni.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){uni.showToast({icon:"none",title:"已保存到手机相册"})},fail:function(){uni.showToast({icon:"none",title:"保存到手机相册失败"})}})},fail:function(t){uni.showModal({content:"下载失败，"+t.errMsg,showCancel:!1})}})},collect:function(){uni.showToast({icon:"none",title:"点击收藏按钮"})},swpierChange:function(t){this.index=t.detail.current,uni.setNavigationBarTitle({title:t.detail.current+1+"/"+this.imgLength})},preImg:function(t){var e=this;this.imgShow||(this.imgShow=!0,setTimeout((function(){e.imgShow=!1}),1e3),setTimeout((function(){uni.previewImage({current:e.data[t],urls:e.data})}),150))},getData:function(t){var e=this;uni.request({url:this.$serverUrl+"/api/picture/detail.php?id="+t,success:function(t){0===t.data.code?e.data=e.data.concat(t.data.data):uni.showModal({content:"请求失败，失败原因："+t.data.msg,showCancel:!1})},fail:function(){uni.showModal({content:"请求失败，请重试!",showCancel:!1})}})}}};e.default=n}).call(this,i("0de9")["log"])},cd18:function(t,e,i){"use strict";i.r(e);var n=i("3e36"),a=i("8a81");for(var o in a)"default"!==o&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("f537");var s,c=i("f0c5"),r=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"3b999167",null,!1,n["a"],s);e["default"]=r.exports},dba6:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"uni-page-body[data-v-3b999167]{background-color:#000;height:100%}uni-swiper[data-v-3b999167]{-webkit-box-flex:1;-webkit-flex:1;flex:1;width:%?750?%;background-color:#000;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}uni-swiper-item[data-v-3b999167]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}uni-image[data-v-3b999167]{width:%?750?%;height:%?1125?%}body.?%PAGE?%[data-v-3b999167]{background-color:#000}",""]),t.exports=e},f0ab:function(t,e,i){var n=i("dba6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("119cc6a2",n,!0,{sourceMap:!1,shadowMode:!1})},f537:function(t,e,i){"use strict";var n=i("f0ab"),a=i.n(n);a.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-new-new"],{"5fda":function(e,t,i){"use strict";(function(e){i("99af"),i("d81d"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{refreshing:!1,providerList:[],list:[],fetchPageNum:1}},onLoad:function(){var t=this;this.getData(),uni.getProvider({service:"share",success:function(e){for(var i=[],n=0;n<e.provider.length;n++)switch(e.provider[n]){case"weixin":i.push({name:"分享到微信好友",id:"weixin"}),i.push({name:"分享到微信朋友圈",id:"weixin",type:"WXSenceTimeline"});break;case"qq":i.push({name:"分享到QQ",id:"qq"});break;default:break}t.providerList=i},fail:function(t){e("log","获取分享通道失败",t," at pages/new/new.vue:61")}})},onReachBottom:function(){e("log","滑动到页面底部"," at pages/new/new.vue:66"),this.getData()},onPullDownRefresh:function(){e("log","下拉刷新"," at pages/new/new.vue:70"),this.refreshing=!0,this.getData()},methods:{getData:function(){var t=this;uni.request({url:this.$serverUrl+"/api/picture/posts.php?page="+(this.refreshing?1:this.fetchPageNum)+"&per_page=5",success:function(i){if(e("log","data",i," at pages/new/new.vue:80"),200!==i.statusCode)e("log","失败!"," at pages/new/new.vue:82");else{if(t.refreshing&&i.data[0].id===t.list[0].id)return uni.showToast({title:"已经最新",icon:"none"}),t.refreshing=!1,void uni.stopPullDownRefresh();t.refreshing?(t.refreshing=!1,uni.stopPullDownRefresh(),t.list=i.data,t.fetchPageNum=2):(t.list=t.list.concat(i.data),t.fetchPageNum+=1)}}})},goDetail:function(e){uni.navigateTo({url:"../detail/detail?data="+encodeURIComponent(JSON.stringify(e))})},share:function(t){var i=this;if(0!==this.providerList.length){var n=this.providerList.map((function(e){return e.name}));uni.showActionSheet({itemList:n,success:function(n){uni.share({provider:i.providerList[n.tapIndex].id,scene:i.providerList[n.tapIndex].type&&"WXSenceTimeline"===i.providerList[n.tapIndex].type?"WXSenceTimeline":"WXSceneSession",type:0,title:"uni-app模版",summary:t.title,imageUrl:t.img_src,href:"https://uniapp.dcloud.io",success:function(t){e("log","success:"+JSON.stringify(t)," at pages/new/new.vue:135")},fail:function(e){uni.showModal({content:e.errMsg,showCancel:!1})}})}})}else uni.showModal({title:"当前环境无分享渠道!",showCancel:!1})}}};t.default=n}).call(this,i("0de9")["log"])},"8d25":function(e,t,i){"use strict";i.r(t);var n=i("a949"),s=i("e262");for(var a in s)"default"!==a&&function(e){i.d(t,e,(function(){return s[e]}))}(a);var r,o=i("f0c5"),u=Object(o["a"])(s["default"],n["b"],n["c"],!1,null,"db5f48de",null,!1,n["a"],r);t["default"]=u.exports},a949:function(e,t,i){"use strict";var n,s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"index"},[e._l(e.list,(function(t){return[i("v-uni-view",{key:t.img_src+"_0",staticClass:"card",on:{click:function(i){arguments[0]=i=e.$handleEvent(i),e.goDetail(t)}}},[i("v-uni-image",{staticClass:"card-img",attrs:{src:t.img_src,mode:"aspectFill"}}),i("v-uni-text",{staticClass:"card-num-view"},[e._v(e._s(t.img_num)+"P")]),i("v-uni-view",{staticClass:"card-bottm row"},[i("v-uni-view",{staticClass:"car-title-view row"},[i("v-uni-text",{staticClass:"card-title"},[e._v(e._s(t.title))])],1),i("v-uni-view",{staticClass:"card-share-view",on:{click:function(i){i.stopPropagation(),arguments[0]=i=e.$handleEvent(i),e.share(t)}}})],1)],1)]})),i("v-uni-text",{staticClass:"loadMore"},[e._v("加载中...")])],2)},a=[];i.d(t,"b",(function(){return s})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return n}))},e262:function(e,t,i){"use strict";i.r(t);var n=i("5fda"),s=i.n(n);for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);t["default"]=s.a}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["news_research"],{"0aa1":function(t,a,e){"use strict";var n=e("3136"),s=e.n(n);s.a},3136:function(t,a,e){},"365c":function(t,a){t.exports={HOST:"https://qmobile.hdfax.com/mtp/h5"}},9664:function(t,a,e){"use strict";e.r(a);var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"news_list_box base_width"},[t._l(t.list.slice((t.pageNum-1)*t.pageSize,t.pageNum*t.pageSize),(function(a,n){return e("div",{key:n,staticClass:"item"},[e("img",{staticClass:"img",attrs:{src:a.img,alt:""},on:{click:function(e){return t.$router.push({path:a.url})}}}),e("div",{staticClass:"content"},[e("h3",{staticClass:"overflow_1",on:{click:function(e){return t.$router.push({path:a.url})}}},[t._v(t._s(a.title))]),e("h5",{staticClass:"font-weight-normal"},[t._v(t._s(a.tips))]),e("p",{staticClass:"overflow_4"},[t._v(" "+t._s(a.content1)+" "),a.content2?e("br"):t._e(),t._v(" "+t._s(a.content2)+" "),a.content3?e("br"):t._e(),t._v(" "+t._s(a.content3)+" "),e("span",{on:{click:function(e){return t.$router.push({path:a.url})}}},[t._v("阅读详情>")])])])])})),e("Pagination",{attrs:{pageSize:t.pageSize,pageTotal:t.pageTotal,pageNum:t.pageNum},on:{pageCallBlack:t.pageCallBlack}})],2)},s=[],i=e("cdaa"),o=(e("365c"),e("062e")),c={name:"News_Research",components:{Pagination:o["a"]},data:function(){return{list:[],pageSize:6,pageTotal:null,pageNum:1}},created:function(){this.getNewsList()},mounted:function(){},methods:{getNewsList:function(){this.list=i["a"].research,this.pageTotal=i["a"].research.length},pageCallBlack:function(t){this.pageNum=t,console.log(this.pageNum)},goToDetail:function(t){this.$router.push({name:"News_Research_Detail",params:{id:t}})},getData:function(){var t=this;this.$axios.post("/v1/information/queryInfoDynamicsPublishedPage",{moduleType:"恒大研究院",pageNum:1,pageSize:100}).then((function(a){console.log(a.data.list),t.list=a.data.list,t.pageTotal=a.data.total})).catch((function(t){console.log(t)}))}}},l=c,u=(e("0aa1"),e("2877")),r=Object(u["a"])(l,n,s,!1,null,"5be8a465",null);a["default"]=r.exports}}]);
//# sourceMappingURL=news_research.23d45da8.js.map
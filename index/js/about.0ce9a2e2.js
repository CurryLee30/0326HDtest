(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"1a55":function(t,a,s){},3910:function(t,a,s){},3985:function(t,a,s){"use strict";var i=s("1a55"),o=s.n(i);o.a},"758f":function(t,a,s){"use strict";var i=s("ddd3"),o=s.n(i);o.a},"7ab1":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"About_Details"},[s("div",{staticClass:"about_details_main"},[s("div",{staticClass:"about_details_inner clear_fix"},[s("div",{staticClass:"about_details_inner_left"},[s("AboutDetailsLeft")],1),s("div",{staticClass:"about_details_inner_right"},[s("router-view")],1)])])])},o=[],e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"About_Details_left"},[s("ul",t._l(t.AboutList,(function(a,i){return s("li",{key:i,class:{active:t.selectNav==i},on:{click:function(s){return t.aboutNav(a,i)}}},[t._v(" "+t._s(a.name)+" ")])})),0)])},n=[],_=(s("4160"),s("c975"),s("9911"),s("159b"),{name:"About_Details_Left",data:function(){return{AboutList:[{name:"公司介绍",link:"/About_Details",index:0},{name:"集团介绍",link:"/About_Details/About_Group_Introduce",index:1},{name:"公司荣誉",link:"/About_Details/About_Company_Honour",index:2},{name:"企业文化",link:"/About_Details/About_Company_Culture",index:3},{name:"企业愿景",link:"/About_Details/About_Company_Wish",index:4}],selectNav:0}},created:function(){},mounted:function(){this.activeChange()},watch:{$route:function(t,a){this.activeChange()}},methods:{aboutNav:function(t){this.$router.push({path:t.link})},activeChange:function(){var t=this,a=this.$route.path;this.AboutList.forEach((function(s,i){a.indexOf(s.link)>-1&&(t.selectNav=s.index)}))}}}),c=_,l=(s("3985"),s("2877")),u=Object(l["a"])(c,e,n,!1,null,"bf532d8c",null),r=u.exports,d={name:"About_Details",data:function(){return{}},components:{AboutDetailsLeft:r},created:function(){}},v=d,b=(s("ed01"),Object(l["a"])(v,i,o,!1,null,"7d779b68",null));a["default"]=b.exports},"857a":function(t,a,s){var i=s("1d80"),o=/"/g;t.exports=function(t,a,s,e){var n=String(i(t)),_="<"+a;return""!==s&&(_+=" "+s+'="'+String(e).replace(o,"&quot;")+'"'),_+">"+n+"</"+a+">"}},"8ab4":function(t,a,s){"use strict";s.r(a);var i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about"},[s("div",{staticClass:"about_banner"}),s("div",{staticClass:"about_situation"},[s("div",{staticClass:"about_situation_inner"},[t._m(0),s("div",{staticClass:"about_situation_model"},[s("div",{staticClass:"about_situation_model_left"},[s("div",{staticClass:"about_m_left_icon n1"},[s("div",{staticClass:"about_model_one_inner"},[s("div",{staticClass:"about_inner_linear"},[t._m(1),s("div",{staticClass:"about_model_one_link"},[s("router-link",{attrs:{to:{path:"/About_Details"}}},[t._v("查看详细")])],1)])])]),s("div",{staticClass:"about_m_left_icon n2 active"},[s("div",{staticClass:"about_model_one_inner"},[s("div",{staticClass:"about_inner_linear"},[t._m(2),s("div",{staticClass:"about_model_one_link"},[s("router-link",{attrs:{to:{path:"/About_Details/About_Group_Introduce"}}},[t._v("查看详细")])],1)])])])]),s("div",{staticClass:"about_situation_model_center n3"},[s("div",{staticClass:"about_model_one_inner"},[s("div",{staticClass:"about_inner_linear"},[t._m(3),s("div",{staticClass:"about_model_one_link"},[s("router-link",{attrs:{to:{path:"/About_Details/About_Company_Honour"}}},[t._v("查看详细")])],1)])])]),s("div",{staticClass:"about_situation_model_left active"},[s("div",{staticClass:"about_m_left_icon n4"},[s("div",{staticClass:"about_model_one_inner"},[s("div",{staticClass:"about_inner_linear"},[t._m(4),s("div",{staticClass:"about_model_one_link"},[s("router-link",{attrs:{to:{path:"/About_Details/About_Company_Culture"}}},[t._v("查看详细")])],1)])])]),s("div",{staticClass:"about_m_left_icon n5 active"},[s("div",{staticClass:"about_model_one_inner"},[s("div",{staticClass:"about_inner_linear"},[t._m(5),s("div",{staticClass:"about_model_one_link"},[s("router-link",{attrs:{to:{path:"/About_Details/About_Company_Wish"}}},[t._v("查看详细")])],1)])])])])])])]),t._m(6),t._m(7)])},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("p",{staticClass:"about_situation_theme"},[s("span",[t._v("公司概况")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about_model_one_info"},[s("div",{staticClass:"about_model_one_theme"},[t._v("公司介绍")]),s("div",{staticClass:"about_model_one_title"},[t._v("恒大金融财富管理(深圳)有限公司—值得信赖的财富管理平台。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about_model_one_info"},[s("div",{staticClass:"about_model_one_theme"},[t._v("集团介绍")]),s("div",{staticClass:"about_model_one_title"},[t._v("恒大集团是以民生地产为基础，文化旅游、健康养生为两翼，新能源汽车为龙头的世界500强企业集团。")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about_model_one_info"},[s("div",{staticClass:"about_model_one_theme"},[t._v("公司荣誉")]),s("div",{staticClass:"about_model_one_title"},[t._v("2016年中国互联网金融行业总评榜年度互联网…")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about_model_one_info"},[s("div",{staticClass:"about_model_one_theme"},[t._v("企业文化")]),s("div",{staticClass:"about_model_one_title"},[t._v("企业宗旨 质量树品牌诚信立伟业...")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about_model_one_info"},[s("div",{staticClass:"about_model_one_theme"},[t._v("公司愿景")]),s("div",{staticClass:"about_model_one_title"},[t._v("恒大财富将始终围绕宏观时代背景需求，依托自身产业基础...")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about_develop"},[s("div",{staticClass:"about_develop_inner"},[s("p",{staticClass:"about_situation_theme"},[s("span",[t._v("发展历程")])]),s("div",{staticClass:"about_develop_history"},[s("div",{staticClass:"about_develop_history_one n1"},[s("div",{staticClass:"about_history_icon"},[s("span",{staticClass:"iconfont about_history_ic_01"},[t._v("")])]),s("div",{staticClass:"about_history_title"},[s("p",[t._v("2015年11月")]),s("p",[t._v("恒大金服从"),s("span",[t._v("成立")])])]),s("div",{staticClass:"about_line_dot"},[s("div",{staticClass:"about_line_box"}),s("div",{staticClass:"about_dot_box"})]),s("div",{staticClass:"about_history_time"},[t._v("2015-11")])]),s("div",{staticClass:"about_develop_history_one n2"},[s("div",{staticClass:"about_history_icon"},[s("span",{staticClass:"iconfont about_history_ic_01"},[t._v("")])]),s("div",{staticClass:"about_history_title"},[s("p",[t._v("2016年03月")]),s("p",[t._v("恒大金服APP平台"),s("span",[t._v("正式上线")])])]),s("div",{staticClass:"about_line_dot"},[s("div",{staticClass:"about_line_box"}),s("div",{staticClass:"about_dot_box"})]),s("div",{staticClass:"about_history_time"},[t._v("2016-03")])]),s("div",{staticClass:"about_develop_history_one n5"},[s("div",{staticClass:"about_history_icon"},[s("span",{staticClass:"iconfont about_history_ic_01"},[t._v("")])]),s("div",{staticClass:"about_history_title"},[s("p",[t._v("2018年04月")]),s("p",[t._v("恒大金服正式转入"),s("span",[t._v("线下销售")]),t._v("，全国布局")])]),s("div",{staticClass:"about_line_dot"},[s("div",{staticClass:"about_line_box"}),s("div",{staticClass:"about_dot_box"})]),s("div",{staticClass:"about_history_time"},[t._v("2018")])]),s("div",{staticClass:"about_develop_history_one n6"},[s("div",{staticClass:"about_history_icon"},[s("span",{staticClass:"iconfont about_history_ic_01"},[t._v("")])]),s("div",{staticClass:"about_history_title"},[s("p",[t._v("2019年02月")]),s("p",[t._v("恒大金服正式改名为"),s("span",[t._v("恒大财富")])])]),s("div",{staticClass:"about_line_dot"},[s("div",{staticClass:"about_line_box"}),s("div",{staticClass:"about_dot_box"})]),s("div",{staticClass:"about_history_time"},[t._v("2019")])]),s("div",{staticClass:"about_time_line"},[s("div",{staticClass:"about_time_line_to"},[s("span"),s("span",{staticClass:"active"})])])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"about_contact_us",attrs:{id:"about_contact_us"}},[s("div",{staticClass:"about_contact_inner"},[s("p",{staticClass:"about_contact_theme"},[s("span",[t._v("联系我们")])]),s("div",{staticClass:"about_contact_way"},[s("div",{staticClass:"about_contact_one n1"},[s("div",{staticClass:"about_contact_icon"},[s("span",{staticClass:"iconfont about_contact_ic_01"},[t._v("")])]),s("div",{staticClass:"about_contact_one_theme"},[t._v("400-688-3333")]),s("div",{staticClass:"about_contact_time"},[t._v("( 工作日8:30-18:00 )")])]),s("div",{staticClass:"about_contact_one n2"},[s("div",{staticClass:"about_contact_icon"},[s("span",{staticClass:"iconfont about_contact_ic_02"},[t._v("")])]),s("div",{staticClass:"about_contact_info"},[s("div",{staticClass:"about_contact_text"},[t._v("客服邮箱 hdfax@evergrande.com")]),s("div",{staticClass:"about_contact_text"},[t._v("合作邮箱 hezuo@evergrande.com")])])]),s("div",{staticClass:"about_contact_one n3"},[s("div",{staticClass:"about_contact_icon"},[s("span",{staticClass:"iconfont about_contact_ic_02"},[t._v("")])]),s("div",{staticClass:"about_contact_server"},[t._v("联系在线客服")])])])])])}],e=(s("baa5"),s("c791"),{name:"About",created:function(){},methods:{ScrollTop:function(t,a){var s=this;if(!a)return document.body.scrollTop=document.documentElement.scrollTop=t,t;var i=20,o=a/i,e=document.body.scrollTop+document.documentElement.scrollTop,n=(t-e)/o,_=setInterval((function(){o>0?(o--,s.ScrollTop(e+=n)):clearInterval(_)}),i)}},mounted:function(){var t=window.location.hash,a=t.lastIndexOf("#");if(-1!=a){var s=t.substring(a+1,t.length+1),i=document.getElementById(s);if(i){var o=i.offsetTop;this.ScrollTop(o,600)}}}}),n=e,_=(s("758f"),s("2877")),c=Object(_["a"])(n,i,o,!1,null,"6e28195e",null);a["default"]=c.exports},9911:function(t,a,s){"use strict";var i=s("23e7"),o=s("857a"),e=s("af03");i({target:"String",proto:!0,forced:e("link")},{link:function(t){return o(this,"a","href",t)}})},af03:function(t,a,s){var i=s("d039");t.exports=function(t){return i((function(){var a=""[t]('"');return a!==a.toLowerCase()||a.split('"').length>3}))}},baa5:function(t,a,s){var i=s("23e7"),o=s("e58c");i({target:"Array",proto:!0,forced:o!==[].lastIndexOf},{lastIndexOf:o})},ddd3:function(t,a,s){},e58c:function(t,a,s){"use strict";var i=s("fc6a"),o=s("a691"),e=s("50c4"),n=s("a640"),_=s("ae40"),c=Math.min,l=[].lastIndexOf,u=!!l&&1/[1].lastIndexOf(1,-0)<0,r=n("lastIndexOf"),d=_("lastIndexOf",{ACCESSORS:!0,1:2147483647}),v=u||!r||!d;t.exports=v?function(t){if(u)return l.apply(this,arguments)||0;var a=i(this),s=e(a.length),n=s-1;for(arguments.length>1&&(n=c(n,o(arguments[1]))),n<0&&(n=s+n);n>=0;n--)if(n in a&&a[n]===t)return n||0;return-1}:l},ed01:function(t,a,s){"use strict";var i=s("3910"),o=s.n(i);o.a}}]);
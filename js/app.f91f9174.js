(function(e){function t(t){for(var s,a,c=t[0],i=t[1],u=t[2],l=0,f=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(e[s]=i[s]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],s=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(s=!1)}s&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var s={},a={app:0},r={app:0},o=[];function c(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d2086b7":"e51f9a70","chunk-70280213":"8ad827ad","chunk-eea0746a":"2a860b3e"}[e]+".js"}function i(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-70280213":1,"chunk-eea0746a":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var s="css/"+({}[e]||e)+"."+{"chunk-2d2086b7":"31d6cfe0","chunk-70280213":"c25ecca4","chunk-eea0746a":"91faf684"}[e]+".css",r=i.p+s,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var u=o[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===s||l===r))return t()}var f=document.getElementsByTagName("style");for(c=0;c<f.length;c++){u=f[c],l=u.getAttribute("data-href");if(l===s||l===r)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var s=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete a[e],d.parentNode.removeChild(d),n(o)},d.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var s=r[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise((function(t,n){s=r[e]=[t,n]}));t.push(s[2]=o);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=c(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",f.name="ChunkLoadError",f.type=s,f.request=a,n[1](f)}r[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=s,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(n,s,function(t){return e[t]}.bind(null,s));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0257":function(e,t,n){"use strict";n("faff")},"0528":function(e,t,n){"use strict";n("6457")},"14e0":function(e,t,n){"use strict";n("e9d1")},2395:function(e,t,n){},"328b":function(e,t,n){},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id="4678"},"555c":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.info||e.$route.params.username||e.loginname?n("div",{staticClass:"aside-info"},[e.user?n("Aside",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("个人信息")]},proxy:!0},{key:"content",fn:function(){return[n("div",[n("router-link",{attrs:{to:"/user/"+e.user.loginname}},[n("el-avatar",{attrs:{size:"medium",shape:"square",src:e.user.avatar_url}}),n("span",[e._v(e._s(e.user.loginname))])],1)],1),n("p",[e._v(e._s(e.user.score)+"积分")])]},proxy:!0}],null,!1,1786437011)}):e._e(),this.loginname?e._e():n("Aside",{scopedSlots:e._u([{key:"content2",fn:function(){return[n("el-button",{attrs:{size:"midle",type:"success"},on:{click:e.addTopic}},[e._v("发布话题")])]},proxy:!0}],null,!1,3203342748)})],1):n("div",{staticClass:"aside-info"},[n("Aside",{scopedSlots:e._u([{key:"content2",fn:function(){return[n("p",[e._v("Node.js专业中文社区")]),e.info?e._e():n("el-button",{attrs:{type:"success"},on:{click:function(t){return e.$router.push("/login")}}},[e._v("登录")])]},proxy:!0}])})],1)},a=[],r=n("5530"),o=n("814a"),c=n("2f62"),i={components:{Aside:o["a"]},props:["loginname"],computed:Object(r["a"])(Object(r["a"])({},Object(c["d"])({user:function(e){return e.user.user}})),{},{info:function(){return JSON.parse(localStorage.getItem("info"))}}),created:function(){if(this.info||this.$route.params.username||this.loginname){var e=this.$route.params.username?this.$route.params.username:this.loginname?this.loginname:this.info.loginname;console.log(e),this.getUser(e)}},methods:Object(r["a"])(Object(r["a"])({},Object(c["b"])(["getUser"])),{},{addTopic:function(){this.$router.push("/topic/create")}})},u=i,l=(n("fb6a"),n("2877")),f=Object(l["a"])(u,s,a,!1,null,null,null);t["a"]=f.exports},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("Header"),n("div",{staticClass:"main"},[n("router-view")],1),n("Footer")],1)},r=[],o=n("5530"),c=n("2f62"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",[n("div",{staticClass:"header-inner"},[n("h1",[n("router-link",{attrs:{to:"/"}},[n("img",{attrs:{src:"https://static2.cnodejs.org/public/images/cnodejs_light.svg",alt:""}})])],1),n("div",{staticClass:"header-right"},[n("router-link",{attrs:{to:"/"}},[e._v("首页")]),n("a",{attrs:{href:""}},[e._v("未读消息")]),e.info?n("div",[n("router-link",{attrs:{to:"/user/"+e.info.loginname}},[n("el-avatar",{staticClass:"avatar",attrs:{size:"medium",shape:"square",src:e.info.avatar_url}})],1),n("a",{on:{click:e.logout}},[e._v("退出")])],1):n("router-link",{attrs:{to:"/login"}},[e._v("登录")])],1)])])},u=[],l={data:function(){return{messageCount:null}},computed:Object(o["a"])({},Object(c["d"])({info:function(e){return e.login.info}})),methods:Object(o["a"])(Object(o["a"])({},Object(c["c"])(["getInfo"])),{},{logout:function(){"/"!==this.$route.path&&this.$router.push("/"),localStorage.removeItem("info"),localStorage.removeItem("token"),this.getInfo(null)}}),created:function(){}},f=l,d=(n("a901"),n("2877")),p=Object(d["a"])(f,i,u,!1,null,null,null),m=p.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",[e._v("底部")])},h=[],g={},j=g,v=(n("760c"),Object(d["a"])(j,b,h,!1,null,null,null)),_=v.exports,k={components:{Header:m,Footer:_},created:function(){var e=localStorage.getItem("info");e&&this.getInfo(JSON.parse(e))},methods:Object(o["a"])({},Object(c["c"])(["getInfo"]))},y=k,w=(n("7c55"),Object(d["a"])(y,a,r,!1,null,null,null)),O=w.exports,x=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"home-main"},[n("div",{staticClass:"home-header"},e._l(e.tabs,(function(t){return n("router-link",{key:t,class:["tab",{active:"全部"===t&&"/"===e.$route.path}],attrs:{"active-class":"active",to:e._f("transformTab")(t)}},[e._v(e._s(t))])})),1),n("Panel",{scopedSlots:e._u([{key:"content2",fn:function(){return[n("router-view")]},proxy:!0}])})],1),n("AsideInfo")],1)},P=[],I=n("f34a"),S=n("555c"),$={name:"Home",components:{Panel:I["a"],AsideInfo:S["a"]},data:function(){return{tabs:["全部","精华","分享","问答","招聘","客户端测试"]}},created:function(){},methods:{}},z=$,E=(n("de16"),Object(d["a"])(z,C,P,!1,null,null,null)),R=E.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.list.length?n("div",[e._l(e.list,(function(t){return n("PostItem",e._b({key:t.id},"PostItem",t,!1))})),e.loading?n("div",{staticClass:"loading"},[e._v("加载中...")]):e._e()],2):n("el-skeleton",{attrs:{rows:6,animated:""}})},A=[],T=n("1da1"),N=(n("96cf"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"post-item"},[n("router-link",{attrs:{to:"/user/"+e.author.loginname}},[n("el-avatar",{staticClass:"avatar",attrs:{shape:"square",size:"medium",src:e.author.avatar_url}})],1),n("div",{staticClass:"count-wrap"},[n("span",{staticClass:"reply-count"},[e._v(e._s(e.reply_count))]),n("span",[e._v("/")]),n("span",{staticClass:"visit_count"},[e._v(e._s(e.visit_count))])]),e.top?n("el-tag",{staticClass:"tag",attrs:{type:"success",size:"mini"}},[e._v("置顶")]):e.good?n("el-tag",{staticClass:"tag",attrs:{type:"success",size:"mini"}},[e._v("精华")]):"all"===e.$route.params.tab?n("el-tag",{staticClass:"tag",attrs:{type:"info",size:"mini"}},[e._v(e._s(e._f("transformTab")(e.tab)))]):e._e(),n("router-link",{staticClass:"content",attrs:{to:"/post/"+e.id}},[e._v(e._s(e.title))]),n("span",{staticClass:"last-raply"},[e._v(e._s(e._f("moment")(e.last_reply_at,"from","now")))])],1)}),L=[],H={props:["id","author","reply_count","visit_count","title","tab","top","good","last_reply_at"],computed:{}},q=H,M=(n("8cc1"),Object(d["a"])(q,N,L,!1,null,null,null)),F=M.exports,J=n("b047"),D=n.n(J),B={components:{PostItem:F},data:function(){return{page:2,loading:!1}},computed:Object(o["a"])(Object(o["a"])({},Object(c["d"])({list:function(e){return e.postList.list}})),{},{tab:function(){return this.$route.params.tab||"all"}}),watch:{"$route.params.tab":{handler:function(){this.getPosts({tab:this.tab}),this.page=2},immediate:!0}},methods:Object(o["a"])(Object(o["a"])({},Object(c["b"])(["getPosts"])),{},{scrollFun:D()(Object(T["a"])(regeneratorRuntime.mark((function e(){var t,n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=document.documentElement.scrollHeight,n=window.innerHeight||document.documentElement.clientHeight,s=window.scrollY||document.documentElement.scrollTop,!(t-n-s<=200&&this.list.length)){e.next=10;break}if(this.loading){e.next=10;break}return this.loading=!0,this.page++,e.next=9,this.getPosts({tab:this.tab,page:this.page});case 9:this.loading=!1;case 10:case"end":return e.stop()}}),e,this)}))),300)}),mounted:function(){window.addEventListener("scroll",this.scrollFun)},beforeDestroy:function(){window.removeEventListener("scroll",this.scrollFun)}},K=B,Y=(n("0257"),Object(d["a"])(K,U,A,!1,null,null,null)),Z=Y.exports,G=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.user?n("div",{staticClass:"user"},[n("div",{staticStyle:{width:"900px"}},[n("Panel",{scopedSlots:e._u([{key:"header",fn:function(){return[n("router-link",{attrs:{to:"/"}},[e._v("主页")])]},proxy:!0},{key:"content",fn:function(){return[n("div",{staticClass:"content"},[n("div",[n("el-avatar",{staticClass:"avatar",attrs:{size:"medium",shape:"square",src:e.user.avatar_url}}),n("span",[e._v(e._s(e.user.loginname))])],1),n("div",[e._v(e._s(e.user.score)+"积分")]),n("div",[e._v(" github "),n("a",{attrs:{target:"_blank",href:"https://github.com/"+e.user.githbuUsername}}),e._v(" @"+e._s(e.user.githubUsername)+" ")]),n("div",[e._v("注册时间"+e._s(e._f("moment")(e.user.create_at,"from","now")))])])]},proxy:!0}],null,!1,1268879157)}),n("Panel",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("最近创建")]},proxy:!0},{key:"content",fn:function(){return e._l(e.recent_topics,(function(t){return n("PostItem",e._b({key:t.id},"PostItem",t,!1))}))},proxy:!0}],null,!1,1435843618)}),n("Panel",{scopedSlots:e._u([{key:"header",fn:function(){return[e._v("最近参与")]},proxy:!0},{key:"content",fn:function(){return e._l(e.recent_replies,(function(t){return n("PostItem",e._b({key:t.id},"PostItem",t,!1))}))},proxy:!0}],null,!1,1638701865)})],1),n("AsideInfo")],1):e._e()},Q=[],V=(n("d81d"),n("bc3a")),W=n.n(V);W.a.defaults.baseURL="https://cnodejs.org/api/v1",W.a.defaults.timeout=3e3,W.a.interceptors.response.use((function(e){return e.data})),s["default"].prototype.$axios=W.a;var X=W.a,ee={components:{Panel:I["a"],PostItem:F,AsideInfo:S["a"]},data:function(){return{recent_replies:[],recent_topics:[]}},computed:Object(o["a"])({},Object(c["d"])({user:function(e){return e.user.user}})),created:function(){var e=this;return Object(T["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getUser(e.$route.params.username);case 2:console.log(e.user);case 3:case"end":return t.stop()}}),t)})))()},watch:{"$route.params.username":{handler:function(e){this.getUser(e)},immediate:!0},user:{handler:function(e){var t=this;return Object(T["a"])(regeneratorRuntime.mark((function n(){var s,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,X.all(e.recent_replies.map((function(e){return X.get("/topic/".concat(e.id))})));case 2:return s=n.sent,t.recent_replies=s.map((function(e){return e.data})),n.next=6,X.all(e.recent_topics.map((function(e){return X.get("/topic/".concat(e.id))})));case 6:a=n.sent,t.recent_topics=a.map((function(e){return e.data}));case 8:case"end":return n.stop()}}),n)})))()}}},methods:Object(o["a"])({},Object(c["b"])(["getUser"]))},te=ee,ne=(n("14e0"),Object(d["a"])(te,G,Q,!1,null,null,null)),se=ne.exports,ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e._v(" 404 ")])},re=[],oe={},ce=oe,ie=Object(d["a"])(ce,ae,re,!1,null,null,null),ue=ie.exports;s["default"].use(x["a"]);var le=[{path:"/login",component:function(){return n.e("chunk-2d2086b7").then(n.bind(null,"a55b"))}},{path:"/topic/create",component:function(){return n.e("chunk-70280213").then(n.bind(null,"d879"))}},{path:"/post/:id/edit",name:"postEdit",component:function(){return n.e("chunk-70280213").then(n.bind(null,"d879"))}},{path:"/post/:id",name:"postContent",props:!0,component:function(){return n.e("chunk-eea0746a").then(n.bind(null,"7b26"))}},{path:"/",name:"Home",component:R,children:[{path:"",component:Z},{path:":tab",component:Z}]},{path:"/user/:username",component:se},{path:"*",component:ue}],fe=new x["a"]({mode:"hash",base:"/",routes:le}),de=fe,pe=n("2909"),me=(n("99af"),{state:function(){return{list:[]}},mutations:{getPosts:function(e,t){e.list=t},loadMorePosts:function(e,t){e.list=[].concat(Object(pe["a"])(e.list),Object(pe["a"])(t))}},actions:{getPosts:function(e,t){return Object(T["a"])(regeneratorRuntime.mark((function n(){var s,a,r,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.commit,a=t.tab,r=t.page,o=r?"?tab=".concat(a,"&page=").concat(r,"&limit=20"):"?tab=".concat(a),n.next=5,X.get("/topics".concat(o));case 5:c=n.sent,s(r?"loadMorePosts":"getPosts",c.data);case 7:case"end":return n.stop()}}),n)})))()}}}),be=(n("7db0"),n("4de4"),{state:function(){return{post:null,newPostId:""}},mutations:{getPost:function(e,t){e.post=t},changeCollect:function(e,t){e.post.is_collect=t},changeUps:function(e,t){var n=t.id,s=t.action,a=JSON.parse(localStorage.getItem("info")).id,r=e.post.replies.find((function(e){return e.id===n}));"up"===s?(r.is_uped=!0,r.ups.push(a)):(r.is_uped=!1,r.ups=r.ups.filter((function(e){return e!==a})))},getNewPostId:function(e,t){e.newPostId=t}},actions:{getPost:function(e,t){return Object(T["a"])(regeneratorRuntime.mark((function n(){var s,a,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.commit,a=localStorage.getItem("token"),r=a?"/topic/".concat(t,"?accesstoken=").concat(a):"/topic/".concat(t),n.next=5,X.get(r);case 5:o=n.sent,s("getPost",o.data);case 7:case"end":return n.stop()}}),n)})))()},collectHandle:function(e,t){return Object(T["a"])(regeneratorRuntime.mark((function n(){var s,a,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(s=e.commit,a=t.id,r=t.is_collect,o=localStorage.getItem("token"),!r){n.next=9;break}return n.next=6,X.post("/topic_collect/collect",{topic_id:a,accesstoken:o});case 6:s("changeCollect",!0),n.next=12;break;case 9:return n.next=11,X.post("/topic_collect/de_collect",{topic_id:a,accesstoken:o});case 11:s("changeCollect",!1);case 12:case"end":return n.stop()}}),n)})))()},upsHandle:function(e,t){return Object(T["a"])(regeneratorRuntime.mark((function n(){var s,a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.commit,a=localStorage.getItem("token"),n.next=4,X.post("/reply/".concat(t,"/ups"),{accesstoken:a});case 4:r=n.sent,s("changeUps",{id:t,action:r.action}),console.log(r.action);case 7:case"end":return n.stop()}}),n)})))()},addComment:function(e,t){return Object(T["a"])(regeneratorRuntime.mark((function n(){var s,a,r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.dispatch,a=t.id,r=t.content,o=localStorage.getItem("token"),n.next=5,X.post("/topic/".concat(a,"/replies"),{accesstoken:o,content:r});case 5:s("getPost",a);case 6:case"end":return n.stop()}}),n)})))()},createPost:function(e,t){return Object(T["a"])(regeneratorRuntime.mark((function n(){var s,a,r,o,c,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.commit,a=t.title,r=t.tab,o=t.content,c=localStorage.getItem("token"),n.next=5,X.post("/topics",{accesstoken:c,title:a,tab:r,content:o});case 5:i=n.sent,s("getNewPostId",i.topic_id);case 7:case"end":return n.stop()}}),n)})))()},updatePost:function(e,t){return Object(T["a"])(regeneratorRuntime.mark((function n(){var s,a,r,o,c;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.commit,s=t.topic_id,a=t.title,r=t.tab,o=t.content,c=localStorage.getItem("token"),n.next=5,X.post("/topics/update",{accesstoken:c,topic_id:s,title:a,tab:r,content:o});case 5:case"end":return n.stop()}}),n)})))()}}}),he={state:function(){return{user:null}},mutations:{getUser:function(e,t){e.user=t}},actions:{getUser:function(e,t){return Object(T["a"])(regeneratorRuntime.mark((function n(){var s,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=e.commit,n.next=3,X.get("/user/".concat(t));case 3:a=n.sent,s("getUser",a.data);case 5:case"end":return n.stop()}}),n)})))()}}},ge=(n("e9c4"),{state:function(){return{info:null}},mutations:{getInfo:function(e,t){e.info=t}},actions:{getInfo:function(e,t){var n=e.commit;return new Promise((function(e,s){X.post("/accesstoken",{accesstoken:t}).then((function(s){n("getInfo",s),console.log(s),localStorage.setItem("info",JSON.stringify(s)),localStorage.setItem("token",t),e()})).catch((function(){s()}))}))}}}),je={state:function(){},mutations:{},actions:{getMessageCount:function(e){e.commit}}};s["default"].use(c["a"]);var ve=new c["a"].Store({state:{},mutations:{},actions:{},modules:{post:be,postList:me,user:he,login:ge,message:je}}),_e=(n("0fb7"),n("450d"),n("f529")),ke=n.n(_e),ye=(n("1760"),n("9883")),we=n.n(ye),Oe=(n("6611"),n("e772")),xe=n.n(Oe),Ce=(n("1f1a"),n("4e4b")),Pe=n.n(Ce),Ie=(n("10cb"),n("f3ad")),Se=n.n(Ie),$e=(n("eca7"),n("3787")),ze=n.n($e),Ee=(n("425f"),n("4105")),Re=n.n(Ee),Ue=(n("920a"),n("4f0c")),Ae=n.n(Ue),Te=(n("cbb5"),n("8bbc")),Ne=n.n(Te),Le=(n("dcba"),n("9e16")),He=n.n(Le),qe=(n("784f"),n("7532")),Me=n.n(qe),Fe=(n("1951"),n("eedf")),Je=n.n(Fe);s["default"].use(Je.a),s["default"].use(Me.a),s["default"].use(He.a),s["default"].use(Ne.a),s["default"].use(Ae.a),s["default"].use(Re.a),s["default"].use(ze.a),s["default"].use(Se.a),s["default"].use(Pe.a),s["default"].use(xe.a),s["default"].use(we.a),s["default"].prototype.$message=ke.a;n("7d05"),n("ac1f"),n("466d");s["default"].filter("transformTab",(function(e){if(!e)return"";var t=e.match(/[a-zA-Z]/);if(t)switch(e){case"all":return"全部";case"good":return"精华";case"share":return"分享";case"ask":return"问答";case"job":return"招聘";case"dev":return"客户端测试"}else switch(e){case"全部":return"all";case"精华":return"good";case"分享":return"share";case"问答":return"ask";case"招聘":return"job";case"客户端测试":return"dev"}}));var De=n("2ead"),Be=n.n(De),Ke=n("c1df"),Ye=n.n(Ke);n("5c3a");s["default"].use(Be.a,{moment:Ye.a});var Ze=n("b2d8"),Ge=n.n(Ze);n("64e1");s["default"].use(Ge.a),s["default"].config.productionTip=!1,new s["default"]({router:de,store:ve,render:function(e){return e(O)}}).$mount("#app")},6457:function(e,t,n){},"760c":function(e,t,n){"use strict";n("c3f5")},"7c55":function(e,t,n){"use strict";n("2395")},"7d05":function(e,t,n){},"814a":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"aside"},[e.$slots.header?n("div",{staticClass:"aside-header"},[e._t("header")],2):e._e(),e.$slots.content?n("div",{staticClass:"aside-content"},[e._t("content")],2):e._e(),e.$slots.content2?n("div",{staticClass:"aside-content other"},[e._t("content2")],2):e._e()])},a=[],r={},o=r,c=(n("bfee"),n("2877")),i=Object(c["a"])(o,s,a,!1,null,null,null);t["a"]=i.exports},"8cc1":function(e,t,n){"use strict";n("b696")},"8d91":function(e,t,n){},a901:function(e,t,n){"use strict";n("328b")},b696:function(e,t,n){},b9ff:function(e,t,n){},bfee:function(e,t,n){"use strict";n("b9ff")},c3f5:function(e,t,n){},cb29:function(e,t,n){},de16:function(e,t,n){"use strict";n("8d91")},e9d1:function(e,t,n){},f34a:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"panel"},[e.$slots.header?n("div",{staticClass:"panel-header"},[e._t("header")],2):e._e(),e.$slots.content?n("div",{staticClass:"panel-content"},[e._t("content")],2):e._e(),e.$slots.content2?n("div",{staticClass:"panel-content2"},[e._t("content2")],2):e._e()])},a=[],r={},o=r,c=(n("0528"),n("2877")),i=Object(c["a"])(o,s,a,!1,null,null,null);t["a"]=i.exports},faff:function(e,t,n){},fb6a:function(e,t,n){"use strict";n("cb29")}});
//# sourceMappingURL=app.f91f9174.js.map
(function(e){function t(t){for(var r,n,s=t[0],l=t[1],u=t[2],c=0,d=[];c<s.length;c++)n=s[c],i[n]&&d.push(i[n][0]),i[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,n=1;n<a.length;n++){var s=a[n];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},n={app:0},i={app:0},o=[];function s(e){return l.p+"js/"+({about:"about",agreement:"agreement",contract:"contract",login:"login",manager:"manager",profile:"profile"}[e]||e)+"."+{about:"6eb18574",agreement:"3126324a",contract:"3b6d0ce2",login:"e764bd1b",manager:"80baeab6",profile:"37ee3fea"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={login:1,manager:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise(function(t,a){for(var r="css/"+({about:"about",agreement:"agreement",contract:"contract",login:"login",manager:"manager",profile:"profile"}[e]||e)+"."+{about:"31d6cfe0",agreement:"31d6cfe0",contract:"31d6cfe0",login:"7d5986f5",manager:"8128e7c7",profile:"31d6cfe0"}[e]+".css",i=l.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],c=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(c===r||c===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],c=u.getAttribute("data-href");if(c===r||c===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,delete n[e],p.parentNode.removeChild(p),a(o)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){n[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,a){r=i[e]=[t,a]});t.push(r[2]=o);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,l.nc&&c.setAttribute("nonce",l.nc),c.src=s(e),u=function(t){c.onerror=c.onload=null,clearTimeout(d);var a=i[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+n+")");o.type=r,o.request=n,a[1](o)}i[e]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:c})},12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"034f":function(e,t,a){"use strict";var r=a("64a9"),n=a.n(r);n.a},"3a3d":function(e,t,a){"use strict";a.d(t,"b",function(){return n}),a.d(t,"a",function(){return i});var r=a("a29c");function n(e){sessionStorage.setItem("user",JSON.stringify(e))}function i(){var e=sessionStorage.getItem("user");return e?JSON.parse(e):r["b"]?{openid:"10000",nickname:"陈晓峰",headimgurl:"http://thirdwx.qlogo.cn/mmopen/vi_32/lJrubpXQ6BfZauRwkwRNSDWKGxRY78tEsicoFxt43kMiabkj0FP78wBJ7CgiaQO6iaqBJnQGUCPXia07ZiaoelJdzkjA/132"}:void 0}},4305:function(e,t,a){"use strict";var r,n;a.d(t,"b",function(){return n}),a.d(t,"c",function(){return i}),a.d(t,"a",function(){return o}),function(e){e[e["reviewing"]=1]="reviewing",e[e["reviewed"]=2]="reviewed",e[e["left"]=3]="left",e[e["contract"]=4]="contract"}(n||(n={}));var i=(r={},r[n.reviewing]="待审核",r[n.reviewed]="已审核",r[n.left]="已退租",r[n.contract]="待签约",r),o={id:"身份证",name:"姓名",phone:"手机号"}},"53e2":function(e,t,a){"use strict";var r=a("976f"),n=a.n(r);n.a},"559a":function(e,t,a){"use strict";var r=a("f7a4"),n=a.n(r);n.a},"64a9":function(e,t,a){},"73ec":function(e,t,a){"use strict";a.d(t,"a",function(){return n});var r=a("3a3d");function n(){var e=r["a"](),t=["10000","o7tJq08kMDWwUfW9dBE7B-xjNC3w"];return!!e&&-1!==t.indexOf(e.openid)}},"976f":function(e,t,a){},a29c:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return n});var r=!1,n=r?"http://localhost:8000":"http://pspjjc.chenxiaofeng.vip"},cd49:function(e,t,a){"use strict";a.r(t);var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app",attrs:{id:"app"}},[a("div",{staticClass:"content"},[a("keep-alive",{attrs:{include:e.cacheComponents}},[a("router-view")],1)],1),a("Footer")],1)},i=[],o=a("9ab4"),s=(a("0540"),function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.cacheComponents="Home",t}return o["c"](t,e),t}(r["default"])),l=s,u=l,c=(a("034f"),a("559a"),a("2877")),d=Object(c["a"])(u,n,i,!1,null,"5521dac3",null);d.options.__file="App.vue";var p=d.exports,f=a("8c4f"),m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Home"},[a("div",{staticClass:"weui-cells__title"},[e._v("个人主页")]),a("div",{staticClass:"weui-cells"},[a("div",{staticClass:"weui-cell"},[a("div",{staticClass:"weui-cell__hd",staticStyle:{position:"relative","margin-right":"10px"}},[a("img",{staticStyle:{width:"50px",display:"block"},attrs:{src:e.loginUser.headimgurl}})]),a("div",{staticClass:"weui-cell__bd"},[a("p",[e._v("你好，"+e._s(e.loginUser.nickname))]),a("p",{staticStyle:{"font-size":"13px",color:"#888888"}},[e._v(e._s(e.stateMsg))])])])]),a("div",{attrs:{id:"form"}},[a("div",{staticClass:"weui-cells__title"},[e._v(e._s(e.shortMsg))]),a("div",{staticClass:"weui-cells weui-cells_form"},[a("div",{staticClass:"weui-cell"},[e._m(0),a("div",{staticClass:"weui-cell__bd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.name,expression:"formData.name"}],staticClass:"weui-input",attrs:{required:"",placeholder:"请输入姓名"},domProps:{value:e.formData.name},on:{input:function(t){t.target.composing||e.$set(e.formData,"name",t.target.value)}}})])]),a("div",{staticClass:"weui-cell"},[e._m(1),a("div",{staticClass:"weui-cell__bd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.id,expression:"formData.id"}],staticClass:"weui-input",attrs:{type:"text",required:"",pattern:"REG_IDNUM",placeholder:"请输入身份证号",notMatchTips:"请输入正确的身份证号码"},domProps:{value:e.formData.id},on:{input:function(t){t.target.composing||e.$set(e.formData,"id",t.target.value)}}})])]),a("div",{staticClass:"weui-cell weui-cell_vcode"},[e._m(2),a("div",{staticClass:"weui-cell__bd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.phone,expression:"formData.phone"}],staticClass:"weui-input",attrs:{type:"number",required:"",pattern:"[0-9]{11}",placeholder:"请输入手机号",notMatchTips:"请输入正确的手机号"},domProps:{value:e.formData.phone},on:{input:function(t){t.target.composing||e.$set(e.formData,"phone",t.target.value)}}})]),a("div",{staticClass:"weui-cell__ft"},[a("button",{staticClass:"weui-vcode-btn",on:{click:e.onGetVerificationCode}},[e._v("获取验证码")])])]),a("div",{staticClass:"weui-cell"},[e._m(3),a("div",{staticClass:"weui-cell__bd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.code,expression:"formData.code"}],staticClass:"weui-input",attrs:{required:"",type:"number",placeholder:"请输入验证码"},domProps:{value:e.formData.code},on:{input:function(t){t.target.composing||e.$set(e.formData,"code",t.target.value)}}})])]),a("div",{staticClass:"weui-cell",attrs:{id:"uploaderCustom"}},[a("div",{staticClass:"weui-cell__bd"},[a("div",{staticClass:"weui-uploader"},[a("div",{staticClass:"weui-uploader__hd"},[a("p",{staticClass:"weui-uploader__title"},[e._v("上传身份证正反面照片("+e._s(e.uploadCustomFileList.length)+"/2)")])]),a("div",{staticClass:"weui-uploader__bd"},[a("ul",{staticClass:"weui-uploader__files",attrs:{id:"uploaderCustomFiles"},on:{click:e.onPreviewImg}},e._l(e.registerData.idimgurl,function(e,t){return a("li",{key:t,staticClass:"weui-uploader__file",style:{"background-image":"url("+e+")"}})}),0),e._m(4)])])])])]),a("label",{staticClass:"weui-agree",attrs:{for:"weuiAgree"}},[a("input",{staticClass:"weui-agree__checkbox",attrs:{id:"weuiAgree",type:"checkbox"}}),a("span",{staticClass:"weui-agree__text"},[e._v("\n        阅读并同意\n        "),a("a",{on:{click:function(t){e.$router.push("/agreement")}}},[e._v("《相关条款》")])])]),a("div",{staticClass:"weui-btn-area"},[a("a",{staticClass:"weui-btn weui-btn_primary",on:{click:e.onSubmit}},[e._v("确定")]),e.isAdmin?a("a",{staticClass:"weui-btn weui-btn_default",on:{click:function(t){e.$router.push("/manager")}}},[e._v("管理")]):e._e()])])])},v=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label"},[e._v("姓名")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label"},[e._v("身份证")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label"},[e._v("手机号")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label"},[e._v("验证码")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"weui-uploader__input-box"},[a("input",{staticClass:"weui-uploader__input",attrs:{id:"uploaderCustomInput",type:"file",accept:"image/*",multiple:""}})])}],g=a("60a3"),h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"hello"},[a("h1",[e._v(e._s(e.msg))]),e._m(0),a("h3",[e._v("Installed CLI Plugins")]),e._m(1),a("h3",[e._v("Essential Links")]),e._m(2),a("h3",[e._v("Ecosystem")]),e._m(3)])},_=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[e._v("\n    For a guide and recipes on how to configure / customize this project,"),a("br"),e._v("\n    check out the\n    "),a("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-cli documentation")]),e._v(".\n  ")])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",target:"_blank",rel:"noopener"}},[e._v("typescript")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Core Docs")])]),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Forum")])]),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("Community Chat")])]),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[e._v("Twitter")])]),a("li",[a("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("News")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",[a("li",[a("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-router")])]),a("li",[a("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vuex")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[e._v("vue-devtools")])]),a("li",[a("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[e._v("vue-loader")])]),a("li",[a("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[e._v("awesome-vue")])])])}],b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o["c"](t,e),o["b"]([Object(g["b"])()],t.prototype,"msg",void 0),t=o["b"]([g["a"]],t),t}(g["c"]),C=b,w=C,y=(a("e130"),Object(c["a"])(w,h,_,!1,null,"9f28bd20",null));y.options.__file="HelloWorld.vue";var k=y.exports,D=a("3a3d"),x=a("a29c"),j=a("73ec"),F=a("4305"),E=a("57c4"),S=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.loginUser={openid:"0000"},t.shortMsg="完善个人信息，可使用信用卡支付",t.stateMsg="未签约",t.formData={},t.isAdmin=!1,t.registerData={},t.uploadCustomFileList=[],t.uploadCustomFileUrl=[],t}return o["c"](t,e),t.prototype.mounted=function(){this.loginUser=D["a"](),this.isAdmin=j["a"](),this.RegisterWeUI(),this.RequestRegisterData()},t.prototype.RequestRegisterData=function(){var e=this,t=this.loginUser.openid,a=x["a"],r=a+"/sunnyhouse/register?openid="+t;g["c"].axios.get(r).then(function(t){var a=t.data;if(console.log("RegisterData",a),a&&"SUCCESS"===a.code){var r=a.data;r&&(e.formData=o["a"]({},r),e.registerData=o["a"]({},r),e.stateMsg="资料已提交，等待管理员审核")}})},t.prototype.RegisterWeUI=function(){var e=this,t=x["a"];E.uploader("#uploaderCustom",{url:t+"/sunnyhouse/upload",auto:!1,onQueued:function(){e.uploadCustomFileList.push(this),e.registerData.idimgurl=[]},onBeforeQueued:function(t){if(["image/jpg","image/jpeg","image/png","image/gif"].indexOf(this.type)<0)return E.alert("请上传图片"),!1;if(this.size>10485760)return E.alert("请上传不超过10M的图片"),!1;var a=t.length+e.uploadCustomFileList.length,r=2;return a>r?(E.alert("最多只能上传"+r+"张图片，请重新选择"),!1):void 0},onSuccess:function(t){console.log("onSuccess",this,t),t.data&&t.data.url?e.uploadCustomFileUrl.push(t.data.url):e.uploadCustomFileUrl.push("error"),e.uploadCustomFileUrl.length===e.uploadCustomFileList.length&&e.uploadImageCallback(e.uploadCustomFileUrl)},onError:function(t){console.log(this,t),e.uploadCustomFileUrl.push("error"),e.uploadCustomFileUrl.length===e.uploadCustomFileList.length&&e.uploadImageCallback(e.uploadCustomFileUrl)}})},t.prototype.uploadImage=function(e){this.uploadImageCallback=e,this.uploadCustomFileUrl=[],this.uploadCustomFileList.forEach(function(e){e.upload()})},t.prototype.onPreviewImg=function(e){var t=e.target;while(!t.classList.contains("weui-uploader__file")&&t)t=t.parentNode;if(t){var a=t.getAttribute("style")||"",r=parseInt(t.getAttribute("data-id"),10);a&&(a=a.match(/url\((.*?)\)/)[1].replace(/"/g,""));var n=this,i=E.gallery(a,{onDelete:function(){E.confirm("确定删除该图片？",function(){for(var e,a=0,o=n.uploadCustomFileList.length;a<o;++a){var s=n.uploadCustomFileList[a];if(s.id===r){e=a;break}}void 0!==e&&n.uploadCustomFileList.splice(e,1),t.remove(),i.hide()})}})}},t.prototype.onSubmit=function(){var e=this;E.form.validate("#form",function(t){if(!t)if(e.registerData.idimgurl&&2===e.registerData.idimgurl.length){if(JSON.stringify(e.formData)===JSON.stringify(e.registerData))return void E.alert("数据没有变化，无需重复提交");e.PostFormData()}else{if(e.uploadCustomFileList.length<2)return void E.alert("请上传身份证正反面照片各一张");var a=E.loading("提交中...");e.uploadImage(function(t){a.hide(),-1!==t.indexOf("error")?E.alert("照片上传失败，请重试"):(e.formData.idimgurl=t,e.PostFormData())})}},{regexp:{IDNUM:/(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/}})},t.prototype.PostFormData=function(){this.formData.openid=this.loginUser.openid,this.formData.headimgurl=this.loginUser.headimgurl,this.formData.state=F["b"].reviewing;var e=x["a"],t=e+"/sunnyhouse/register";console.log("PostFormData",t,this.formData),g["c"].axios.post(t,this.formData).then(function(e){var t=e.data;"SUCCESS"===t.code?t.msg?E.alert("提交异常\n"+t.msg):E.toast("提交成功",1e3):E.alert("网络异常\n"+e)})},t.prototype.onGetVerificationCode=function(){E.toast("验证码已发送",{duration:1e3})},t=o["b"]([Object(g["a"])({components:{HelloWorld:k}})],t),t}(g["c"]),U=S,$=U,O=Object(c["a"])($,m,v,!1,null,null,null);O.options.__file="Home.vue";var P=O.exports;r["default"].use(f["a"]);var N=new f["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:P,meta:{title:"阳光公寓-首页"}},{path:"/about",name:"about",component:function(){return a.e("about").then(a.bind(null,"f820"))},meta:{title:"阳光公寓-关于"}},{path:"/login",name:"login",component:function(){return a.e("login").then(a.bind(null,"a55b"))},meta:{title:"阳光公寓-登录"}},{path:"/profile",name:"profile",component:function(){return a.e("profile").then(a.bind(null,"c66d"))},meta:{title:"阳光公寓-信息"}},{path:"/agreement",name:"agreement",component:function(){return a.e("agreement").then(a.bind(null,"a6e3"))},meta:{title:"阳光公寓-协议"}},{path:"/manager",name:"manager",component:function(){return a.e("manager").then(a.bind(null,"1692"))},meta:{title:"阳光公寓-管理"}},{path:"/contract",name:"contract",component:function(){return a.e("contract").then(a.bind(null,"e538"))},meta:{title:"阳光公寓-合约"}}]});N.beforeEach(function(e,t,a){var n=e.query.sid;if(e.meta.title&&(document.title=e.meta.title),n){var i=x["a"],o=i+"/sunnyhouse/user?sid="+n;r["default"].axios.get(o).then(function(e){var t=e.data;"SUCCESS"===t.code&&t.data?(D["b"](t.data),a()):a("/login")})}else"login"===e.name?a():D["a"]()?a():a("/login")});var I=N,L=a("bc3a"),M=a.n(L),A=a("a7fe"),q=a.n(A),J=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page__ft"},[a("div",{staticClass:"weui-footer"},[a("p",{staticClass:"weui-footer__links"},[a("a",{staticClass:"weui-footer__link",on:{click:function(t){e.$router.push("/")}}},[e._v("阳光公寓")])]),a("p",{staticClass:"weui-footer__text"},[e._v("Copyright © 2018-2019 阳光科技")])])])},R=[],T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return o["c"](t,e),t=o["b"]([g["a"]],t),t}(g["c"]),B=T,W=B,G=(a("53e2"),Object(c["a"])(W,J,R,!1,null,"7e7f3987",null));G.options.__file="Footer.vue";var H=G.exports;r["default"].use(q.a,M.a),r["default"].component("Footer",H),r["default"].config.productionTip=!1,new r["default"]({router:I,render:function(e){return e(p)}}).$mount("#app")},e130:function(e,t,a){"use strict";var r=a("fe28"),n=a.n(r);n.a},f7a4:function(e,t,a){},fe28:function(e,t,a){}});
//# sourceMappingURL=app.825d120c.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["manager"],{"0682":function(t,e,s){},1692:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"manager",staticStyle:{"transform-style":"preserve-3d"}},[s("div",{staticClass:"weui-flex category",on:{click:function(e){t.show=!t.show}}},[s("p",{staticClass:"weui-flex__item"},[t._v("菜单")]),s("img",{attrs:{src:"https://weui.io/images/icon_nav_form.png",alt:""}})]),s("transition",{attrs:{"enter-active-class":"animated fadeInDown faster"}},[t.show?s("nav",{staticClass:"weui-cells weui-cells-first"},t._l(t.btns,function(e,a){return s("a",{key:a,staticClass:"weui-cell weui-cell_access",on:{click:function(s){t.showPage(e.state)}}},[s("div",{staticClass:"weui-cell__bd"},[s("p",{style:e.selected?"":"color: #888888;"},[t._v(t._s(e.name))])]),s("div",{staticClass:"weui-cell__ft"})])}),0):t._e()]),s("div",{staticClass:"weui-cells__title"},[t._v(t._s(t.pageName))]),s("div",{staticClass:"weui-cells",class:t.classObject},[t.filerUser.length>0?s("div",t._l(t.filerUser,function(e,a){return s("div",{key:a,staticClass:"weui-cell weui-cell_access"},[s("div",{staticClass:"weui-cell__hd",staticStyle:{position:"relative","margin-right":"10px"}},[s("img",{staticStyle:{width:"50px",height:"50px",display:"block"},attrs:{src:e.headimgurl}})]),s("div",{staticClass:"weui-cell__bd",on:{click:function(s){t.showContract(e)}}},[s("p",[t._v(t._s(e.name))]),s("p",{staticStyle:{"font-size":"13px",color:"#888888"}},[t._v(t._s(e.shortdesc))])]),s("div",{staticClass:"weui-cell__ft"})])}),0):s("div",[t._m(0)])])],1)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"weui-loadmore weui-loadmore_line"},[s("span",{staticClass:"weui-loadmore__tips"},[t._v("暂无数据")])])}],n=s("9ab4"),c=s("60a3"),o=(s("77ed"),s("3a3d")),r=s("4305"),l=s("a29c"),u=4,d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.show=!1,e.curState=r["b"].reviewed,e.btns=[{name:"待审核",state:r["b"].reviewing,selected:!1},{name:"已审核",state:r["b"].reviewed,selected:!0},{name:"已退租",state:r["b"].left,selected:!1},{name:"待签约",state:r["b"].contract,selected:!1}],e.classObject="",e.userInfo=[],e.loginUser={openid:"0000"},e.newContract=[],e}return n["c"](e,t),e.prototype.mounted=function(){this.loginUser=o["a"](),this.RequestRegisterData(),this.RequestNewContractData()},e.prototype.RequestRegisterData=function(){var t=this,e="all",s=l["a"],a=s+"/sunnyhouse/register?openid="+e;c["c"].axios.get(a).then(function(e){var s=e.data;console.log("RegisterData",s),s&&"SUCCESS"===s.code&&(t.userInfo=s.data)})},e.prototype.RequestNewContractData=function(){var t=this,e=l["a"],s=e+"/sunnyhouse/contract/new/?detail=1";c["c"].axios.get(s).then(function(e){var s=e.data;console.log("NewContractData",s),s&&"SUCCESS"===s.code&&s.data&&(t.newContract=s.data)})},e.prototype.showPage=function(t){if(this.curState!==t){this.btns[t-1];this.curState=t,this.btns.forEach(function(e){e.selected=e.state===t}),this.showSwitchAni()}},e.prototype.showContract=function(t){t.tmpcontractid?this.$router.push("contract?contractid="+t.tmpcontractid):this.$router.push("profile?openid="+t.openid)},e.prototype.showSwitchAni=function(){var t=this;this.classObject="animated fadeIn faster",setTimeout(function(){t.classObject=""},500)},Object.defineProperty(e.prototype,"filerUser",{get:function(){var t=[];if(this.curState===u)for(var e=0,s=this.newContract;e<s.length;e++)for(var a=s[e],i=0,c=this.userInfo;i<c.length;i++){var o=c[i];if(o.openid===a.openid){var l=a.contractid,d=a.room+"房间待签约";t.push(n["a"]({},o,{tmpcontractid:l,shortdesc:d}))}}else for(var f=0,h=this.userInfo;f<h.length;f++){var p=h[f];if(p.state===this.curState){d=r["c"][p.state];t.push(n["a"]({},p,{shortdesc:d}))}}return t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"pageName",{get:function(){for(var t=0,e=this.btns;t<e.length;t++){var s=e[t];if(s.state===this.curState)return s.name}},enumerable:!0,configurable:!0}),e=n["b"]([c["a"]],e),e}(c["c"]),f=d,h=f,p=(s("dd15"),s("2877")),w=Object(p["a"])(h,a,i,!1,null,"e000bffe",null);w.options.__file="Manager.vue";e["default"]=w.exports},"77ed":function(t,e,s){},dd15:function(t,e,s){"use strict";var a=s("0682"),i=s.n(a);i.a}}]);
//# sourceMappingURL=manager.80baeab6.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contract"],{"73ec":function(t,e,a){"use strict";a.d(e,"a",function(){return s});var i=a("3a3d");function s(){var t=i["a"](),e=["10000","o7tJq08kMDWwUfW9dBE7B-xjNC3w"];return!!t&&-1!==e.indexOf(t.openid)}},e538:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"Contract"},[a("div",{staticClass:"weui-cells"},[a("div",{staticClass:"weui-cell"},[a("div",{staticClass:"weui-cell__hd",staticStyle:{position:"relative","margin-right":"10px"}},[a("img",{staticStyle:{width:"50px",display:"block"},attrs:{src:t.registerData.headimgurl}})]),a("div",{staticClass:"weui-cell__bd"},[a("p",[t._v(t._s(t.registerData.name))]),a("p",{staticStyle:{"font-size":"13px",color:"rgb(136, 136, 136)"}},[t._v("签订电子合约")])])])]),a("div",{staticClass:"weui-cells__title"},[t._v("个人资料")]),a("div",{staticClass:"weui-cells"},[t._l(["name","id","phone"],function(e,i){return a("div",{key:i,staticClass:"weui-cell"},[a("div",{staticClass:"weui-cell__bd"},[a("p",[t._v(t._s(t.PropDesc(e)))])]),a("div",{staticClass:"weui-cell__ft"},[t._v(t._s(t.registerData[e]))])])}),a("div",{staticClass:"weui-cell",attrs:{id:"uploaderCustom"}},[a("div",{staticClass:"weui-cell__bd"},[a("div",{staticClass:"weui-uploader"},[a("div",{staticClass:"weui-uploader__hd"},[a("p",{staticClass:"weui-uploader__title"},[t._v("身份证正反面照片("+t._s(t.registerData.idimgurl?t.registerData.idimgurl.length:0)+"/2)")])]),a("div",{staticClass:"weui-uploader__bd"},[a("ul",{staticClass:"weui-uploader__files",attrs:{id:"uploaderCustomFiles"}},t._l(t.registerData.idimgurl,function(e,i){return a("li",{key:i,staticClass:"weui-uploader__file",style:{"background-image":"url("+e+")"},on:{click:function(a){t.previewImg(e)}}})}),0)])])])])],2),a("div",{attrs:{id:"form"}},[a("div",{staticClass:"weui-cells__title"},[t._v("电子合约详情")]),a("div",{staticClass:"weui-cells weui-cells_form"},[a("div",{staticClass:"weui-cell"},[t._m(0),a("div",{staticClass:"weui-cell__bd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.room,expression:"formData.room"}],staticClass:"weui-input",attrs:{required:"",type:"number",placeholder:"请输入房间号",disabled:!t.isAdmin},domProps:{value:t.formData.room},on:{input:function(e){e.target.composing||t.$set(t.formData,"room",e.target.value)}}})])]),a("div",{staticClass:"weui-cell"},[t._m(1),a("div",{staticClass:"weui-cell__bd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.rent,expression:"formData.rent"}],staticClass:"weui-input",attrs:{required:"",type:"number",placeholder:"请输入月租",disabled:!t.isAdmin},domProps:{value:t.formData.rent},on:{input:function(e){e.target.composing||t.$set(t.formData,"rent",e.target.value)}}})])]),a("div",{staticClass:"weui-cell"},[t._m(2),a("div",{staticClass:"weui-cell__bd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.watercnt,expression:"formData.watercnt"}],staticClass:"weui-input",attrs:{required:"",type:"number",placeholder:"请输入水表读数",disabled:!t.isAdmin},domProps:{value:t.formData.watercnt},on:{input:function(e){e.target.composing||t.$set(t.formData,"watercnt",e.target.value)}}})])]),a("div",{staticClass:"weui-cell"},[t._m(3),a("div",{staticClass:"weui-cell__bd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.electricitycnt,expression:"formData.electricitycnt"}],staticClass:"weui-input",attrs:{required:"",type:"number",placeholder:"请输入电表读数",disabled:!t.isAdmin},domProps:{value:t.formData.electricitycnt},on:{input:function(e){e.target.composing||t.$set(t.formData,"electricitycnt",e.target.value)}}})])]),a("div",{staticClass:"weui-cell"},[t._m(4),a("div",{staticClass:"weui-cell__bd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.fromdate,expression:"formData.fromdate"}],staticClass:"weui-input",attrs:{type:"date",required:"",emptyTips:"请输入开始日期",disabled:!t.isAdmin},domProps:{value:t.formData.fromdate},on:{input:function(e){e.target.composing||t.$set(t.formData,"fromdate",e.target.value)}}})])]),a("div",{staticClass:"weui-cell"},[t._m(5),a("div",{staticClass:"weui-cell__bd"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.todate,expression:"formData.todate"}],staticClass:"weui-input",attrs:{type:"date",required:"",emptyTips:"请输入结束日期",disabled:!t.isAdmin},domProps:{value:t.formData.todate},on:{input:function(e){e.target.composing||t.$set(t.formData,"todate",e.target.value)}}})])]),t._m(6),t._m(7),t._m(8),t._m(9)])]),t.isAdmin?a("div",{staticClass:"weui-btn-area"},[a("a",{staticClass:"weui-btn weui-btn_primary",on:{click:t.onSubmit}},[t._v("生成合约")])]):t.formData.confirm?t._e():a("div",{staticClass:"weui-btn-area"},[a("a",{staticClass:"weui-btn weui-btn_primary",on:{click:t.onConfirm}},[t._v("签订合约")])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label"},[t._v("房间号")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label"},[t._v("月租")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label"},[t._v("水表读数")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label"},[t._v("电表读数")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label",attrs:{for:""}},[t._v("开始日期")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label",attrs:{for:""}},[t._v("结束日期")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-cell"},[a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label"},[t._v("水费")])]),a("div",{staticClass:"weui-cell__bd"},[a("input",{staticClass:"weui-input",attrs:{value:"2.5元/方",disabled:"disabled"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-cell"},[a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label"},[t._v("电费")])]),a("div",{staticClass:"weui-cell__bd"},[a("input",{staticClass:"weui-input",attrs:{value:"1.5元/度",disabled:"disabled"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-cell"},[a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label"},[t._v("押金")])]),a("div",{staticClass:"weui-cell__bd"},[a("input",{staticClass:"weui-input",attrs:{value:"押一付一",disabled:"disabled"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"weui-cell"},[a("div",{staticClass:"weui-cell__hd"},[a("label",{staticClass:"weui-label"},[t._v("其他")])]),a("div",{staticClass:"weui-cell__bd"},[a("input",{staticClass:"weui-input",attrs:{value:"代村收垃圾处理费5元/月",disabled:"disabled"}})])])}],l=a("9ab4"),r=a("60a3"),o=a("4305"),c=a("a29c"),n=a("73ec"),u=a("57c4"),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.registerData={},e.formData={},e.isAdmin=!1,e}return l["c"](e,t),e.prototype.mounted=function(){this.isAdmin=n["a"](),this.RequestContractInfo()},e.prototype.RequestContractInfo=function(){var t=this,e=this.$route.query.contractid,a=this.$route.query.openid;if(e){var i=c["a"],s=i+"/sunnyhouse/contract?contractid="+e;r["c"].axios.get(s).then(function(e){var a=e.data;console.log("ContractInfo",a),a&&"SUCCESS"===a.code&&(t.formData=a.data,t.RequestRegisterInfo(t.formData.openid))})}else a&&this.RequestRegisterInfo(a)},e.prototype.RequestRegisterInfo=function(t){var e=this,a=c["a"],i=a+"/sunnyhouse/register?openid="+t;r["c"].axios.get(i).then(function(a){var i=a.data;console.log("RegisterInfo",i),i&&"SUCCESS"===i.code&&(e.formData.openid=t,e.registerData=i.data)})},e.prototype.PropDesc=function(t){return o["a"][t]},e.prototype.previewImg=function(t){u.gallery(t)},e.prototype.onSubmit=function(){var t=this;u.form.validate("#form",function(e){if(e)console.log(e);else var a=u.confirm("确定提交？",function(){a.hide(t.PostFormData)})})},e.prototype.PostFormData=function(){var t=this,e=c["a"],a=e+"/sunnyhouse/contract";console.log("PostFormData",a,this.formData),r["c"].axios.post(a,this.formData).then(function(e){var a=e.data;if(console.log("PostFormDataRes",a),"SUCCESS"===a.code)if(a.msg)u.alert("提交异常:"+a.msg);else{u.toast("提交成功",1e3);a.data.contractid;setTimeout(function(){t.$router.go(-1)},1e3)}else u.alert("服务器异常:"+e)}).catch(function(t){console.log(t),u.alert("网络异常:"+t)})},e.prototype.onConfirm=function(){var t=this,e=u.confirm("确定签订合约吗？",function(){e.hide(t.PostConfirmData)})},e.prototype.PostConfirmData=function(){var t=this,e=c["a"],a=e+"/sunnyhouse/contract/confirm",i=this.formData.contractid;console.log("onConfirm",a,i),r["c"].axios.post(a,{contractid:i}).then(function(e){var a=e.data;console.log("ConfirmRes",a),"SUCCESS"===a.code?a.msg?u.alert("提交异常:"+a.msg):(u.toast("合约签订成功",1e3),t.RequestContractInfo()):u.alert("服务器异常:"+e)}).catch(function(t){console.log(t),u.alert("网络异常:"+t)})},e=l["b"]([r["a"]],e),e}(r["c"]),m=d,v=m,f=a("2877"),_=Object(f["a"])(v,i,s,!1,null,null,null);_.options.__file="Contract.vue";e["default"]=_.exports}}]);
//# sourceMappingURL=contract.918ed07c.js.map
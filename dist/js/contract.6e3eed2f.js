(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["contract"],{4305:function(t,e,i){"use strict";var a,s;i.d(e,"b",function(){return s}),i.d(e,"c",function(){return l}),i.d(e,"a",function(){return r}),function(t){t[t["reviewing"]=1]="reviewing",t[t["reviewed"]=2]="reviewed",t[t["left"]=3]="left",t[t["contract"]=4]="contract"}(s||(s={}));var l=(a={},a[s.reviewing]="待审核",a[s.reviewed]="已审核",a[s.left]="已退租",a[s.contract]="待签约",a),r={id:"身份证",name:"姓名",phone:"手机号"}},e538:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Contract"},[i("div",{staticClass:"weui-cells"},[i("div",{staticClass:"weui-cell"},[i("div",{staticClass:"weui-cell__hd",staticStyle:{position:"relative","margin-right":"10px"}},[i("img",{staticStyle:{width:"50px",display:"block"},attrs:{src:t.registerData.headimgurl}})]),i("div",{staticClass:"weui-cell__bd"},[i("p",[t._v(t._s(t.registerData.name))]),i("p",{staticStyle:{"font-size":"13px",color:"rgb(136, 136, 136)"}},[t._v("签订电子合约")])])])]),i("div",{staticClass:"weui-cells__title"},[t._v("个人资料")]),i("div",{staticClass:"weui-cells"},[t._l(["name","id","phone"],function(e,a){return i("div",{key:a,staticClass:"weui-cell"},[i("div",{staticClass:"weui-cell__bd"},[i("p",[t._v(t._s(t.PropDesc(e)))])]),i("div",{staticClass:"weui-cell__ft"},[t._v(t._s(t.registerData[e]))])])}),i("div",{staticClass:"weui-cell",attrs:{id:"uploaderCustom"}},[i("div",{staticClass:"weui-cell__bd"},[i("div",{staticClass:"weui-uploader"},[i("div",{staticClass:"weui-uploader__hd"},[i("p",{staticClass:"weui-uploader__title"},[t._v("身份证正反面照片("+t._s(t.registerData.idimgurl?t.registerData.idimgurl.length:0)+"/2)")])]),i("div",{staticClass:"weui-uploader__bd"},[i("ul",{staticClass:"weui-uploader__files",attrs:{id:"uploaderCustomFiles"}},t._l(t.registerData.idimgurl,function(e,a){return i("li",{key:a,staticClass:"weui-uploader__file",style:{"background-image":"url("+e+")"},on:{click:function(i){t.previewImg(e)}}})}),0)])])])])],2),i("div",{attrs:{id:"form"}},[i("div",{staticClass:"weui-cells__title"},[t._v("电子合约详情")]),i("div",{staticClass:"weui-cells weui-cells_form"},[i("div",{staticClass:"weui-cell"},[t._m(0),i("div",{staticClass:"weui-cell__bd"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.formData.room,expression:"formData.room",modifiers:{number:!0}}],staticClass:"weui-input",attrs:{required:"",type:"number",placeholder:"请输入房间号",disabled:!t.isAdmin},domProps:{value:t.formData.room},on:{input:function(e){e.target.composing||t.$set(t.formData,"room",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),i("div",{staticClass:"weui-cell"},[t._m(1),i("div",{staticClass:"weui-cell__bd"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.formData.rent,expression:"formData.rent",modifiers:{number:!0}}],staticClass:"weui-input",attrs:{required:"",type:"number",placeholder:"请输入月租",disabled:!t.isAdmin},domProps:{value:t.formData.rent},on:{input:function(e){e.target.composing||t.$set(t.formData,"rent",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),i("div",{staticClass:"weui-cell"},[t._m(2),i("div",{staticClass:"weui-cell__bd"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.formData.watercnt,expression:"formData.watercnt",modifiers:{number:!0}}],staticClass:"weui-input",attrs:{required:"",type:"number",placeholder:"请输入水表读数",disabled:!t.isAdmin},domProps:{value:t.formData.watercnt},on:{input:function(e){e.target.composing||t.$set(t.formData,"watercnt",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),i("div",{staticClass:"weui-cell"},[t._m(3),i("div",{staticClass:"weui-cell__bd"},[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.formData.electricitycnt,expression:"formData.electricitycnt",modifiers:{number:!0}}],staticClass:"weui-input",attrs:{required:"",type:"number",placeholder:"请输入电表读数",disabled:!t.isAdmin},domProps:{value:t.formData.electricitycnt},on:{input:function(e){e.target.composing||t.$set(t.formData,"electricitycnt",t._n(e.target.value))},blur:function(e){t.$forceUpdate()}}})])]),i("div",{staticClass:"weui-cell"},[t._m(4),i("div",{staticClass:"weui-cell__bd"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.fromdate,expression:"formData.fromdate"}],staticClass:"weui-input",attrs:{type:"date",required:"",emptyTips:"请输入开始日期",disabled:!t.isAdmin},domProps:{value:t.formData.fromdate},on:{input:function(e){e.target.composing||t.$set(t.formData,"fromdate",e.target.value)}}})])]),i("div",{staticClass:"weui-cell"},[t._m(5),i("div",{staticClass:"weui-cell__bd"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.todate,expression:"formData.todate"}],staticClass:"weui-input",attrs:{type:"date",required:"",emptyTips:"请输入结束日期",disabled:!t.isAdmin},domProps:{value:t.formData.todate},on:{input:function(e){e.target.composing||t.$set(t.formData,"todate",e.target.value)}}})])]),t._m(6),t._m(7),t._m(8),t._m(9)])]),i("div",[i("div",{staticClass:"weui-cells__title"},[t._v("订单列表")]),i("div",{staticClass:"weui-cells"},[t.formData.orderid&&t.formData.orderid.length>0?i("div",t._l(t.formData.orderid,function(e,a){return i("a",{key:a,staticClass:"weui-cell weui-cell_access",on:{click:function(i){t.showOrder(e)}}},[i("div",{staticClass:"weui-cell__bd"},[i("p",[t._v("订单"+t._s(a+1))])]),i("div",{staticClass:"weui-cell__ft"})])}),0):i("div",[t._m(10)])])]),t.isAdmin?i("div",{staticClass:"weui-cells"},[t.contractid?i("a",{staticClass:"weui-cell weui-cell_access",on:{click:t.onGenOrder}},[t._m(11),i("div",{staticClass:"weui-cell__ft"})]):t._e()]):t._e(),t.isAdmin?i("div",{staticClass:"weui-btn-area"},[i("a",{staticClass:"weui-btn weui-btn_primary",on:{click:t.onSubmit}},[t._v(t._s(t.contractid?"修改合约":"生成合约"))])]):t.formData.confirm?t._e():i("div",{staticClass:"weui-btn-area"},[i("a",{staticClass:"weui-btn weui-btn_primary",on:{click:t.onConfirm}},[t._v("签订合约")])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label"},[t._v("房间号")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label"},[t._v("月租")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label"},[t._v("水表读数")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label"},[t._v("电表读数")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label",attrs:{for:""}},[t._v("开始日期")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label",attrs:{for:""}},[t._v("结束日期")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell"},[i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label"},[t._v("水费")])]),i("div",{staticClass:"weui-cell__bd"},[i("input",{staticClass:"weui-input",attrs:{value:"2.5元/方",disabled:"disabled"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell"},[i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label"},[t._v("电费")])]),i("div",{staticClass:"weui-cell__bd"},[i("input",{staticClass:"weui-input",attrs:{value:"1.5元/度",disabled:"disabled"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell"},[i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label"},[t._v("押金")])]),i("div",{staticClass:"weui-cell__bd"},[i("input",{staticClass:"weui-input",attrs:{value:"押一付一",disabled:"disabled"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell"},[i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label"},[t._v("其他")])]),i("div",{staticClass:"weui-cell__bd"},[i("input",{staticClass:"weui-input",attrs:{value:"代村收垃圾处理费5元/月",disabled:"disabled"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-loadmore weui-loadmore_line"},[i("span",{staticClass:"weui-loadmore__tips"},[t._v("暂无订单")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell__bd"},[i("p",[t._v("新建订单")])])}],l=i("9ab4"),r=i("60a3"),o=i("4305"),c=i("a29c"),n=i("73ec"),u=i("57c4"),d=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.registerData={},e.formData={},e.isAdmin=!1,e.contractid="",e}return l["c"](e,t),e.prototype.mounted=function(){this.isAdmin=n["a"](),this.RequestContractInfo()},e.prototype.RequestContractInfo=function(){var t=this,e=this.$route.query.contractid,i=this.$route.query.openid;if(e){this.contractid=e;var a=c["a"],s=a+"/sunnyhouse/contract?contractid="+e;r["b"].axios.get(s).then(function(e){var i=e.data;console.log("ContractInfo",i),i&&"SUCCESS"===i.code&&(t.formData=i.data,t.RequestRegisterInfo(t.formData.openid))})}else i&&this.RequestRegisterInfo(i)},e.prototype.RequestRegisterInfo=function(t){var e=this,i=c["a"],a=i+"/sunnyhouse/register?openid="+t;r["b"].axios.get(a).then(function(i){var a=i.data;console.log("RegisterInfo",a),a&&"SUCCESS"===a.code&&(e.formData.openid=t,e.registerData=a.data)})},e.prototype.PropDesc=function(t){return o["a"][t]},e.prototype.previewImg=function(t){u.gallery(t)},e.prototype.onSubmit=function(){var t=this;u.form.validate("#form",function(e){if(e)console.log(e);else var i=u.confirm("确定提交？",function(){i.hide(t.PostFormData)})})},e.prototype.onGenOrder=function(){this.$router.push("genorder?contractid="+this.contractid)},e.prototype.PostFormData=function(){var t=this,e=c["a"],i=e+"/sunnyhouse/contract";console.log("PostFormData",i,this.formData),r["b"].axios.post(i,this.formData).then(function(e){var i=e.data;if(console.log("PostFormDataRes",i),"SUCCESS"===i.code)if(i.msg)u.alert("提交异常:"+i.msg);else{u.toast("提交成功",1e3);i.data.contractid;setTimeout(function(){t.$router.go(-1)},1e3)}else u.alert("服务器异常:"+e)}).catch(function(t){console.log(t),u.alert("网络异常:"+t)})},e.prototype.onConfirm=function(){var t=this,e=u.confirm("确定签订合约吗？",function(){e.hide(t.PostConfirmData)})},e.prototype.PostConfirmData=function(){var t=this,e=c["a"],i=e+"/sunnyhouse/contract/confirm",a=this.formData.contractid;console.log("onConfirm",i,a),r["b"].axios.post(i,{contractid:a}).then(function(e){var i=e.data;console.log("ConfirmRes",i),"SUCCESS"===i.code?i.msg?u.alert("提交异常:"+i.msg):(u.toast("合约签订成功",1e3),t.RequestContractInfo()):u.alert("服务器异常:"+e)}).catch(function(t){console.log(t),u.alert("网络异常:"+t)})},e.prototype.showOrder=function(t){this.$router.push("/order?orderid="+t)},e=l["b"]([r["a"]],e),e}(r["b"]),m=d,_=m,v=i("2877"),f=Object(v["a"])(_,a,s,!1,null,null,null);f.options.__file="Contract.vue";e["default"]=f.exports}}]);
//# sourceMappingURL=contract.6e3eed2f.js.map
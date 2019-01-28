(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["register"],{4305:function(t,e,i){"use strict";var a,s;i.d(e,"b",function(){return s}),i.d(e,"c",function(){return l}),i.d(e,"a",function(){return o}),function(t){t[t["reviewing"]=1]="reviewing",t[t["reviewed"]=2]="reviewed",t[t["left"]=3]="left",t[t["contract"]=4]="contract"}(s||(s={}));var l=(a={},a[s.reviewing]="待审核",a[s.reviewed]="已审核",a[s.left]="已退租",a[s.contract]="待签约",a),o={id:"身份证",name:"姓名",phone:"手机号"}},"73cf":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Home"},[i("div",{staticClass:"weui-cells__title"},[t._v("注册页面")]),i("div",{staticClass:"weui-cells"},[i("div",{staticClass:"weui-cell"},[i("div",{staticClass:"weui-cell__hd",staticStyle:{position:"relative","margin-right":"10px"}},[i("img",{staticStyle:{width:"50px",display:"block"},attrs:{src:t.loginUser.headimgurl}})]),i("div",{staticClass:"weui-cell__bd"},[i("p",[t._v("你好，"+t._s(t.loginUser.nickname))]),i("p",{staticStyle:{"font-size":"13px",color:"#888888"}},[t._v(t._s(t.stateMsg))])])])]),i("div",{attrs:{id:"form"}},[i("div",{staticClass:"weui-cells__title"},[t._v(t._s(t.shortMsg))]),i("div",{staticClass:"weui-cells weui-cells_form"},[i("div",{staticClass:"weui-cell"},[t._m(0),i("div",{staticClass:"weui-cell__bd"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.name,expression:"formData.name"}],staticClass:"weui-input",attrs:{required:"",placeholder:"请输入姓名"},domProps:{value:t.formData.name},on:{input:function(e){e.target.composing||t.$set(t.formData,"name",e.target.value)}}})])]),i("div",{staticClass:"weui-cell"},[t._m(1),i("div",{staticClass:"weui-cell__bd"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.id,expression:"formData.id"}],staticClass:"weui-input",attrs:{type:"text",required:"",pattern:"REG_IDNUM",placeholder:"请输入身份证号",notMatchTips:"请输入正确的身份证号码"},domProps:{value:t.formData.id},on:{input:function(e){e.target.composing||t.$set(t.formData,"id",e.target.value)}}})])]),i("div",{staticClass:"weui-cell weui-cell_vcode"},[t._m(2),i("div",{staticClass:"weui-cell__bd"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.phone,expression:"formData.phone"}],staticClass:"weui-input",attrs:{type:"number",required:"",pattern:"[0-9]{11}",placeholder:"请输入手机号",notMatchTips:"请输入正确的手机号"},domProps:{value:t.formData.phone},on:{input:function(e){e.target.composing||t.$set(t.formData,"phone",e.target.value)}}})]),i("div",{staticClass:"weui-cell__ft"},[i("button",{staticClass:"weui-vcode-btn",on:{click:t.onGetVerificationCode}},[t._v("获取验证码")])])]),i("div",{staticClass:"weui-cell"},[t._m(3),i("div",{staticClass:"weui-cell__bd"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.formData.code,expression:"formData.code"}],staticClass:"weui-input",attrs:{required:"",type:"number",placeholder:"请输入验证码"},domProps:{value:t.formData.code},on:{input:function(e){e.target.composing||t.$set(t.formData,"code",e.target.value)}}})])]),i("div",{staticClass:"weui-cell",attrs:{id:"uploaderCustom"}},[i("div",{staticClass:"weui-cell__bd"},[i("div",{staticClass:"weui-uploader"},[i("div",{staticClass:"weui-uploader__hd"},[i("p",{staticClass:"weui-uploader__title"},[t._v("上传身份证正反面照片("+t._s(t.uploadCustomFileList.length)+"/2)")])]),i("div",{staticClass:"weui-uploader__bd"},[i("ul",{staticClass:"weui-uploader__files",attrs:{id:"uploaderCustomFiles"},on:{click:t.onPreviewImg}},t._l(t.registerData.idimgurl,function(t,e){return i("li",{key:e,staticClass:"weui-uploader__file",style:{"background-image":"url("+t+")"}})}),0),t._m(4)])])])])]),i("label",{staticClass:"weui-agree",attrs:{for:"weuiAgree"}},[i("input",{staticClass:"weui-agree__checkbox",attrs:{id:"weuiAgree",type:"checkbox"}}),i("span",{staticClass:"weui-agree__text"},[t._v("\n        阅读并同意\n        "),i("a",{on:{click:function(e){t.$router.push("/agreement")}}},[t._v("《相关条款》")])])]),i("div",{staticClass:"weui-btn-area"},[i("a",{staticClass:"weui-btn weui-btn_primary",on:{click:t.onSubmit}},[t._v("确定")]),t.isAdmin?i("a",{staticClass:"weui-btn weui-btn_default",on:{click:function(e){t.$router.push("/manager")}}},[t._v("管理")]):t._e()])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label"},[t._v("姓名")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label"},[t._v("身份证")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label"},[t._v("手机号")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell__hd"},[i("label",{staticClass:"weui-label"},[t._v("验证码")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-uploader__input-box"},[i("input",{staticClass:"weui-uploader__input",attrs:{id:"uploaderCustomInput",type:"file",accept:"image/*",multiple:""}})])}],l=i("9ab4"),o=i("60a3"),r=i("3a3d"),u=i("a29c"),n=i("73ec"),c=i("4305"),d=i("57c4"),p=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.loginUser={openid:"0000"},e.shortMsg="完善个人信息，可使用信用卡支付",e.stateMsg="未签约",e.formData={},e.isAdmin=!1,e.registerData={},e.uploadCustomFileList=[],e.uploadCustomFileUrl=[],e}return l["c"](e,t),e.prototype.mounted=function(){this.loginUser=r["a"](),this.isAdmin=n["a"](),this.RegisterWeUI(),this.RequestRegisterData()},e.prototype.RequestRegisterData=function(){var t=this,e=this.loginUser.openid,i=u["a"],a=i+"/sunnyhouse/register?openid="+e;o["b"].axios.get(a).then(function(e){var i=e.data;if(console.log("RegisterData",i),i&&"SUCCESS"===i.code){var a=i.data;a&&(t.formData=l["a"]({},a),t.registerData=l["a"]({},a),t.stateMsg="资料已提交，等待管理员审核")}})},e.prototype.RegisterWeUI=function(){var t=this,e=u["a"];d.uploader("#uploaderCustom",{url:e+"/sunnyhouse/upload",auto:!1,onQueued:function(){t.uploadCustomFileList.push(this),t.registerData.idimgurl=[]},onBeforeQueued:function(e){if(["image/jpg","image/jpeg","image/png","image/gif"].indexOf(this.type)<0)return d.alert("请上传图片"),!1;if(this.size>10485760)return d.alert("请上传不超过10M的图片"),!1;var i=e.length+t.uploadCustomFileList.length,a=2;return i>a?(d.alert("最多只能上传"+a+"张图片，请重新选择"),!1):void 0},onSuccess:function(e){console.log("onSuccess",this,e),e.data&&e.data.url?t.uploadCustomFileUrl.push(e.data.url):t.uploadCustomFileUrl.push("error"),t.uploadCustomFileUrl.length===t.uploadCustomFileList.length&&t.uploadImageCallback(t.uploadCustomFileUrl)},onError:function(e){console.log(this,e),t.uploadCustomFileUrl.push("error"),t.uploadCustomFileUrl.length===t.uploadCustomFileList.length&&t.uploadImageCallback(t.uploadCustomFileUrl)}})},e.prototype.uploadImage=function(t){this.uploadImageCallback=t,this.uploadCustomFileUrl=[],this.uploadCustomFileList.forEach(function(t){t.upload()})},e.prototype.onPreviewImg=function(t){var e=t.target;while(!e.classList.contains("weui-uploader__file")&&e)e=e.parentNode;if(e){var i=e.getAttribute("style")||"",a=parseInt(e.getAttribute("data-id"),10);i&&(i=i.match(/url\((.*?)\)/)[1].replace(/"/g,""));var s=this,l=d.gallery(i,{onDelete:function(){d.confirm("确定删除该图片？",function(){for(var t,i=0,o=s.uploadCustomFileList.length;i<o;++i){var r=s.uploadCustomFileList[i];if(r.id===a){t=i;break}}void 0!==t&&s.uploadCustomFileList.splice(t,1),e.remove(),l.hide()})}})}},e.prototype.onSubmit=function(){var t=this;d.form.validate("#form",function(e){if(!e)if(t.registerData.idimgurl&&2===t.registerData.idimgurl.length){if(JSON.stringify(t.formData)===JSON.stringify(t.registerData))return void d.alert("数据没有变化，无需重复提交");t.PostFormData()}else{if(t.uploadCustomFileList.length<2)return void d.alert("请上传身份证正反面照片各一张");var i=d.loading("提交中...");t.uploadImage(function(e){i.hide(),-1!==e.indexOf("error")?d.alert("照片上传失败，请重试"):(t.formData.idimgurl=e,t.PostFormData())})}},{regexp:{IDNUM:/(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/}})},e.prototype.PostFormData=function(){this.formData.openid=this.loginUser.openid,this.formData.headimgurl=this.loginUser.headimgurl,this.formData.state=c["b"].reviewing;var t=u["a"],e=t+"/sunnyhouse/register";console.log("PostFormData",e,this.formData),o["b"].axios.post(e,this.formData).then(function(t){var e=t.data;"SUCCESS"===e.code?e.msg?d.alert("提交异常\n"+e.msg):d.toast("提交成功",1e3):d.alert("网络异常\n"+t)})},e.prototype.onGetVerificationCode=function(){d.toast("验证码已发送",{duration:1e3})},e=l["b"]([o["a"]],e),e}(o["b"]),m=p,f=m,g=i("2877"),v=Object(g["a"])(f,a,s,!1,null,null,null);v.options.__file="Register.vue";e["default"]=v.exports}}]);
//# sourceMappingURL=register.56680dd8.js.map
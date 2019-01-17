<template>
  <div class="Home">
    <div class="weui-cells__title">个人主页</div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img :src="loginUser.headimgurl" style="width: 50px;display: block">
        </div>
        <div class="weui-cell__bd">
          <p>你好，{{loginUser.nickname}}</p>
          <p style="font-size: 13px;color: #888888;">{{stateMsg}}</p>
        </div>
      </div>
    </div>
    <div id="form">
      <div class="weui-cells__title">{{shortMsg}}</div>
      <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">姓名</label>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" v-model="formData.name" required placeholder="请输入姓名">
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">身份证</label>
          </div>
          <div class="weui-cell__bd">
            <input
              v-model="formData.id"
              class="weui-input"
              type="text"
              required
              pattern="REG_IDNUM"
              placeholder="请输入身份证号"
              notMatchTips="请输入正确的身份证号码"
            >
          </div>
        </div>
        <div class="weui-cell weui-cell_vcode">
          <div class="weui-cell__hd">
            <label class="weui-label">手机号</label>
          </div>
          <div class="weui-cell__bd">
            <input
              v-model="formData.phone"
              class="weui-input"
              type="number"
              required
              pattern="[0-9]{11}"
              placeholder="请输入手机号"
              notMatchTips="请输入正确的手机号"
            >
          </div>
          <div class="weui-cell__ft">
            <button class="weui-vcode-btn" @click="onGetVerificationCode">获取验证码</button>
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">验证码</label>
          </div>
          <div class="weui-cell__bd">
            <input
              v-model="formData.code"
              class="weui-input"
              required
              type="number"
              placeholder="请输入验证码"
            >
          </div>
        </div>
        <div class="weui-cell" id="uploaderCustom">
          <div class="weui-cell__bd">
            <div class="weui-uploader">
              <div class="weui-uploader__hd">
                <p class="weui-uploader__title">上传身份证正反面照片({{uploadCustomFileList.length}}/2)</p>
              </div>
              <div class="weui-uploader__bd">
                <ul @click="onPreviewImg" class="weui-uploader__files" id="uploaderCustomFiles">
                  <li
                    v-for="(imgurl, index) in registerData.idimgurl"
                    :key="index"
                    class="weui-uploader__file"
                    :style="{'background-image': 'url(' + imgurl + ')'}"
                  ></li>
                </ul>
                <div class="weui-uploader__input-box">
                  <input
                    id="uploaderCustomInput"
                    class="weui-uploader__input"
                    type="file"
                    accept="image/*"
                    multiple
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <label for="weuiAgree" class="weui-agree">
        <input id="weuiAgree" type="checkbox" class="weui-agree__checkbox">
        <span class="weui-agree__text">
          阅读并同意
          <a @click="$router.push('/agreement');">《相关条款》</a>
        </span>
      </label>
      <div class="weui-btn-area">
        <a class="weui-btn weui-btn_primary" @click="onSubmit">确定</a>
      </div>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
const weui = require('weui.js');
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import * as user from '@/models/user';
import * as define from '@/defines/define';
import * as register from '@/models/register.ts';

interface FORMDATA extends register.DATA {
  code?: string;
}

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private loginUser: user.User = { openid: '0000' };
  private shortMsg = '完善个人信息，可使用信用卡支付';
  private stateMsg = '未签约';
  private formData: FORMDATA = {};
  // private formData: FORMDATA = {
  //   id: '123456789123456789',
  //   name: 'testman',
  //   phone: '12345678912',
  //   code: '1234',
  // };

  private registerData: register.DATA = {};

  private uploadCustomFileList: any[] = [];
  private uploadCustomFileUrl: string[] = [];
  private uploadImageCallback: any;

  private mounted() {
    this.loginUser = user.get() as user.User;
    this.RegisterWeUI();
    this.RequestRegisterData();
  }

  private RequestRegisterData() {
    const openid = this.loginUser.openid;
    const host = define.API_HOST;
    const api = host + '/sunnyhouse/register?openid=' + openid;
    Vue.axios.get(api).then((response) => {
      const data = response.data;
      console.log('RegisterData', data);
      if (data && data.code === 'SUCCESS') {
        const userData = data.data as register.DATA;
        if (userData) {
          this.formData = { ...userData };
          this.registerData = { ...userData };
          this.stateMsg = '资料已提交，等待管理员审核';
        }
      }
    });
  }

  private RegisterWeUI() {
    const that = this;
    const host = define.API_HOST;
    weui.uploader('#uploaderCustom', {
      url: host + '/sunnyhouse/upload',
      auto: false,
      onQueued() {
        that.uploadCustomFileList.push(this);
        // 打算上传新的话，先清空原来的
        that.registerData.idimgurl = [];
      },
      onBeforeQueued(files: any) {
        if (['image/jpg', 'image/jpeg', 'image/png', 'image/gif'].indexOf(this.type) < 0) {
          weui.alert('请上传图片');
          return false;
        }
        if (this.size > 10 * 1024 * 1024) {
          weui.alert('请上传不超过10M的图片');
          return false;
        }
        const cnt = files.length + that.uploadCustomFileList.length;
        const maxCnt = 2;
        if (cnt > maxCnt) {
          weui.alert(`最多只能上传${maxCnt}张图片，请重新选择`);
          return false;
        }
      },
      onSuccess(ret: { code: string, data: { [key: string]: string } }) {
        console.log('onSuccess', this, ret);
        if (ret.data && ret.data.url) {
          that.uploadCustomFileUrl.push(ret.data.url);
        } else {
          that.uploadCustomFileUrl.push('error');
        }
        if (that.uploadCustomFileUrl.length === that.uploadCustomFileList.length) {
          that.uploadImageCallback(that.uploadCustomFileUrl);
        }
      },
      onError(err: any) {
        console.log(this, err);
        that.uploadCustomFileUrl.push('error');
        if (that.uploadCustomFileUrl.length === that.uploadCustomFileList.length) {
          that.uploadImageCallback(that.uploadCustomFileUrl);
        }
      },
    });
  }

  private uploadImage(cb: (url: string[]) => void) {
    this.uploadImageCallback = cb;
    this.uploadCustomFileUrl = [];
    this.uploadCustomFileList.forEach((file) => {
      file.upload();
    });
  }

  private onPreviewImg(e: any) {
    let target = e.target;
    while (!target.classList.contains('weui-uploader__file') && target) {
      target = target.parentNode;
    }
    if (!target) { return; }

    let url = target.getAttribute('style') || '';
    const id = parseInt(target.getAttribute('data-id'), 10);
    if (url) {
      url = url.match(/url\((.*?)\)/)[1].replace(/"/g, '');
    }
    const that = this;
    const gallery = weui.gallery(url, {
      onDelete() {
        weui.confirm('确定删除该图片？', () => {
          let index;
          for (let i = 0, len = that.uploadCustomFileList.length; i < len; ++i) {
            const file = that.uploadCustomFileList[i];
            if (file.id === id) {
              index = i;
              break;
            }
          }
          if (index !== undefined) {
            that.uploadCustomFileList.splice(index, 1);
          }
          target.remove();
          gallery.hide();
        });
      },
    });
  }

  private onSubmit() {
    weui.form.validate('#form', (error: { dom: object, msg: string }) => {
      if (!error) {
        if (this.registerData.idimgurl && this.registerData.idimgurl.length === 2) {
          if (JSON.stringify(this.formData) === JSON.stringify(this.registerData)) {
            weui.alert('数据没有变化，无需重复提交');
            return;
          }
          this.PostFormData();
        } else {
          if (this.uploadCustomFileList.length < 2) {
            weui.alert('请上传身份证正反面照片各一张');
            return;
          }
          const loading = weui.loading('提交中...');
          this.uploadImage((urls: string[]) => {
            loading.hide();
            if (urls.indexOf('error') !== -1) {
              weui.alert('照片上传失败，请重试');
            } else {
              this.formData.idimgurl = urls;
              this.PostFormData();
            }
          });
        }
      }
    }, {
        regexp: {
          IDNUM: /(?:^\d{15}$)|(?:^\d{18}$)|^\d{17}[\dXx]$/,
        },
      },
    );
  }

  private PostFormData() {
    this.formData.openid = this.loginUser.openid;
    this.formData.headimgurl = this.loginUser.headimgurl;
    this.formData.state = register.STATE.reviewing;
    const host = define.API_HOST;
    const api = host + '/sunnyhouse/register';
    console.log('PostFormData', api, this.formData);
    Vue.axios.post(api, this.formData).then((response) => {
      const data = response.data;
      if (data.code === 'SUCCESS') {
        if (data.msg) {
          weui.alert('提交异常\n' + data.msg);
        } else {
          weui.toast('提交成功', 1000);
        }
      } else {
        weui.alert('网络异常\n' + response);
      }
    });
  }

  private onGetVerificationCode() {
    weui.toast('验证码已发送', {
      duration: 1000,
    });
  }

}
</script>

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
    <div class="weui-cells__title">{{shortMsg}}</div>
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">身份证</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" placeholder="请输入身份证号">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">姓名</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" placeholder="请输入姓名">
        </div>
      </div>
      <div class="weui-cell weui-cell_vcode">
        <div class="weui-cell__hd">
          <label class="weui-label">手机号</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" placeholder="请输入手机号">
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
          <input class="weui-input" type="number" placeholder="请输入验证码">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <label class="weui-label">房间号</label>
        </div>
        <div class="weui-cell__bd">
          <input class="weui-input" type="number" placeholder="请输入房间号">
        </div>
      </div>
      <div class="weui-cell" id="uploaderCustom">
        <div class="weui-cell__bd">
          <div class="weui-uploader">
            <div class="weui-uploader__hd">
              <p class="weui-uploader__title">上传身份证正反面照片({{uploadCustomFileList.length}}/2)</p>
            </div>
            <div class="weui-uploader__bd">
              <ul class="weui-uploader__files" id="uploaderCustomFiles" @click="onPreviewImg"></ul>
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
        <a href="/agreement">《相关条款》</a>
      </span>
    </label>
    <div class="weui-btn-area">
      <a class="weui-btn weui-btn_primary" @click="onSubmit">确定</a>
    </div>
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import * as user from '../models/user';
const weui = require('weui.js');

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  private loginUser: user.User = { openid: '0000' };
  private shortMsg = '完善个人信息，可在线支付账单';
  private stateMsg = '未签约';

  private uploadCustomFileList: any[] = [];

  private mounted() {
    this.loginUser = user.get() as user.User;
    const that = this;
    weui.uploader('#uploaderCustom', {
      url: 'http://localhost:8002/upload',
      auto: false,
      onQueued() {
        that.uploadCustomFileList.push(this);
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
    });
  }

  private uploadFileList() {
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
    const msg = '资料已提交，等待管理员审核';
    this.stateMsg = msg;
    this.uploadFileList();
    weui.toast('资料已提交', {
      duration: 1000,
    });
  }

  private onGetVerificationCode() {
    weui.toast('验证码已发送', {
      duration: 1000,
    });
  }

}
</script>

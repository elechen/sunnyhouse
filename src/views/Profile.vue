<template>
  <div class="Profile">
    <div class="weui-cells__title">个人资料</div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative; margin-right: 10px;">
          <img :src="registerData.headimgurl" style="width: 50px; display: block;">
        </div>
        <div class="weui-cell__bd">
          <p>{{registerData.name}}</p>
          <p style="font-size: 13px; color: rgb(136, 136, 136);">{{StateDesc(registerData.state)}}</p>
        </div>
      </div>
      <div v-for="(key, index) in ['name', 'id', 'phone']" :key="index" class="weui-cell">
        <div class="weui-cell__bd">
          <p>{{PropDesc(key)}}</p>
        </div>
        <div class="weui-cell__ft">{{registerData[key]}}</div>
      </div>
      <div class="weui-cell" id="uploaderCustom">
        <div class="weui-cell__bd">
          <div class="weui-uploader">
            <div class="weui-uploader__hd">
              <p
                class="weui-uploader__title"
              >身份证正反面照片({{registerData.idimgurl ? registerData.idimgurl.length : 0}}/2)</p>
            </div>
            <div class="weui-uploader__bd">
              <ul class="weui-uploader__files" id="uploaderCustomFiles">
                <li
                  v-for="(imgurl, index) in registerData.idimgurl"
                  :key="index"
                  class="weui-uploader__file"
                  :style="{'background-image': 'url(' + imgurl + ')'}"
                  @click="previewImg(imgurl)"
                ></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="weui-cells__title">合约列表</div>
      <div class="weui-cells">
        <div v-if="registerData.contractid">
          <a
            class="weui-cell weui-cell_access"
            v-for="(id, idx) in registerData.contractid"
            :key="idx"
            @click="showContract(id)"
          >
            <div class="weui-cell__bd">
              <p>电子合约{{idx+1}}</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
        </div>
        <div v-else>
          <div class="weui-loadmore weui-loadmore_line">
            <span class="weui-loadmore__tips">暂无数据</span>
          </div>
        </div>
      </div>
      <div v-if="isAdmin" class="weui-cells">
        <a class="weui-cell weui-cell_access" @click="addContract()">
          <div class="weui-cell__bd">
            <p>新增合约</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
      </div>
    </div>
    <div v-if="isAdmin" class="weui-btn-area">
      <a
        v-if="registerData.state === 1"
        class="weui-btn weui-btn_primary"
        @click="onSubmit(true)"
      >审核通过</a>
      <a class="weui-btn weui-btn_default" @click="onSubmit(false)">打回重填</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
const weui = require('weui.js');
import * as user from '@/models/user';
import * as register from '@/models/register';
import * as define from '@/defines/define';
import * as utils from '@/utils/utils';

@Component
export default class Profile extends Vue {
  private openid: string | undefined = '';
  private registerData: register.DATA = {};
  private isAdmin = false;
  private mounted() {
    this.isAdmin = utils.IsAdmin();
    this.openid = this.$route.query.openid as string;
    if (!this.openid) {
      this.openid = user.get() ? (user.get() as user.User).openid : '';
    }
    if (!this.openid) {
      this.$router.push('/login');
      return;
    }
    this.RequestRegisterInfo(this.openid);
  }

  private RequestRegisterInfo(openid?: string) {
    const host = define.API_HOST;
    const api = host + '/sunnyhouse/register?openid=' + openid;
    Vue.axios.get(api).then((response) => {
      const data = response.data;
      console.log('RegisterInfo', data);
      if (data && data.code === 'SUCCESS') {
        this.registerData = data.data as register.DATA;
      }
    });
  }

  private onSubmit(bPass: boolean) {
    const host = define.API_HOST;
    const api = host + '/sunnyhouse/register/state';
    const state = bPass ? register.STATE.reviewed : register.STATE.reviewing;
    Vue.axios.post(api, { openid: this.openid, state }).then((response) => {
      const data = response.data;
      console.log('RegisterInfo', data);
      if (data && data.msg) {
        weui.alert('提交失败:' + data.msg);
      } else if (data && data.code === 'SUCCESS') {
        this.$router.go(-1);
      } else {
        weui.alert('服务器异常:' + response);
      }
    }).catch((reason) => {
      weui.alert('网络异常:' + reason);
    });
  }

  private PropDesc(k: string): string {
    return register.PropDesc[k];
  }

  private StateDesc(k: number): string {
    return register.StateDesc[k];
  }

  private previewImg(imgurl: string) {
    weui.gallery(imgurl);
  }

  private showContract(id: string) {
    this.$router.push('contract?contractid=' + id);
  }

  private addContract() {
    this.$router.push('contract?openid=' + this.openid);
  }
}
</script>

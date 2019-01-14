<template>
  <div class="manager">
    <div @click="show=!show" class="weui-flex category">
      <p class="weui-flex__item">菜单</p>
      <img src="https://weui.io/images/icon_nav_form.png" alt>
    </div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeInDown faster"
      leave-active-class="animated fadeOutUp faster"
    >
      <div v-if="show" class="weui-cells weui-cells-first">
        <a
          v-for="(v, idx) in btns"
          v-bind:key="idx"
          @click="showPage(v.state)"
          class="weui-cell weui-cell_access"
        >
          <div class="weui-cell__bd">
            <p :style="!v.visible ? 'color: #888888;' : ''">{{v.name}}</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
      </div>
    </transition>
    <div class="weui-cells__title">{{curPage}}</div>
    <div class="weui-cells" :class="classObject">
      <div class="weui-cell weui-cell_access" v-for="(v, idx) in filerUser" v-bind:key="idx">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img
            src="https://weui.io/images/pic_160.png"
            style="width: 50px;height: 50px;display: block"
          >
        </div>
        <div class="weui-cell__bd">
          <p>{{v.name}}</p>
          <p style="font-size: 13px;color: #888888;">摘要信息</p>
        </div>
        <div class="weui-cell__ft"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import 'animate.css';
import * as user from '@/models/user';
import { DATA } from '@/models/register.ts';
const DEV = true;

@Component
export default class Manager extends Vue {
  private show = false;
  private curPage = '已签约';
  private curState = 3;
  private btns = [
    { name: '待审核', state: 1, visible: false },
    { name: '待签约', state: 2, visible: false },
    { name: '已签约', state: 3, visible: true },
    { name: '已退租', state: 4, visible: false },
  ];
  private classObject = '';
  private userInfo: DATA[] = [];
  private loginUser: user.User = { openid: '0000' };

  private mounted() {
    this.loginUser = user.get() as user.User;
    this.RequestRegisterData();
  }

  private RequestRegisterData() {
    const openid = 'all';
    const host = DEV ? 'http://localhost:8000' : 'http://pspjjc.chenxiaofeng.vip';
    const api = host + '/sunnyhouse/register?openid=' + openid;
    Vue.axios.get(api).then((response) => {
      const data = response.data;
      console.log('RegisterData', data);
      if (data && data.code === 'SUCCESS') {
        this.userInfo = data.data as DATA[];
      }
    });
  }

  private showPage(state: number) {
    if (this.curState === state) {
      return;
    }
    const btn = this.btns[state - 1];
    this.curState = state;
    this.curPage = btn.name;
    this.btns.forEach((element) => {
      element.visible = element.state === state;
    });
    this.showSwitchAni();
  }

  private showSwitchAni() {
    this.classObject = 'animated fadeIn faster';
    setTimeout(() => {
      this.classObject = '';
    }, 500);
  }

  get filerUser() {
    return this.userInfo.filter((one) => {
      return one.state === this.curState;
    });
  }
}

</script>

<style scoped>
img {
  width: 30px;
  height: 30px;
}

li:first-child {
  margin-top: 0;
}

.category {
  background-color: #fff;
  overflow: hidden;
  border-radius: 2px;
  cursor: pointer;
}

.weui-cells-first {
  margin-top: 0;
}

.weui-flex {
  padding: 20px;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
</style>


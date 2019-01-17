<template>
  <div class="manager" style="transform-style: preserve-3d;">
    <div @click="show=!show" class="weui-flex category">
      <p class="weui-flex__item">菜单</p>
      <img src="https://weui.io/images/icon_nav_form.png" alt>
    </div>
    <transition enter-active-class="animated fadeInDown faster">
      <nav v-if="show" class="weui-cells weui-cells-first">
        <a
          v-for="(v, idx) in btns"
          v-bind:key="idx"
          @click="showPage(v.state)"
          class="weui-cell weui-cell_access"
        >
          <div class="weui-cell__bd">
            <p :style="!v.selected ? 'color: #888888;' : ''">{{v.name}}</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
      </nav>
    </transition>
    <div class="weui-cells__title">{{pageName}}</div>
    <div class="weui-cells" :class="classObject">
      <div v-if="filerUser.length > 0">
        <div class="weui-cell weui-cell_access" v-for="(v, idx) in filerUser" v-bind:key="idx">
          <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
            <img :src="v.headimgurl" style="width: 50px;height: 50px;display: block">
          </div>
          <div @click="showContract(v)" class="weui-cell__bd">
            <p>{{v.name}}</p>
            <p style="font-size: 13px;color: #888888;">{{v.shortdesc}}</p>
          </div>
          <div class="weui-cell__ft"></div>
        </div>
      </div>
      <div v-else>
        <div class="weui-loadmore weui-loadmore_line">
          <span class="weui-loadmore__tips">暂无数据</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import 'animate.css';
import * as user from '@/models/user';
import * as contract from '@/models/contract';
import * as register from '@/models/register.ts';
import * as define from '@/defines/define';

const CONTRACT_STATE = 4;
interface RegisterData extends register.DATA {
  shortdesc?: string;
  tmpcontractid?: string;
}

@Component
export default class Manager extends Vue {
  private show = false;
  private curState = register.STATE.reviewed;
  private btns = [
    { name: '待审核', state: register.STATE.reviewing, selected: false },
    { name: '已审核', state: register.STATE.reviewed, selected: true },
    { name: '已退租', state: register.STATE.left, selected: false },
    { name: '待签约', state: register.STATE.contract, selected: false },
  ];
  private classObject = '';
  private userInfo: register.DATA[] = [];
  private loginUser: user.User = { openid: '0000' };
  private newContract: contract.DATA[] = [];

  private mounted() {
    this.loginUser = user.get() as user.User;
    this.RequestRegisterData();
    this.RequestNewContractData();
  }

  private RequestRegisterData() {
    const openid = 'all';
    const host = define.API_HOST;
    const api = host + '/sunnyhouse/register?openid=' + openid;
    Vue.axios.get(api).then((response) => {
      const data = response.data;
      console.log('RegisterData', data);
      if (data && data.code === 'SUCCESS') {
        this.userInfo = data.data as register.DATA[];
      }
    });
  }

  private RequestNewContractData() {
    const host = define.API_HOST;
    const api = host + '/sunnyhouse/contract/new/?detail=1';
    Vue.axios.get(api).then((response) => {
      const data = response.data;
      console.log('NewContractData', data);
      if (data && data.code === 'SUCCESS' && data.data) {
        this.newContract = data.data as contract.DATA[];
      }
    });
  }

  private showPage(state: number) {
    if (this.curState === state) {
      return;
    }
    const btn = this.btns[state - 1];
    this.curState = state;
    this.btns.forEach((element) => {
      element.selected = element.state === state;
    });
    this.showSwitchAni();
  }

  private showContract(data: RegisterData) {
    if (data.tmpcontractid) {
      this.$router.push('contract?contractid=' + data.tmpcontractid);
    } else {
      this.$router.push('profile?openid=' + data.openid);
    }
  }

  private showSwitchAni() {
    this.classObject = 'animated fadeIn faster';
    setTimeout(() => {
      this.classObject = '';
    }, 500);
  }

  get filerUser() {
    const userInfoList: RegisterData[] = [];
    if (this.curState === CONTRACT_STATE) {
      for (const c of this.newContract) {
        for (const u of this.userInfo) {
          if (u.openid === c.openid) {
            const tmpcontractid = c.contractid;
            const shortdesc = `${c.room}房间待签约`;
            userInfoList.push({ ...u, tmpcontractid, shortdesc });
          }
        }
      }
    } else {
      for (const one of this.userInfo) {
        if (one.state === this.curState) {
          const shortdesc = register.StateDesc[one.state];
          userInfoList.push({ ...one, shortdesc });
        }
      }
    }
    return userInfoList;
  }

  get pageName() {
    for (const element of this.btns) {
      if (element.state === this.curState) {
        return element.name;
      }
    }
  }
}

</script>

<style scoped>
img {
  width: 30px;
  height: 30px;
}

nav {
  transform: translateZ(1em);
}

li:first-child {
  margin-top: 0;
}

.category {
  background-color: #fff;
  overflow: hidden;
  border-radius: 2px;
  cursor: pointer;
  transform: translateZ(999em);
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


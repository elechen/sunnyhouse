<template>
  <div class="Home">
    <div class="weui-cells__title">个人主页</div>
    <div class="weui-cells">
      <div @click="router.push('/profile')" class="weui-cell">
        <div class="weui-cell__hd" style="position: relative;margin-right: 10px;">
          <img :src="loginUser.headimgurl" style="width: 50px;display: block">
        </div>
        <div class="weui-cell__bd">
          <p>你好，{{loginUser.nickname}}</p>
          <p style="font-size: 13px;color: #888888;">{{stateMsg}}</p>
        </div>
      </div>
    </div>
    <div v-if="!isAdmin" class="weui-cells">
      <a
        v-for="(id, idx) in registerData.contractid"
        :key="idx"
        class="weui-cell weui-cell_access"
        @click="$router.push('contract?contractid=id')"
      >
        <div class="weui-cell__bd">
          <p>{{getContractVal(id, 'room')}}房电子合约</p>
        </div>
        <div class="weui-cell__ft"></div>
      </a>
      <a
        v-for="(v, idx) in unpayOrder"
        :key="idx"
        class="weui-cell weui-cell_access"
        @click="$router.push('order?orderid=v.orderid')"
      >
        <div class="weui-cell__bd">
          <p>未缴账单{{v.fromdate}}</p>
        </div>
        <div class="weui-cell__ft"></div>
      </a>
      <a class="weui-cell weui-cell_access" @click="$router.push('/order')">
        <div class="weui-cell__bd">
          <p>历史账单</p>
        </div>
        <div class="weui-cell__ft"></div>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
const weui = require('weui.js');
import * as user from '@/models/user';
import * as utils from '@/utils/utils';
import * as define from '@/defines/define';
import * as register from '@/models/register.ts';
import * as contract from '@/models/contract.ts';
import * as order from '@/models/order.ts';

@Component
export default class Home extends Vue {
  private loginUser: user.User = { openid: '0000' };
  private registerData: register.DATA = {};
  private contractData: { [key: string]: contract.DATA } = {};
  private orderData: { [key: string]: order.DATA } = {};
  private isAdmin = false;
  private stateMsg = '已实名认证';

  private mounted() {
    this.loginUser = user.get() as user.User;
    this.isAdmin = utils.IsAdmin();
    this.stateMsg = this.isAdmin ? '管理员' : '已实名认证';
    if (this.isAdmin) {
      this.$router.push('/manager');
    } else {
      this.RequestRegisterData();
    }
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
          this.registerData = { ...userData };
          this.RequestRegisterData();
          this.RequestContractData();
          return;
        }
      }
      this.$router.push('/register');
    });
  }

  private RequestContractData() {
    const contractid = this.registerData.contractid;
    if (contractid && contractid.length > 0) {
      const host = define.API_HOST;
      const api = host + '/sunnyhouse/contract?mutli=1&contractid=' + encodeURI(contractid.join(','));
      Vue.axios.get(api).then((response) => {
        const data = response.data;
        console.log('ContractData', data);
        if (data && data.code === 'SUCCESS') {
          const contractData = data.data as contract.DATA[];
          if (contractData) {
            const orderid: string[] = [];
            contractData.forEach((element) => {
              this.contractData[element.contractid as string] = element;
              if (element.orderid) {
                element.orderid.forEach((one) => {
                  orderid.push(one);
                });
              }
            });
            this.RequestOrderData(orderid);
          }
        }
      });
    }
  }

  private RequestOrderData(orderid: string[]) {
    const host = define.API_HOST;
    if (orderid && orderid.length > 0) {
      const api = host + '/sunnyhouse/order?mutli=1&orderid=' + encodeURI(orderid.join(','));
      Vue.axios.get(api).then((response) => {
        const data = response.data;
        console.log('OrderData', data);
        if (data && data.code === 'SUCCESS') {
          const orderData = data.data as order.DATA[];
          if (orderData) {
            orderData.forEach((element) => {
              this.orderData[element.orderid as string] = element;
            });
          }
        }
      });
    }
  }

  private getContractVal(contractid: string, key: string) {
    const con = this.contractData[contractid];
    if (con) {
      return con[key] as string;
    }
    return '';
  }

  get unpayOrder() {
    const lst: order.DATA[] = [];
    for (const key in this.orderData) {
      if (this.orderData.hasOwnProperty(key)) {
        const element = this.orderData[key];
        if (!element.transaction_id) {
          lst.push(element);
        }
      }
    }
    return lst;
  }

}
</script>

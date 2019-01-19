<template>
  <div class="Order">
    <div v-if="isShowOneOrder">
      <div class="weui-cells__title">订单详情</div>
      <div class="weui-cells">
        <div v-for="(key, index) in showProps" :key="index" class="weui-cell">
          <div class="weui-cell__bd">
            <p>{{GetPropName(key)}}</p>
          </div>
          <div class="weui-cell__ft">{{GetPropValue(key)}}</div>
        </div>
        <div v-if="!orderInfo.transaction_id" class="weui-btn-area">
          <a class="weui-btn weui-btn_primary" @click="onPay()">支付</a>
        </div>Î
      </div>
    </div>
    <div v-else>
      <div class="weui-cells__title">历史订单</div>
      <div class="weui-cells">
        <div v-for="(order, index) in sortedOrder" :key="index" class="weui-cell">
          <div class="weui-cell__bd">
            <p>{{order.room+order.fromdate}}</p>
          </div>
          <div class="weui-cell__ft">{{'¥' + order.total}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
const weui = require('weui.js');
import * as user from '@/models/user';
import * as register from '@/models/register';
import * as contract from '@/models/contract';
import * as order from '@/models/order';
import * as define from '@/defines/define';
import * as utils from '@/utils/utils';

@Component
export default class Order extends Vue {
  private loginUser: user.User = {};
  private registerData: register.DATA = {};
  private orderData: order.DATA = {};
  private allOrderData: { [key: string]: order.DATA } = {};
  private isShowOneOrder = false;

  private mounted() {
    this.loginUser = user.get() as user.User;
    if (this.$route.query.orderid) {
      this.isShowOneOrder = true;
      this.RequestOrderData(this.$route.query.orderid as string);
    } else {
      this.isShowOneOrder = false;
      this.RequestRegisterInfo(this.loginUser.openid);
    }
  }

  private RequestOrderData(orderid: string) {
    if (orderid) {
      const host = define.API_HOST;
      const api = host + '/sunnyhouse/orderid?orderid=' + orderid;
      Vue.axios.get(api).then((response) => {
        const data = response.data;
        console.log('OrderInfo', data);
        if (data && data.code === 'SUCCESS') {
          this.orderData = data.data as order.DATA;
        }
      });
    }
  }

  private RequestRegisterInfo(openid?: string) {
    const host = define.API_HOST;
    const api = host + '/sunnyhouse/register?openid=' + openid;
    Vue.axios.get(api).then((response) => {
      const data = response.data;
      console.log('RegisterInfo', data);
      if (data && data.code === 'SUCCESS') {
        this.registerData = data.data as register.DATA;
        this.RequestContractData();
      }
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
              if (element.orderid) {
                element.orderid.forEach((one) => {
                  orderid.push(one);
                });
              }
            });
            this.RequestMultiOrderData(orderid);
          }
        }
      });
    }
  }

  private RequestMultiOrderData(orderid: string[]) {
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
              this.allOrderData[element.orderid as string] = element;
            });
          }
        }
      });
    }
  }

  private GetPropName(prop: string) {
    return order.PropDesc[prop];
  }

  private GetPropValue(prop: string) {
    const o = this.orderData;
    if (prop === 'water') {
      return `(${o.lastwatercnt}-${o.watercnt})*2.5=${o.water}`;
    } else if (prop === 'electricity') {
      return `(${o.lastelectricitycnt}-${o.electricitycnt})*2.5=${o.electricity}`;
    } else {
      return this.orderData[prop];
    }
  }

  private onPay() {
    if (this.orderData.orderid) {
      console.log('开始支付->', this.orderData.orderid);
    }
  }

  get showProps() {
    const props = ['orderid', 'createdtime',
      'rent', 'deposit', 'wifi', 'trash', 'water', 'electricity', 'total',
      'lastwatercnt', 'lastelectricitycnt', 'watercnt', 'electricitycnt',
      'fromdate', 'todate', 'transaction_id'];
    if (this.orderData.finishedtime) {
      props.push('finishedtime');
    }
    return props;
  }

  get sortedOrder() {
    const lst: order.DATA[] = [];
    for (const key in this.allOrderData) {
      if (this.allOrderData.hasOwnProperty(key)) {
        const element = this.allOrderData[key];
        lst.push(element);
      }
    }
    lst.sort((a, b) => {
      const t1 = new Date(a.fromdate as string);
      const t2 = new Date(b.fromdate as string);
      return t1 > t2 ? 1 : -1;
    });
    return lst;
  }
}

</script>

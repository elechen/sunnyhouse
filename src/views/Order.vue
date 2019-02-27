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
        <a @click="onSwitchRecord" class="weui-cell weui-cell_link">
          <div class="weui-cell__bd">{{isShowRec?'收起抄表记录':'展开抄表记录'}}</div>
        </a>
        <div v-if="isShowRec">
          <div v-for="(key, index) in recordProps" :key="index" class="weui-cell">
            <div class="weui-cell__bd">
              <p>{{GetPropName(key)}}</p>
            </div>
            <div class="weui-cell__ft">{{GetPropValue(key)}}</div>
          </div>
        </div>
        <div v-if="!orderData.transaction_id" class="weui-btn-area">
          <a class="weui-btn weui-btn_primary" @click="onPay()">支付</a>
        </div>
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

interface WX_ORDER {
  timestamp: number;
  nonceStr: string;
  package: string;
  signType: string;
  paySign?: string;
}

declare let WeixinJSBridge: { invoke: any };

@Component
export default class Order extends Vue {
  private loginUser: user.User = {};
  private registerData: register.DATA = {};
  private orderData: order.DATA = {};
  private allOrderData: { [key: string]: order.DATA } = {};
  private isShowOneOrder = false;
  private isShowRec = false;

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
      const api = host + '/sunnyhouse/order?orderid=' + orderid;
      Vue.axios.get(api).then((response) => {
        const data = response.data;
        console.log('orderData', data);
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
      return `( ${o.watercnt} - ${o.lastwatercnt} ) * 2.5 = ${o.water}`;
    } else if (prop === 'electricity') {
      return `( ${o.electricitycnt} - ${o.lastelectricitycnt} ) * 1.5 = ${o.electricity}`;
    } else if (prop === 'createdtime') {
      return new Date(this.orderData[prop] as number).toLocaleString();
    } else {
      return this.orderData[prop];
    }
  }

  private onPay() {
    if (this.orderData.orderid) {
      const host = define.API_HOST;
      const api = `${host}/pay/unifiedorder`;
      const orderIdx = (this.orderData.fromdate as string).substring(0, 7);
      const body = `${this.orderData.room}房${orderIdx}期账单`;
      const totalFee = (this.orderData.total as number) * 100;
      const openid = this.loginUser.openid;
      const params = { openid, body, out_trade_no: this.orderData.orderid, total_fee: totalFee };
      console.log('pay->', params);
      Vue.axios.get(api, { params }).then((response) => {
        const data = response.data;
        console.log(response.data);
        if (data.code === 'SUCCESS') {
          this.wxPay(data.data);
        } else {
          weui.alert('支付异常：' + data.msg);
        }
      });
    }
  }

  private wxPay(prepayData: { [key: string]: any }) {
    console.log('wxPay->', prepayData);
    const that = this;
    function onBridgeReady() {
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
          ...prepayData,
        },
        (res: any) => {
          console.log('wxPayCallback', res);
          if (res.err_msg === 'get_brand_wcpay_request:ok') {
            // 使用以上方式判断前端返回,微信团队郑重提示：
            // res.err_msg将在用户支付成功后返回ok，但并不保证它绝对可靠。
            that.RequestOrderData(that.$route.query.orderid as string);
          }
        });
    }
    if (typeof WeixinJSBridge === 'undefined') {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
      } else if ((document as any).attachEvent) {
        (document as any).attachEvent('WeixinJSBridgeReady', onBridgeReady);
        (document as any).attachEvent('onWeixinJSBridgeReady', onBridgeReady);
      }
    } else {
      onBridgeReady();
    }
  }

  private onSwitchRecord() {
    this.isShowRec = !this.isShowRec;
  }

  get showProps() {
    const props = ['orderid', 'createdtime',
      'rent', 'deposit', 'wifi', 'trash', 'water', 'electricity', 'total',
    ];
    if (this.orderData.finishedtime) {
      props.push('transaction_id');
      props.push('finishedtime');
    }
    return props;
  }

  get recordProps() {
    return ['lastwatercnt', 'watercnt', 'lastelectricitycnt', 'electricitycnt',
      'fromdate', 'todate'];
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

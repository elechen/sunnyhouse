<template>
  <div class="GenOrder">
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__hd" style="position: relative; margin-right: 10px;">
          <img :src="registerData.headimgurl" style="width: 50px; display: block;">
        </div>
        <div class="weui-cell__bd">
          <p>{{registerData.name}}</p>
          <p style="font-size: 13px; color: rgb(136, 136, 136);">签订电子合约</p>
        </div>
      </div>
    </div>
    <div id="form">
      <div class="weui-cells__title">账单详情</div>
      <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">房间号</label>
          </div>
          <div class="weui-cell__bd">
            <input
              v-model.number="formData.room"
              class="weui-input"
              required
              type="number"
              placeholder="请输入房间号"
            >
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">月租</label>
          </div>
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              v-model.number="formData.rent"
              required
              type="number"
              placeholder="请输入月租"
            >
          </div>
        </div>

        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">押金</label>
          </div>
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              v-model.number="formData.deposit"
              required
              type="number"
              placeholder="请输入押金"
            >
          </div>
        </div>

        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">水费</label>
          </div>
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              v-model.number="waterFee"
              required
              type="number"
              placeholder="请输入水费"
              disabled="disabled"
            >
          </div>
        </div>

        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">电费</label>
          </div>
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              v-model.number="electricityFee"
              required
              type="number"
              placeholder="请输入电费"
              disabled="disabled"
            >
          </div>
        </div>

        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">Wi-Fi</label>
          </div>
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              v-model.number="formData.wifi"
              required
              type="number"
              placeholder="请输入Wi-Fi费用"
            >
          </div>
        </div>

        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">垃圾处理费</label>
          </div>
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              v-model.number="formData.trash"
              required
              type="number"
              placeholder="请输入垃圾处理费"
            >
          </div>
        </div>

        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">总计</label>
          </div>
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              v-model.number="formData.total"
              required
              type="number"
              placeholder="请输入总计费用"
            >
          </div>
        </div>
      </div>
      <div class="weui-cells__title">抄表记录</div>
      <div class="weui-cells weui-cells_form">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">上次水表</label>
          </div>
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              v-model.number="formData.lastwatercnt"
              required
              type="number"
              placeholder="请输入上次水表读数"
            >
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">当次水表</label>
          </div>
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              v-model.number="formData.watercnt"
              required
              type="number"
              placeholder="请输入当次水表读数"
            >
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">上次电表</label>
          </div>
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              v-model.number="formData.lastelectricitycnt"
              required
              type="number"
              placeholder="请输入上次电表读数"
            >
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">当次电表</label>
          </div>
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              v-model.number="formData.electricitycnt"
              required
              type="number"
              placeholder="请输入当次电表读数"
            >
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">开始日期</label>
          </div>
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              v-model="formData.fromdate"
              type="date"
              required
              emptyTips="请输入开始日期"
            >
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label for class="weui-label">结束日期</label>
          </div>
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              v-model="formData.todate"
              type="date"
              required
              emptyTips="请输入结束日期"
            >
          </div>
        </div>
      </div>
    </div>
    <div class="weui-btn-area">
      <a class="weui-btn weui-btn_primary" @click="onSubmit">生成订单</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';
const weui = require('weui.js');
import * as register from '@/models/register';
import * as order from '@/models/order';
import * as contract from '@/models/contract';
import * as define from '@/defines/define';
import * as utils from '@/utils/utils';

@Component
export default class GenOrder extends Vue {
  private orderData: order.DATA = {};
  private formData: order.DATA = {};
  private registerData: register.DATA = {};

  private mounted() {
    if (utils.IsAdmin()) {
      const orderid = this.$route.query.orderid as string;
      const contractid = this.$route.query.contractid as string;
      if (orderid) {
        this.RequestOrderInfo(orderid);
      } else if (contractid) {
        this.InitFormData(contractid);
      } else {
        this.$router.push('/');
      }
    } else {
      this.$router.push('/');
    }
  }

  private RequestOrderInfo(orderid: string) {
    const host = define.API_HOST;
    const api = host + '/sunnyhouse/orderid?orderid=' + orderid;
    Vue.axios.get(api).then((response) => {
      const data = response.data;
      console.log('OrderInfo', data);
      if (data && !data.msg) {
        const orderData = data.data as order.DATA;
        this.orderData = { ...orderData };
        this.formData = { ...orderData };
        this.RequestRegisterInfo(orderData.openid);
      } else {
        this.$router.push('/');
      }
    });
  }

  private RequestRegisterInfo(openid?: string) {
    const host = define.API_HOST;
    const api = host + '/sunnyhouse/register?openid=' + openid;
    Vue.axios.get(api).then((response) => {
      const data = response.data;
      console.log('RegisterInfo', data);
      if (data && data.code === 'SUCCESS') {
        this.registerData = data.data as register.DATA;
        this.formData.openid = this.registerData.openid;
      }
    });
  }

  private InitFormData(contractid: string) {
    const formData = this.formData;
    formData.trash = 5;
    formData.fromdate = new Date().toJSON().substr(0, 10);
    formData.todate = new Date().toJSON().substr(0, 10);
    const host = define.API_HOST;
    const api = host + '/sunnyhouse/contract?contractid=' + contractid;
    Vue.axios.get(api).then((response) => {
      const d = response.data;
      console.log('ContractInfo', d);
      if (d && d.code === 'SUCCESS') {
        const c = d.data as contract.DATA;
        formData.room = c.room;
        formData.openid = c.openid;
        this.RequestRegisterInfo(c.openid);
        if (c.orderid && c.orderid.length > 0) {
          const orderid = c.orderid[c.orderid.length - 1];
          const api1 = host + '/sunnyhouse/order?orderid=' + orderid;
          Vue.axios.get(api1).then((response1) => {
            const d1 = response1.data;
            console.log('OrderInfo', d1);
            if (d1 && d1.data) {
              const o = d1.data as order.DATA;
              formData.lastwatercnt = o.watercnt;
              formData.lastelectricitycnt = o.electricitycnt;
              formData.rent = o.rent;
              formData.deposit = 0;
              formData.wifi = o.wifi;
            }
          });
        } else {
          formData.lastwatercnt = c.watercnt;
          formData.lastelectricitycnt = c.electricitycnt;
          formData.rent = c.rent;
          formData.deposit = c.rent;
          formData.wifi = 0;
        }
      }
    });
  }

  private GetPropName(prop: string) {
    return order.PropDesc[prop];
  }

  private GetPropValue(prop: string) {
    return this.orderData[prop];
  }

  private onSubmit() {
    weui.form.validate('#form', (error: { dom: object, msg: string }) => {
      if (!error) {
        const cf = weui.confirm('确定提交？', () => {
          cf.hide(this.PostFormData); // 设置为回调解决weui提示框问题
        });
      } else {
        console.log(error);
      }
    },
    );
  }

  private PostFormData() {
    const host = define.API_HOST;
    const api = host + '/sunnyhouse/order';
    console.log('PostFormData', api, this.formData);
    Vue.axios.post(api, this.formData).then((response) => {
      const data = response.data;
      console.log('PostFormDataRes', data);
      if (data.code === 'SUCCESS') {
        if (data.msg) {
          weui.alert('提交异常:' + data.msg);
        } else {
          weui.toast('提交成功', 1000);
          setTimeout(() => {
            this.$router.go(-1);
          }, 1000);
        }
      } else {
        weui.alert('服务器异常:' + response);
      }
    }).catch((reason) => {
      console.log(reason);
      weui.alert('网络异常:' + reason);
    });
  }

  @Watch('formData', { deep: true, immediate: false })
  private onFormChange(newVal: order.DATA, oldVal: order.DATA) {
    let total = 0;
    console.log(JSON.stringify(this.formData));
    total += newVal.rent as number;
    total += newVal.deposit as number;
    total += newVal.water as number;
    total += newVal.electricity as number;
    total += newVal.wifi as number;
    total += newVal.trash as number;
    console.log('new->' + JSON.stringify(newVal));
    console.log('old->' + JSON.stringify(oldVal));
    this.formData.total = total;
  }

  get waterFee() {
    const now = this.formData.watercnt ? this.formData.watercnt : 0;
    const pre = this.formData.lastwatercnt ? this.formData.lastwatercnt : 0;
    this.formData.water = (now - pre) * 2.5;
    return this.formData.water;
  }
  get electricityFee() {
    const now = this.formData.electricitycnt ? this.formData.electricitycnt : 0;
    console.log('electricitycnt=>', now);
    const pre = this.formData.lastelectricitycnt ? this.formData.lastelectricitycnt : 0;
    this.formData.electricity = (now - pre) * 1.5;
    return this.formData.electricity;
  }

}
</script>

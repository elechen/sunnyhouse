<template>
  <div class="Contract">
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
    <div class="weui-cells__title">个人资料</div>
    <div class="weui-cells">
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
    <div id="form">
      <div class="weui-cells__title">电子合约详情</div>
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
              :disabled="!isAdmin"
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
              :disabled="!isAdmin"
            >
          </div>
        </div>

        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">水表读数</label>
          </div>
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              v-model.number="formData.watercnt"
              required
              type="number"
              placeholder="请输入水表读数"
              :disabled="!isAdmin"
            >
          </div>
        </div>

        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">电表读数</label>
          </div>
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              v-model.number="formData.electricitycnt"
              required
              type="number"
              placeholder="请输入电表读数"
              :disabled="!isAdmin"
            >
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label for class="weui-label">开始日期</label>
          </div>
          <div class="weui-cell__bd">
            <input
              class="weui-input"
              v-model="formData.fromdate"
              type="date"
              required
              emptyTips="请输入开始日期"
              :disabled="!isAdmin"
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
              :disabled="!isAdmin"
            >
          </div>
        </div>

        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">水费</label>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" value="2.5元/方" disabled="disabled">
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">电费</label>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" value="1.5元/度" disabled="disabled">
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">押金</label>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" value="押一付一" disabled="disabled">
          </div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <label class="weui-label">其他</label>
          </div>
          <div class="weui-cell__bd">
            <input class="weui-input" value="代村收垃圾处理费5元/月" disabled="disabled">
          </div>
        </div>
      </div>
    </div>
    <div>
      <div class="weui-cells__title">订单列表</div>
      <div class="weui-cells">
        <div v-if="formData.orderid && formData.orderid.length > 0">
          <a
            class="weui-cell weui-cell_access"
            v-for="(id, idx) in formData.orderid"
            :key="idx"
            @click="showOrder(id)"
          >
            <div class="weui-cell__bd">
              <p>订单{{idx+1}}</p>
            </div>
            <div class="weui-cell__ft"></div>
          </a>
        </div>
        <div v-else>
          <div class="weui-loadmore weui-loadmore_line">
            <span class="weui-loadmore__tips">暂无订单</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="isAdmin" class="weui-cells">
      <a v-if="contractid" class="weui-cell weui-cell_access" @click="onGenOrder">
        <div class="weui-cell__bd">
          <p>新建订单</p>
        </div>
        <div class="weui-cell__ft"></div>
      </a>
    </div>
    <div v-if="isAdmin" class="weui-btn-area">
      <a class="weui-btn weui-btn_primary" @click="onSubmit">{{contractid ? '修改合约' : '生成合约'}}</a>
    </div>
    <div v-else-if="!formData.confirm" class="weui-btn-area">
      <a class="weui-btn weui-btn_primary" @click="onConfirm">签订合约</a>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
const weui = require('weui.js');
import * as user from '@/models/user';
import * as register from '@/models/register';
import * as contract from '@/models/contract';
import * as define from '@/defines/define';
import * as utils from '@/utils/utils';

@Component
export default class Contract extends Vue {
  private registerData: register.DATA = {};
  private formData: contract.DATA = {};
  private isAdmin = false;
  private contractid = '';
  private mounted() {
    this.isAdmin = utils.IsAdmin();
    this.RequestContractInfo();
  }
  private RequestContractInfo() {
    const contractid = this.$route.query.contractid as string;
    const openid = this.$route.query.openid as string;
    if (contractid) {
      this.contractid = contractid;
      const host = define.API_HOST;
      const api = host + '/sunnyhouse/contract?contractid=' + contractid;
      Vue.axios.get(api).then((response) => {
        const data = response.data;
        console.log('ContractInfo', data);
        if (data && data.code === 'SUCCESS') {
          this.formData = data.data as contract.DATA;
          this.RequestRegisterInfo(this.formData.openid);
        }
      });
    } else if (openid) {
      this.RequestRegisterInfo(openid);
    }
  }

  private RequestRegisterInfo(openid?: string) {
    const host = define.API_HOST;
    const api = host + '/sunnyhouse/register?openid=' + openid;
    Vue.axios.get(api).then((response) => {
      const data = response.data;
      console.log('RegisterInfo', data);
      if (data && data.code === 'SUCCESS') {
        this.formData.openid = openid;
        this.registerData = data.data as register.DATA;
      }
    });
  }

  private PropDesc(prop: string): string {
    return register.PropDesc[prop];
  }

  private previewImg(imgurl: string) {
    weui.gallery(imgurl);
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

  private onGenOrder() {
    this.$router.push('genorder?contractid=' + this.contractid);
  }

  private PostFormData() {
    const host = define.API_HOST;
    const api = host + '/sunnyhouse/contract';
    console.log('PostFormData', api, this.formData);
    Vue.axios.post(api, this.formData).then((response) => {
      const data = response.data;
      console.log('PostFormDataRes', data);
      if (data.code === 'SUCCESS') {
        if (data.msg) {
          weui.alert('提交异常:' + data.msg);
        } else {
          weui.toast('提交成功', 1000);
          const contractid = data.data.contractid;
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

  private onConfirm() {
    const cf = weui.confirm('确定签订合约吗？', () => {
      cf.hide(this.PostConfirmData);
    });
  }

  private PostConfirmData() {
    const host = define.API_HOST;
    const api = host + '/sunnyhouse/contract/confirm';
    const contractid = this.formData.contractid;
    console.log('onConfirm', api, contractid);
    Vue.axios.post(api, { contractid }).then((response) => {
      const data = response.data;
      console.log('ConfirmRes', data);
      if (data.code === 'SUCCESS') {
        if (data.msg) {
          weui.alert('提交异常:' + data.msg);
        } else {
          weui.toast('合约签订成功', 1000);
          this.RequestContractInfo();
        }
      } else {
        weui.alert('服务器异常:' + response);
      }
    }).catch((reason) => {
      console.log(reason);
      weui.alert('网络异常:' + reason);
    });
  }

  private showOrder(orderid: string) {
    this.$router.push('/order?orderid=' + orderid);
  }

}

</script>

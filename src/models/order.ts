export interface DATA {
  orderid?: string;
  createdtime?: number;
  openid?: string;
  contractid?: string;
  room?: number;
  // 费用列表
  rent?: number;
  deposit?: number;
  wifi?: number;
  trash?: number;
  water?: number;
  electricity?: number;
  total?: number;
  // 抄表记录
  lastwatercnt?: number;
  lastelectricitycnt?: number;
  watercnt?: number;
  electricitycnt?: number;
  fromdate?: string;
  todate?: string;
  // 微信支付订单号，如果有则认为已支付
  transaction_id?: string;
  finishedtime?: number;
  [key: string]: any;
}

export const PropDesc: { [key: string]: string } = {
  orderid: '订单号',
  createdtime: '创建时间',
  rent: '租金',
  deposit: '押金',
  wifi: 'Wi-Fi',
  trash: '垃圾处理费',
  water: '水费',
  electricity: '电费',
  total: '总计',
  // 抄表记录
  lastwatercnt: '上期水表',
  lastelectricitycnt: '上期电表',
  watercnt: '本期水表',
  electricitycnt: '本期电表',
  fromdate: '开始时间',
  todate: '结束时间',
  // 微信支付订单号，如果有则认为已支付
  transaction_id: '微信订单号',
};

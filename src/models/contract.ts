
export interface DATA {
  openid?: string;
  contractid?: string;
  room?: number;
  rent?: number;
  watercnt?: number;
  electricitycnt?: number;
  fromdate?: string;
  todate?: string;
  confirm?: number; // 签约后才会有
}

export const PropDesc: { [key: string]: string } = {
  room: '房间号',
  rent: '租金',
  watercnt: '水表抄表',
  electricitycnt: '电表抄表',
  fromdate: '开始日期',
  todate: '结束日期',
};

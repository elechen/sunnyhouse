export enum STATE {
  reviewing = 1, // 注册
  reviewed, // 已审核
  left, // 已退租
  contract, // 待签约（客户端状态）
}

export const StateDesc: { [key: number]: string } = {
  [STATE.reviewing]: '待审核',
  [STATE.reviewed]: '已审核',
  [STATE.left]: '已退租',
  [STATE.contract]: '待签约',
};

export interface DATA {
  openid?: string;
  contractid?: string[];
  id?: string;
  name?: string;
  phone?: string;
  idimgurl?: string[];
  state?: STATE;
  headimgurl?: string;
}

export const PropDesc: { [key: string]: string } = {
  id: '身份证',
  name: '姓名',
  phone: '手机号',
};

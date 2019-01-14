export enum STATE {
  sign = 1,   // 注册
  wait_contract, // 待签
  contract, // 签订
  left, // 退房
}
export interface DATA {
  openid?: string;
  id?: string;
  name?: string;
  phone?: string;
  room?: string;
  idimgurl?: string[];
  state?: STATE;
}

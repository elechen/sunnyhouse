export interface User {
  'openid'?: string;
  'nickname'?: string;
  'sex'?: string;
  'province'?: string;
  'city'?: string;
  'country'?: string;
  'headimgurl'?: string;
  'privilege'?: string[];
  'unionid'?: string;
}

let user: User;
export function set(info: User) {
  user = info;
}

export function get(): User {
  return user;
}

import * as define from '@/defines/define';

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

export function set(info: User) {
  sessionStorage.setItem('user', JSON.stringify(info));
}

export function get(): User | undefined {
  const cache = sessionStorage.getItem('user');
  if (cache) {
    return JSON.parse(cache);
  } else if (define.DEV) {
    return {
      // openid: '10000',
      openid: 'o7tJq08kMDWwUfW9dBE7B-xjNC3w',
      nickname: '陈晓峰',
      headimgurl: 'http://thirdwx.qlogo.cn/mmopen/vi_32/lJrubpXQ6BfZauRwkwRNSDWKGxRY78tEsicoFxt43kMiabkj0FP78wBJ7CgiaQO6iaqBJnQGUCPXia07ZiaoelJdzkjA/132',
    };
  }
}

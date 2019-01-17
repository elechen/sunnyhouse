import * as user from '@/models/user';

export function IsAdmin() {
  const u = user.get();
  const ids: string[] = ['10000', 'o7tJq08kMDWwUfW9dBE7B-xjNC3w'];
  if (u) {
    return ids.indexOf(u.openid as string) !== -1;
  }
  return false;
}

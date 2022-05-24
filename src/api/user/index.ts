import axiosHelper from '@utils/axios';

import type { Account, LoginInfo } from './types';

enum API {
  Login = '/login',
  UserInfo = '/user/info',
  MenuList = '/menu/list',
}

export function loginRequest(account: Account) {
  return axiosHelper.post<LoginInfo>('/', account);
}

export function getUserInfo() {
  return axiosHelper.get(API.UserInfo);
}

export function getMenuList() {
  return axiosHelper.get(API.MenuList);
}

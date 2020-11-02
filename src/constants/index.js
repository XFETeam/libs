import checkIsMasterEnv from '../utils/check-is-master-env';

export const XOYO_ROOT_API = checkIsMasterEnv() ? '//ws.xoyo.com' : '//test-ws.xoyo.com';
// xoyo注册接口前缀
export const XOYO_LOGIN_API = checkIsMasterEnv() ? '//pf-api.xoyo.com' : '//my-api-dev.xoyo.com';
// xoyo通用接口前缀
export const PASSPORT_ROOT_ADDRESS = `${XOYO_LOGIN_API}/passport/common_api`;
// 移动端跳转登录接口
// eslint-disable-next-line max-len
export const MOBILELOGIN_URL = checkIsMasterEnv() ? '//m.xoyo.com/passport/signin.html' : '//m-dev.xoyo.com/passport/signin.html';

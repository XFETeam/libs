import GlobalConfig from '../global-config';
import GlobalAuthData from '../global-auth-data';

/**
 * 创建授权对象
 * @param {'success'|'error'} status - 授权状态, 成功或失败, success | error
 * @param {object} data - 数据
 * @param {boolean} [isXoyo] - 是否是 xoyo 授权
 */
const createAuth = (status, data, isXoyo) =>{
  const globalAuthName = isXoyo ? 'XOYO_AUTH' : 'THIRD_PARTY_AUTH';
  const globalConfig = new GlobalConfig();
  const globalAuthData = new GlobalAuthData();

  const authResponse = {
    ua: globalConfig.loginType,
    status: status,
    data: data
  };

  globalAuthData[globalAuthName] = authResponse;
  return globalAuthData[globalAuthName];

};

export default createAuth;

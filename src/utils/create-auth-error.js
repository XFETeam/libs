import createAuth from './create-auth';

/**
 * 创建授权错误
 * @param {object} data - 授权数据
 * @param {boolean} isXoyo - 是否是 xoyo 授权
 */
const createAuthError = (data, isXoyo) => {
  return createAuth('error', data, isXoyo);
};

export default createAuthError;

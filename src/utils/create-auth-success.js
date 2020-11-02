import createAuth from './create-auth';

/**
 * 创建授权成功
 * @param {string} data - 授权数据
 *  @param {boolean} isXoyo - 是否是 xoyo 授权
 *  @param {boolean} isXoyo - 是否是 xoyo 授权
 */
const createAuthSuccess = (data, isXoyo) => {
  return createAuth('success', data, isXoyo);
};

export default createAuthSuccess;

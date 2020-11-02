import services from './services';
import createAuthSuccess from '../../utils/create-auth-success';
import createAuthError from '../../utils/create-auth-error';

/**
 * XOYO登录信息获取
 * @returns {Promise<*>}
 */
const getXoyoAuth = async () => {

  const response = await services.getInfo();
  let xoyoAuthData;

  if (response.status === 1) {
    xoyoAuthData = createAuthSuccess(response.data, true);
  } else if (response.code === -10402 /* 测试或正式环境未登录 */ || response.code === -20101 /* 测试或正式环境未登录 */) {
    response.reason = 'require-login';
    xoyoAuthData = createAuthError(response, true);
  } else {
    alert('网络异常, 请稍后重试');
    throw new Error('passport/common_api/get_info 授权异常: ' + JSON.stringify(response));
  }
  return xoyoAuthData;

};

export default getXoyoAuth;

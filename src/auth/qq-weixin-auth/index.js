import services from './services';
import isMQQ from '../../utils/is-mqq';
import isWeiXin from '../../utils/is-weixin';
import createAuthSuccess from '../../utils/create-auth-success';
import createAuthError from '../../utils/create-auth-error';
import GlobalConfig from '../../global-config';

/**
 * QQ微信授权信息获取登录
 * @returns {Promise<unknown>}
 */
const getQQWeixinAuth = async () => {
  let qqWeixinAuthInfo;

  if (isWeiXin() || isMQQ()) {
    const globalConfig = new GlobalConfig();

    const currentUserInfo = await services.getCurrentUserInfo();
    let requireThirdPartyLogin = false;

    if (currentUserInfo.status === 1 /* 成功 */) {
      /**
       * 创建授权成功
       */
      qqWeixinAuthInfo = createAuthSuccess(currentUserInfo.data);
    } else {
      if (currentUserInfo.code === -14601 /* 需要授权*/) {
        /**
         * 标识需要第三方授权登录
         * @type {boolean}
         */
        requireThirdPartyLogin = true;
      }
      /**
       * 授权授权失败对象
       */
      qqWeixinAuthInfo = createAuthError(currentUserInfo);
      /**
       * 在异步栈抛异常, 防止主线程崩溃
       */
      // setTimeout(function () {
      //   throw new Error('第三方授权异常: ' + JSON.stringify(errorObject));
      // });
    }

    if (requireThirdPartyLogin) {
      const loginType = globalConfig.loginType;

      /**
       * 获取授权地址
       * @param {object} response
       * @private
       */
      const response = await services.getAuthUrl({loginType});

      if (response.status === 1 /* 成功 */) {
        window.location.href = response.data.auth_url;
      } else {
        throw new Error('第三方获取授权地址异常: ' + JSON.stringify(response));
      }
    }

  }
  return qqWeixinAuthInfo;
};

export default getQQWeixinAuth;

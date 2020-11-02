import getDailyToken from './utils/get-daily-token';
import removeUrlParam from '../../utils/remove-url-param';
import replaceUrlWithoutReloading from '../../utils/replace-url-without-reloading';
import services from './services';
import createAuthSuccess from '../../utils/create-auth-success';
import createAuthError from '../../utils/create-auth-error';
import isDailyApp from '../../utils/is-daily-app';
import getUrlParameterByName from '../../utils/get-url-parameter-by-name';
import GlobalConfig from '../../global-config';

const getDailyAuth = async ({token, limitGuest = 1, limitOnlyHasJx3RoleAccessInDaily = false} = {}) => {
  let dailyAutoInfo;

  if (isDailyApp()) {
    /**
     * 获取全局配置
     * @type {GlobalConfig}
     */
    const globalConfig = new GlobalConfig();

    if (!globalConfig.hasEnterAuth) {
      globalConfig.hasEnterAuth = true;

      token = token || (getUrlParameterByName('token') || getUrlParameterByName('ssoToken'));

      if (!token) {
        token = (() => {
          const token = getDailyToken();

          /**
           * 获取url中的token参数
           */
          const nextSearch = removeUrlParam(window.location.search, 'token');

          /**
           * 不刷新页面的情况下替换携带token的url
           */
          // eslint-disable-next-line max-len
          replaceUrlWithoutReloading(window.location.pathname + removeUrlParam(nextSearch, 'ssoToken') + window.location.hash);

          return token;
        })();
      }
    }

    /**
     * 根据token进行登录Daily
     */
    const response = await services.loginByToken({limitGuest, limitOnlyHasJx3RoleAccessInDaily, token});

    if (response.status !== 1 /* 失败 */) {
      window.location.href = 'https://jx3.seasungame.com/error-pages/index.html?login-expired';
      throw new Error('DAILY_APP_AUTH 登录态失效，请重新登录: ' + JSON.stringify(response));
    }

    const accountInfo = await services.getAccountInfo();

    if (accountInfo.status === 1 /* 成功 */) {
      dailyAutoInfo = createAuthSuccess(accountInfo.data);
      /**
       * 判断当前用户下是否有角色, 如果有将禁止其问访, 仅在 LIMIT_ONLY_HAS_JX3_ROLE_ACCESS_IN_DAILY 开关开启后生效
       */
      if (limitOnlyHasJx3RoleAccessInDaily && accountInfo.data.app_default_passport_roles &&
        accountInfo.data.app_default_passport_roles.length === 0) {
        window.location.href = 'https://jx3.seasungame.com/error-pages/index.html?no-account';
      }
    } else {
      /* 登录态失效，请重新登录 */
      if (accountInfo.code === -14702) {
        window.location.href = 'https://jx3.seasungame.com/error-pages/index.html?login-expired';
        throw new Error('DAILY_APP_AUTH 登录态失效，请重新登录: ' + JSON.stringify(response));
      }
      dailyAutoInfo = createAuthError(accountInfo);
      // const errorObject = createAuthError(accountInfo);

      // setTimeout(function () {
      //   throw new Error('DAILY_APP_AUTH 授权异常: ' + JSON.stringify(errorObject));
      // });
    }
  }
  return dailyAutoInfo;
};

export default getDailyAuth;

/** @module captchaHandlerDecorate */
import CaptchaHandler from '@xfe/captcha-handler';
import jsonp from './jsonp-util';

/**
 * 极验的账号, 用于区分专题或通用登录极验账号
 */
let geetestGt;


/**
 * 极验设置
 * @param captchaUrl {string} 极验地址
 * @returns {*}
 */
const getGeeTestSettings = (captchaUrl) => {
  return {
    url: captchaUrl,
    requestPreAuthImpl(url, params) {
      /**
       * 要求请求后返回 {message, data} 的数据结构
       */
      return jsonp(url, params).then(response => {
        if (response.code === 1 && response.data.mode === 2 /* 极验验证码模式 */) {
          geetestGt = response.data.config.gt;
        }
        return response;
      });
    }
  };
};

/**
 * 二次封装装饰函数
 * @param captchaUrl {string} 极验地址
 * @returns {*}
 */
const captchaHandlerDecorate = (captchaUrl) => {
  return CaptchaHandler.decorate({ geeTestSettings: getGeeTestSettings(captchaUrl) }, ([params], captchaData) => {
    const newParams = Object.assign({}, params, captchaData, {
      geetest_gt: geetestGt
    });
    return [newParams];
  });
};

/**
 * API对外暴露,
 * 用例:
 * @example
 * ```
 *  // 原函数，发起登录请求
 * async loginAsync({account, password}) {
 *   const {login} = this.props;
 *   return await login({account, password});
 * }
 *
 * 加入极验验证码:
 * \@captchaHandlerDecorate()
 *  async loginAsync({account, password, ...authParams}) {
 *   const {login} = this.props;
 *   return await login({account, password, ...authParams});
 * }
 * ```
 *
 * 效果:
 * 点击或者触发上述方法后自动弹出极验验证码
 */
export default captchaHandlerDecorate;

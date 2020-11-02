import checkIsMasterEnv from '../utils/check-is-master-env';
import isWeiXin from '../utils/is-weixin';
import isMQQ from '../utils/is-mqq';
import isMWeibo from '../utils/is-mweibo';
import isDailyApp from '../utils/is-daily-app';

/**
 * 全局配置
 */
export default class GlobalConfig {
  constructor() {
    /**
     * 是否是正式环境
     */
    this._isMaster = checkIsMasterEnv;
    /**
       * 是否仅仅只限制 daily 登录
       */
    this._isDailyOnly = false;
    /**
       * 登录类型
       */
    // eslint-disable-next-line max-len
    this._loginType = [isDailyApp() && 'daily', isWeiXin() && 'wechat', isMQQ() && 'qq', isMWeibo() && 'weibo', 'h5'].filter(Boolean)[0];
    /**
       * 当前是否是 daily app
       */
    this._isDailyApp = isDailyApp();
    /**
       * 是否已经进入授权区域
       */
    this._hasEnterAuth = false;
  }

  get isMaster() {
    return this._isMaster;
  }

  get isDailyOnly() {
    return this._isDailyOnly;
  }
  set isDailyOnly(newStatus) {
    this._isDailyOnly = newStatus;
  }

  get loginType() {
    return this._loginType;
  }

  get isDailyApp() {
    return this._isDailyApp;
  }
  set isDailyApp(newStatus) {
    this._isDailyApp = newStatus;
  }

  get hasEnterAuth() {
    return this._hasEnterAuth;
  }
  set hasEnterAuth(newStatus) {
    this._hasEnterAuth = newStatus;
  }

};

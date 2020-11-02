
/**
 * 全局配置
 */
export default class GlobalAuthData {
  constructor() {
    /**
     * xoyo登录信息
     * @type {{}}
     * @private
     */
    this._XOYO_AUTH = {};
    /**
     * 第三方登录授权信息
     * @type {{}}
     * @private
     */
    // eslint-disable-next-line camelcase
    this._THIRD_PARTY_AUTH = {};
  }

  get XOYO_AUTH() {
    return this._XOYO_AUTH;
  }
  set XOYO_AUTH(data) {
    this._XOYO_AUTH = data;
  }

  // eslint-disable-next-line camelcase
  get THIRD_PARTY_AUTH() {
    return this._THIRD_PARTY_AUTH;
  }
  // eslint-disable-next-line camelcase
  set THIRD_PARTY_AUTH(data) {
    // eslint-disable-next-line camelcase
    this._THIRD_PARTY_AUTH = data;
  }
};

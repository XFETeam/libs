(function(__tools__, universalAuthConfig) {
  var isDailyApp = __tools__.isDailyApp;
  var isWeiXin = __tools__.isWeiXin;
  var isMWeibo = __tools__.isMWeibo;
  var isMQQ = __tools__.isMQQ;

  var isMaster = universalAuthConfig.env === 'master' || document.documentElement.getAttribute('data-env') === 'master';
  /**
   * 全局配置
   */
  window.GLOBAL_CONFIG = window.GLOBAL_CONFIG || {
    /**
     * 是否是正式环境
     */
    isMaster: isMaster,
    /**
     * 根据环境获取 xoyo 地址
     */
    getXoyoUrl: function() {
      var isMasterUrl = isMaster ? 'ws.' : 'test' + '-ws.';
      return isMasterUrl + 'xoyo.com';
    },
    /**
     * 是否仅仅只限制 daily 登录
     */
    isDailyOnly: false,
    /**
     * 登录类型
     */
    loginType: [isDailyApp() && 'daily', isWeiXin() && 'wechat', isMQQ() && 'qq', isMWeibo() && 'weibo', 'h5'].filter(Boolean)[0],
    /**
     * 当前是否是 daily app
     */
    isDailyApp: isDailyApp(),
    /**
     * 是否已经进入授权区域
     */
    hasEnterAuth: false
  };
})(window.__tools__, window.__XFE_UNIVERSAL_AUTH_CONFIG__);

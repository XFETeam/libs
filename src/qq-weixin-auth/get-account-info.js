(function(__tools__, globalConfig) {
  var isWeiXin = __tools__.isWeiXin;
  var isMQQ = __tools__.isMQQ;
  var createAuthSuccess = __tools__.createAuthSuccess;
  var createAuthError = __tools__.createAuthError;
  var xoyoUrl = globalConfig.getXoyoUrl();

  if (!isWeiXin() && !isMQQ()) {
    return;
  }

  if (globalConfig.hasEnterAuth) {
    return;
  } else {
    globalConfig.hasEnterAuth = true;
  }

  /**
   * 获取当前用户信息
   * @param response
   * @private
   */
  window.__GET_CURRENT_USER_INFO__ = function(response) {
    window.__GET_CURRENT_USER_INFO__ = undefined;
    if (response.status === 1 /* 成功 */) {
      window.__GET_CURRENT_USER_INFO__ = undefined;
      /**
       * 创建授权成功
       */
      createAuthSuccess(response.data);
    } else {
      if (response.code === -14601 /*需要授权*/) {
        /**
         * 标识需要第三方授权登录
         * @type {boolean}
         */
        globalConfig.requireThirdPartyLogin = true;
        return;
      }
      /**
       * 授权授权失败对象
       */
      var errorObject = createAuthError(response);
      /**
       * 在异步栈抛异常, 防止主线程崩溃
       */
      setTimeout(function() {
        throw new Error('第三方授权异常: ' + JSON.stringify(errorObject));
      });
    }
  };
  document.writeln(
    '<script src="//' +
    xoyoUrl +
    '/core/thirdlogin/get_current_user_info?ts=' +
    new Date().getTime() +
    '&callback=__GET_CURRENT_USER_INFO__">' +
    '<' +
    '/' +
    'script>'
  );
})(window.__tools__, window.GLOBAL_CONFIG);

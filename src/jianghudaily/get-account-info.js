(function(__tools__, globalConfig) {
  var createAuthSuccess = __tools__.createAuthSuccess;
  var createAuthError = __tools__.createAuthError;
  var xoyoUrl = globalConfig.getXoyoUrl();
  var isDailyApp = __tools__.isDailyApp;

  if (!isDailyApp()) {
    return;
  }

  if (!globalConfig.requireGetDailyAccountInfo) {
    return;
  }

  /**
   * 是否仅仅只是daily端
   * @type {boolean}
   */
  window.__DAILY_APP_AUTH__ = function(response) {
    window.__DAILY_APP_AUTH__ = undefined;
    if (response.status === 1 /* 成功 */) {
      createAuthSuccess(response.data);
      /**
       * 判断当前用户下是否有角色, 如果有将禁止其问访, 仅在 LIMIT_ONLY_HAS_JX3_ROLE_ACCESS_IN_DAILY 开关开启后生效
       */ 
      if (window.LIMIT_ONLY_HAS_JX3_ROLE_ACCESS_IN_DAILY && response.data.app_default_passport_roles && response.data.app_default_passport_roles.length === 0) {
        window.location.href = 'https://jx3.seasungame.com/error-pages/index.html?no-account';
      }
    } else {
      if (response.code === -14702 /*登录态失效，请重新登录*/) {
        window.location.href = 'https://jx3.seasungame.com/error-pages/index.html?login-expired';
        throw new Error('DAILY_APP_AUTH 登录态失效，请重新登录: ' + JSON.stringify(response));
      }
      var errorObject = createAuthError(response);
      setTimeout(function() {
        throw new Error('DAILY_APP_AUTH 授权异常: ' + JSON.stringify(errorObject));
      });
    }
  };
  document.writeln(
    '<script src="//' + xoyoUrl + '/core/jhdaily/get_current_account?ts=' + new Date().getTime() + '&callback=__DAILY_APP_AUTH__">' + '<' + '/' + 'script>'
  );
})(window.__tools__, window.GLOBAL_CONFIG);

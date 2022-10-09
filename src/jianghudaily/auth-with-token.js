(function(__tools__, globalConfig) {
  var getParameterByName = __tools__.getParameterByName;
  var xoyoUrl = globalConfig.getXoyoUrl();
  var isDailyApp = __tools__.isDailyApp;
  var removeURLParameter = __tools__.removeURLParameter;
  var replaceUrlWithoutReloading = __tools__.replaceUrlWithoutReloading;

  if (!isDailyApp()) {
    return;
  }

  if (globalConfig.hasEnterAuth) {
    return;
  } else {
    globalConfig.hasEnterAuth = true;
  }

  globalConfig.requireGetDailyAccountInfo = true;

  var token = getParameterByName('token') || getParameterByName('ssoToken');

  if (!token) {
    return;
  }

  var nextSearch = removeURLParameter(window.location.search, 'token');
  replaceUrlWithoutReloading(window.location.pathname + removeURLParameter(nextSearch, 'ssoToken') + window.location.hash);

  window.__DAILY_APP_LOGIN_BY_TOKEN__ = function(response) {
    window.__DAILY_APP_LOGIN_BY_TOKEN__ = undefined;
    if (response.status !== 1 /* 失败 */) {
      window.location.href = 'https://jx3.seasungame.com/error-pages/index.html?login-expired';
      throw new Error('DAILY_APP_AUTH 登录态失效，请重新登录: ' + JSON.stringify(response));
    }
  };
  document.writeln(
    '<script src="//' +
      xoyoUrl +
      '/core/jhdaily/login_by_token?ts=' +
      new Date().getTime() +
      '&callback=__DAILY_APP_LOGIN_BY_TOKEN__' +
      '&limit_guest=1' +
      '&token=' + token +
      (window.LIMIT_ONLY_HAS_JX3_ROLE_ACCESS_IN_DAILY ? '&query_default_passport_roles=1' : '') +
      '"><' +
      '/script>'
  );
})(window.__tools__, window.GLOBAL_CONFIG);

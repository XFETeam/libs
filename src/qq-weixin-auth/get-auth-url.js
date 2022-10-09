(function(__tools__, globalConfig) {
  var xoyoUrl = globalConfig.getXoyoUrl();
  var loginType = globalConfig.loginType;

  if (!globalConfig.requireThirdPartyLogin) {
    return;
  }
  /**
   * 获取授权地址
   * @param {object} response
   * @private
   */
  window.__GET_AUTH_URL__ = function(response) {
    window.__GET_AUTH_URL__ = undefined;
    if (response.status === 1 /* 成功 */) {
      window.location.href = response.data.auth_url;
    } else {
      throw new Error('第三方获取授权地址异常: ' + JSON.stringify(response));
    }
  };
  document.writeln(
    '<script src="//' +
      xoyoUrl +
      '/core/thirdlogin/get_auth_url?ts=' +
      new Date().getTime() +
      '&callback=__GET_AUTH_URL__&login_type=' +
      loginType +
      '&font_callback=' +
      encodeURIComponent(window.location.href) +
      '">' +
      '<' +
      '/' +
      'script>'
  );
})(window.__tools__, window.GLOBAL_CONFIG);

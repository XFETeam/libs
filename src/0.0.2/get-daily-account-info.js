(function() {
  /**
   * 获取 UA
   * @return {string}
   */
  function getUserAgent() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return userAgent.toLowerCase();
  }

  /**
   * 是否是 daily app
   * @return {boolean}
   */
  function isDailyApp() {
    return /jianghudaily/i.test(getUserAgent());
  }

  if (!isDailyApp()) {
    return;
  }

  var hostname = window.location.hostname;
  var isMasterEnv = /xoyo.com$/.test(hostname) && hostname.indexOf('test') === -1;
  var xoyoUrl = isMasterEnv ? 'ws.xoyo.com' : 'test-ws.xoyo.com';

  /**
   * 创建授权对象
   * @param {'success'|'error'} status - 授权状态, 成功或失败, success | error
   * @param {object} data - 数据
   * @param {boolean} [isXoyo] - 是否是 xoyo 授权
   */
  function createAuth(status, data, isXoyo) {
    var globalAuthName = isXoyo ? 'XOYO_AUTH' : 'THIRD_PARTY_AUTH';
    window[globalAuthName] = {
      ua: 'daily',
      status: status,
      data: data
    };
    return window[globalAuthName];
  }

  // noinspection SpellCheckingInspection
  /**
   * 创建授权成功
   * @param {string} data - 授权数据
   *  @param {boolean} isXoyo - 是否是 xoyo 授权
   */
  function createAuthSuccess(data, isXoyo) {
    return createAuth('success', data, isXoyo);
  }

  // noinspection SpellCheckingInspection
  /**
   * 创建授权错误
   * @param {object} data - 授权数据
   * @param {boolean} isXoyo - 是否是 xoyo 授权
   */
  function createAuthError(data, isXoyo) {
    return createAuth('error', data, isXoyo);
  }

  /**
   * 是否仅仅只是daily端
   * @type {boolean}
   */
  window.__DAILY_APP_AUTH__ = function(response) {
    window.__DAILY_APP_AUTH__ = undefined;
    if (response.status === 1 /* 成功 */) {
      createAuthSuccess(response.data, false);

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
      var errorObject = createAuthError(response, false);
      setTimeout(function() {
        throw new Error('DAILY_APP_AUTH 授权异常: ' + JSON.stringify(errorObject));
      });
    }
  };

  document.writeln(
    '<script src="//' + xoyoUrl + '/core/jhdaily/get_current_account?ts=' + new Date().getTime() + '&callback=__DAILY_APP_AUTH__">' + '<' + '/' + 'script>'
  );
})();

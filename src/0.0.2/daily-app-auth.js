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
   * 获取参数名
   * @param name
   * @param url
   * @returns {string|null}
   */
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[[]]/g, '$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  function removeURLParameter(url, parameter) {
    //prefer to use l.search if you have a location/link object
    var urlparts = url.split('?');
    if (urlparts.length >= 2) {
      var prefix = encodeURIComponent(parameter) + '=';
      var pars = urlparts[1].split(/[&;]/g);

      //reverse iteration as may be destructive
      for (var i = pars.length; i-- > 0; ) {
        //idiom for string.startsWith
        if (pars[i].lastIndexOf(prefix, 0) !== -1) {
          pars.splice(i, 1);
        }
      }

      return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
    }
    return url;
  }

  /**
   * 在不刷新页面的情况下替换 url
   * @param {string} nextUrl - 下一个将要替换的 url, 注意必须同源
   */
  function replaceUrlWithoutReloading(nextUrl) {
    window.history.replaceState({}, document.title, nextUrl);
  }

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
      '&callback=__DAILY_APP_LOGIN_BY_TOKEN__&limit_guest=1&token=' +
      token +
      (window.LIMIT_ONLY_HAS_JX3_ROLE_ACCESS_IN_DAILY ? '&query_default_passport_roles=1' : '') +
      '"><' +
      '/script>'
  );
})();

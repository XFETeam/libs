(function(__tools__, globalConfig, universalAuthConfig) {
  if (globalConfig.hasEnterAuth) {
    return;
  }
  var platformMessage = [universalAuthConfig.weixinQQ && '手机微信/手机QQ', universalAuthConfig.daily && '剑网3推栏'].filter(Boolean).join('/');

  if (window.location.hostname.indexOf('xoyo') > -1 || window.location.hostname.indexOf('seasungame') > -1) {
    /*
     * 在这里处理非qq,微信，daily场景
     */
    window.location.href =
        '//xfe.seasungame.com/common-errors/restrict-platform-access/index.html?qr=' +
        window.location.origin +
        window.location.pathname +
        '&title-platform=' +
        encodeURIComponent(platformMessage);
  }
})(window.__tools__, window.GLOBAL_CONFIG, window.__XFE_UNIVERSAL_AUTH_CONFIG__);

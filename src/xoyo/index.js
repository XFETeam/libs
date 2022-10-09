(function(__tools__, globalConfig) {
  var isMaster = globalConfig.isMaster;
  var createAuthSuccess = __tools__.createAuthSuccess;
  var createAuthError = __tools__.createAuthError;
  var url = isMaster ? 'pf' + '-api' : 'my-ap' + 'i-dev';
  var getXoyoInfoUrl = url + '.xoyo.com';
  window.__GET_XOYO_INFO__ = function(response) {
    window.__GET_XOYO_INFO__ = undefined;
    if (response.status === 1) {
      createAuthSuccess(response.data, true);
    } else if (response.code === -10402 /* 测试或正式环境未登录 */ || response.code === -20101 /* 测试或正式环境未登录 */) {
      response.reason = 'require-login';
      createAuthError(response, true);
    } else {
      alert('网络异常, 请稍后重试');
      throw new Error('passport/common_api/get_info 授权异常: ' + JSON.stringify(response));
    }
  };
  document.writeln(
    '<script src="//' + getXoyoInfoUrl + '/passport/common_api/get_info?ts=' + new Date().getTime() + '&callback=__GET_XOYO_INFO__">' + '</' + 'script>'
  );
})(window.__tools__, window.GLOBAL_CONFIG);

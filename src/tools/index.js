/* eslint-disable */
(function(__tools__) {
  /**
   * 是否是 daily app
   * @return {boolean}
   */
  function isDailyApp() {
    return /jianghudaily/i.test(getUserAgent());
  }

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
      for (var i = pars.length; i-- > 0;) {
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

  /**
   * 移除 url 的 query string 在不刷新页面的情况下
   */
  function removeQueryStringWithoutReloading() {
    if (window.location.search.substring(1)) {
      window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
    }
  }

  /**
   * 获取 UA
   * @return {string}
   */
  function getUserAgent() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return userAgent.toLowerCase();
  }

  /**
   * 判断是否 ios 设备
   * @return {boolean}
   */
  function isIOS() {
    return /iPad|iPhone|iPod/i.test(getUserAgent()) && !window.MSStream;
  }

  /**
   * 判断是否是 android 设备
   * @return {boolean}
   */
  function isAndroid() {
    return /android/i.test(getUserAgent());
  }

  /**
   * 判断是否是手机
   * @return {boolean}
   */
  function isMobile() {
    var userAgent = getUserAgent();
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) ||
      // eslint-disable-next-line
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ -\/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ \/])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(userAgent.substr(0, 4)));
  }

  /**
   * 是否是 微信 设备
   * @return {boolean}
   */
  function isWeiXin() {
    var userAgent = getUserAgent();
    return String(userAgent.match(/MicroMessenger/i)) === 'micromessenger';
  }

  /**
   * 判断是否是手机qq
   * @return {boolean}
   */
  function isMQQ() {
    var userAgent = getUserAgent();
    var isIOSQQ = isIOS() && / QQ/i.test(userAgent);
    var isAndroidQQ = isAndroid() && /MQQBrowser/i.test(navigator.userAgent) && /QQ/i.test(userAgent.split('mqqbrowser'));
    return isMobile() && (isIOSQQ || isAndroidQQ);
  }

  /**
   * 判断是否是手机微博 UA
   * @return {boolean}
   */
  function isMWeibo() {
    var userAgent = getUserAgent();
    return isMobile() && /(weibo)/.test(userAgent);
  }

  // noinspection SpellCheckingInspection
  /**
   * 创建授权对象
   * @param {'success'|'error'} status - 授权状态, 成功或失败, success | error
   * @param {object} data - 数据
   * @param {boolean} [isXoyo] - 是否是 xoyo 授权
   */
  function createAuth(status, data, isXoyo) {
    var globalAuthName = isXoyo ? 'XOYO_AUTH' : 'THIRD_PARTY_AUTH';
    window[globalAuthName] = {
      ua: window.GLOBAL_CONFIG.loginType,
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

  __tools__.isDailyApp = isDailyApp;
  __tools__.getParameterByName = getParameterByName;
  __tools__.removeURLParameter = removeURLParameter;
  __tools__.replaceUrlWithoutReloading = replaceUrlWithoutReloading;
  __tools__.removeQueryStringWithoutReloading = removeQueryStringWithoutReloading;
  __tools__.getUserAgent = getUserAgent;
  __tools__.isIOS = isIOS;
  __tools__.isAndroid = isAndroid;
  __tools__.isMobile = isMobile;
  __tools__.isWeiXin = isWeiXin;
  __tools__.isMQQ = isMQQ;
  __tools__.isMWeibo = isMWeibo;
  __tools__.createAuth = createAuth;
  __tools__.createAuthSuccess = createAuthSuccess;
  __tools__.createAuthError = createAuthError;
})(window.__tools__ = window.__tools__ || {});

import {getUserAgent} from 'detect-mobile-device';
import isMobile from './is-mobile';
import isIOS from './is-ios';
import isAndroid from './is-android';

/**
 * 判断是否是手机qq
 * @return {boolean}
 */
const isMQQ = () => {
  const userAgent = getUserAgent();
  const isIOSQQ = isIOS() && / QQ/i.test(userAgent);
  // eslint-disable-next-line max-len
  const isAndroidQQ = isAndroid() && /MQQBrowser/i.test(navigator.userAgent) && /QQ/i.test(userAgent.split('mqqbrowser'));

  return isMobile() && (isIOSQQ || isAndroidQQ);
};

export default isMQQ;

import {getUserAgent} from 'detect-mobile-device';
import isMobile from './is-mobile';

/**
 * 判断是否是手机微博 UA
 * @return {boolean}
 */
const isMWeibo = () => {
  const userAgent = getUserAgent();

  return isMobile() && /(weibo)/.test(userAgent);
};

export default isMWeibo;

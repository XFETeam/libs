/**
 * 是否是 微信 设备
 * @return {boolean}
 */
import {getUserAgent} from 'detect-mobile-device';

const isWeiXin = () => {
  var userAgent = getUserAgent();

  return String(userAgent.match(/MicroMessenger/i)) === 'micromessenger';
};

export default isWeiXin;

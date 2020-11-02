import {getUserAgent} from 'detect-mobile-device';

/**
 * 判断是否 ios 设备
 * @return {boolean}
 */
const isIOS = () => {
  return /iPad|iPhone|iPod/i.test(getUserAgent()) && !window.MSStream;
};

export default isIOS;

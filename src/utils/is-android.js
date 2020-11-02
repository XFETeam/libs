import {getUserAgent} from 'detect-mobile-device';

/**
 * 判断是否是 android 设备
 * @return {boolean}
 */
const isAndroid = () => {
  return /android/i.test(getUserAgent());
};

export default isAndroid;

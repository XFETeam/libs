import {getUserAgent} from 'detect-mobile-device';

/**
 * 是否是 daily app
 * @return {boolean}
 */
function isDailyApp() {
  return /jianghudaily/i.test(getUserAgent());
}

export default isDailyApp;

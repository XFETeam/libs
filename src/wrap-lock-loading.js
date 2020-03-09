/** @module wrap-lock-loading */
import { async } from './func-deco-util';
import Toast from './components/toast';
import EndThreadError from './error/EndThreadError';

let uniqueKey = 0;

/**
 * loading装饰器
 * @param {string} loadingText = loading的文本
 * @param {string} uniqueName - 唯一key
 * @return {Function}
 */
export function wrapLockLoading(loadingText = '努力加载中...', uniqueName) {
  // eslint-disable-next-line no-undef
  uniqueName = uniqueName || `__lock_async_${uniqueKey++}`;
  return async({
    before() {
      if (this[uniqueName]) {
        throw new EndThreadError();
      }
      this[uniqueName] = true;
      this.__WRAP_LOADING_SET_TIMEOUT_HOOK__ = setTimeout(() => {
        Toast.loading(loadingText);
      }, 300);
    },
    after(result) {
      result.finally(() => {
        this[uniqueName] = false;
        clearTimeout(this.__WRAP_LOADING_SET_TIMEOUT_HOOK__);
        Toast.hide();
      });
    }
  });
}

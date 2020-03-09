/** @module lock-async */
import EndThreadError from './error/EndThreadError';
import { async } from './func-deco-util';

let uniqueKey = 0;

/**
 * 异步锁
 * @param {string} [uniqueName] 唯一key
 * @return {Function}
 */
export default function lockAsync(uniqueName) {
  // eslint-disable-next-line
  uniqueName = uniqueName || `__lock_async_${uniqueKey++}`;
  return async({
    before() {
      if (this[uniqueName]) {
        throw new EndThreadError();
      }
      this[uniqueName] = true;
    },
    after(result) {
      if (result && result.then) {
        result.finally(() => {
          this[uniqueName] = false;
        });
      } else {
        this[uniqueName] = false;
      }
    }
  });
}

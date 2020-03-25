/** @module lock-async */
import EndThreadError from './error/EndThreadError';
import { async } from './func-deco-util';

let uniqueKey = 0;
const context = {};

/**
 * 锁定异步请求装饰器
 * 开发者可以通过 lockAsync 装饰器确保在 async 结束过程中不会有二次调用, 即防止一个按钮在"没完成"时被多次点击
 *
 * 使用方式1:
 *
 * class {
 *   @lockAsync()
 *   async onXXXClick() {
 *     await xxx.getUserInfo()
 *   }
 * }
 *
 * 使用方式2:
 * const locker = lockAsync();
 * locker(<函数>)
 *
 *
 * @param {string} [uniqueName] - 锁名, 一个锁名代表着一把锁, 开发者可以自定义使用同一个锁名去控制所有的锁,
 * 即当一个页面中都使用一个锁名时, 一个按钮触发的异步请求, 所有按钮都可以被锁定.
 *
 * 当不传入锁名时, 该装饰器会为每一个装饰函数设置一个唯一的锁, 即可以避免同一个按钮在"异步状态"未完成时候被多次点击
 * @returns {Function}
 */
export default function lockAsync(uniqueName = `__lock_async_${uniqueKey++}`) {
  return async({
    /**
     * 函数调用前
     */
    before() {
      const container = this || context;
      if (container[uniqueName]) {
        throw new EndThreadError();
      }
      container[uniqueName] = true;
    },
    /**
     * 函数调用后
     * @param result
     */
    after(result) {
      const container = this || context;
      if (result && result.then) {
        result
          .finally(() => {
            delete container[uniqueName];
          })
          .catch(f => f);
      } else {
        delete container[uniqueName];
      }
    }
  });
}

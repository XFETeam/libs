/** @module vm */
import { ViewModel } from 'mmlpx';
import { autobind } from 'core-decorators';
import { invariant } from './error-utils';

/**
 * 缓存 getInitialProps
 * @param {Class} VM - VM 类
 */
function cacheGetInitialProps(VM) {
  invariant(VM.getInitialProps, '每一个 vm class 必须实现 getInitialProps');
  const getInitialProps = VM.getInitialProps;
  const recycleGetInitialProps = () => {
    VM.getInitialProps.__promise__ = null;
    window.clearTimeout(VM.getInitialProps.__timeoutHook__);
  };
  // noinspection JSUndefinedPropertyAssignment
  VM.getInitialProps = function({ prefetch }) {
    if (VM.getInitialProps.__promise__) {
      console.log('hit getInitialProps cache');
      return VM.getInitialProps.__promise__;
    } else {
      console.log('miss getInitialProps cache');
    }
    const promise = getInitialProps.apply(VM, arguments);
    if (prefetch) {
      VM.getInitialProps.__promise__ = promise;
      VM.getInitialProps.__timeoutHook__ = setTimeout(recycleGetInitialProps, VM.$$config.getInitialPropsCacheExpiry);
      return VM.getInitialProps.__promise__;
    } else {
      return promise;
    }
  };
  return VM;
}

/**
 * vm 装饰器
 * @param {number} getInitialPropsCacheExpiry - 获取 initial props cache 超时时间
 * @returns {function(*=): any}
 */
export default function vm({ getInitialPropsCacheExpiry = 1000 } = {}) {
  return VM => {
    invariant(!VM.$$config, 'VM.$$config 为保留字段, 请勿覆盖');
    VM.$$config = { getInitialPropsCacheExpiry };
    return [ViewModel, autobind, cacheGetInitialProps].reduceRight((VM, hoc) => {
      return hoc(VM) || VM;
    }, VM);
  };
}

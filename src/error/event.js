import { isOKErrorCode } from './create-error-code';
import ServiceResponseError from './ServiceResponseError';
import Toast from '../components/toast';

/**
 * 事件动作
 * @type {{ToastFail: string, Pass: string, Throw: string}}
 */
export const EventAction = {
  Pass: 'pass',
  Throw: 'throw',
  ToastFail: 'toast:fail'
};

/**
 * 应对 event action 函数, 根据不同的 eventAction 做出不同的反应
 * @param {string} eventAction - 事件动作
 * @param {Error} error - 异常错误
 */
function reaction(eventAction, error) {
  switch (eventAction) {
    case EventAction.Pass:
      return;
    case EventAction.Throw:
      throw error;
    case EventAction.ToastFail:
      Toast.fail(error.message);
      return;
    default:
      throw new Error('invalid eventAction = ' + eventAction);
  }
}

/**
 * 创建 event
 * @param {string} onOKError - 当 onOKError 的错误时应该有怎么样的操作, 操作使用 <EventAction>
 * @param {string} onServiceResponseError - 当 onServiceResponseError 的错误时应该有怎么样的操作, 操作使用 <EventAction>
 * @param {string} onUnhandledError - 当 onUnhandledError 的错误时应该有怎么样的操作, 操作使用 <EventAction>
 * @returns {Function}
 */
export function createEvent({ onOKError = EventAction.Pass, onServiceResponseError = EventAction.ToastFail, onUnhandledError = EventAction.Throw } = {}) {
  return () => {
    const handleEvent = async function(fn) {
      try {
        return await fn();
      } catch (error) {
        if (error instanceof Error) {
          if (isOKErrorCode(error.code)) {
            return reaction(onOKError, error);
          } else if (error instanceof ServiceResponseError) {
            const serviceResponse = error.serviceResponse;
            error.message = serviceResponse.message;
            return reaction(onServiceResponseError, error);
          } else {
            return reaction(onUnhandledError, error);
          }
        } else {
          throw error;
        }
      }
    };
    return function(Clazz, name, descriptor) {
      if (typeof Clazz === 'function') {
        return handleEvent(Clazz);
      } else {
        const rawFunc = descriptor.value;
        descriptor.value = function() {
          return handleEvent(() => rawFunc.apply(this, arguments));
        };
      }
    };
  };
}

/**
 * 创建常用 event 类型, 保证百分之 90 的业务使用这个 event 进行处理即可
 * @type {Function}
 */
const event = createEvent();
export default event;

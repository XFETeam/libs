/** @module customEvent */
/**
 * 发送自定义事件
 *
 * @param {{eventName, payload, window}|string} params - 参数
 * {string} eventName - 事件名
 * {object} payload - 请求数据
 * {object} window - 事件挂载元素, 默认 window
 *
 * @example
 * // 基本用例
 * 例如: (基本)
 *   dispatchCustomEvent({ eventName: Events.GameOver, payload: { score } });
 * 例如: (简写)
 *   dispatchCustomEvent(Events.GameOver);
 */
import { invariant } from './error-utils';

export function dispatchCustomEvent(params) {
  let { eventName = params, payload, dom = window } = params;
  const event = new CustomEvent(eventName, { detail: payload });
  dom.dispatchEvent(event);
}

/**
 * 处理监听事件
 * @param {{eventName, callback, dom}|string} params - 事件名
 *  {string} eventName - 事件名
 *  {object} callback - 回调
 *  {object} window - 事件挂载元素, 默认 window
 * @param {Function} [_callback] - 回调
 * @return {Function} - 返回销毁事件函数
 *
 * @example
 * // 基本用例
 * 例如: (基本)
 *    dispatchCustomEvent({ eventName: Events.GameOver, payload: { score } });
 *    const destroy = listenCustomEvent({eventName: Events.GameOver, callback: data => alert(JSON.stringify(data)));
 *    destroy();
 * 例如: (简写)
 *    const destroy = listenCustomEvent(Events.GameOver, callback: data => alert(JSON.stringify(data)));
 */
export function listenCustomEvent(params, _callback) {
  invariant(params, `params is required, params = ${params}`);
  let { eventName = params, callback = _callback, dom = window } = params;
  dom.addEventListener(
    eventName,
    e => {
      callback(e.detail, e);
    },
    false
  );
  return () => {
    dom.removeEventListener(eventName, callback, false);
  };
}

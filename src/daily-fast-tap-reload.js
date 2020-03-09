/**
 * @module daily-fast-tap-reload
 * @description
 * 在 daily app 端, 由于不支持刷新页面,
 * 所以提供这种形式进行快速点击刷新用于测试
 *
 * 限制条件:
 * 1. 仅在 daily app 端生效
 * 2. 仅在 url 中有 DAILY_FAST_TAP_RELOAD 时生效. 如: www.xxx.com?DAILY_FAST_TAP_RELOAD=1#/index
 *
 * 允许正式环境使用
 */
import DeviceUtils from './device-utils';

if (DeviceUtils.isJianghuDaily() && window.location.href.indexOf('DAILY_FAST_TAP_RELOAD') > -1) {
  /**
   * 快速点击上限
   * @type {number}
   */
  const UPPER_CLICK_TIMES = 5;

  /**
   * 超时时间, 即在 timeout 时间内完成 UPPER_CLICK_TIMES 点击次数
   * @type {number}
   */
  let timeout = 250;
  let clicks = 0;
  let timer;

  document.addEventListener('touchend', () => {
    clearTimeout(timer);
    clicks++;
    if (clicks >= UPPER_CLICK_TIMES) {
      window.location.reload.apply(window.location);
    }
    timer = setTimeout(() => (clicks = 0), timeout);
  });
}

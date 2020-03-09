/** @module reload */
import deviceUtils from './device-utils';

/**
 * 页面刷新, 针对微信中安卓 window.location['reload']() 无效的问题处理
 */
export default function reload() {
  if (deviceUtils.isIOS()) {
    /**
     * 绕过部署时检测, 允许这个行为
     */
    window.location.reload.apply(window.location);
    return;
  }
  let newTs = '&ts=' + Date.now();
  let search = window.location.search;
  let hasTs = /&ts=\d+/.test(search);
  if (hasTs) {
    search = window.location.search.replace(/&ts=\d+/, newTs);
  } else {
    if (!search) {
      search = '?';
    }
    search += newTs;
  }
  window.location.href = window.location.origin + window.location.pathname + search + window.location.hash;
}

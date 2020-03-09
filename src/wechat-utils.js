/** @module wechat-utils */
import DeviceUtils from './device-utils';
import { invariant } from './error-utils';

/**
 * 针对微信动态设置标题
 * @param {string} title - html title
 * @param {string} imgUrl - 有效的图片地址
 */
export function setTitle(title, imgUrl) {
  if (document.title === title) {
    return;
  }
  invariant(title, 'title could not be empty.');
  document.title = title;
  if (DeviceUtils.isIOS() && DeviceUtils.isWeiXin()) {
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    iframe.setAttribute('src', imgUrl || '/favicon.ico');
    const iframeCallback = function() {
      setTimeout(function() {
        iframe.removeEventListener('load', iframeCallback);
        document.body.removeChild(iframe);
      }, 0);
    };
    iframe.addEventListener('load', iframeCallback);
    document.body.appendChild(iframe);
  }
}

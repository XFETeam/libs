/**@module fix-global-blur-ios-bug  */
import DeviceUtils from './device-utils';
/**
 * 在 iOS12 的微信里，某些情况下，在弹出的软键盘回收时，顶起来的游戏页面不会落下来。
 */
if (DeviceUtils.isIOS()) {
  document.body.addEventListener(
    'blur',
    function() {
      setTimeout(() => {
        document.body.scrollTop = document.body.scrollTop - 1;
        window.scrollTo(window.scrollX, window.scrollY - 1);
      }, 0);
    },
    true
  );
}

/** @module disable-global-scroll */
/**
 * 在不需要滚动的尺寸下禁用橡皮筋效果
 * author: 牛琼
 * @return {void}
 */
export default function disableGlobalScroll() {
  if (document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight)) {
    return;
  }
  document.body.addEventListener('touchmove', e => e.preventDefault(), { passive: false });
}

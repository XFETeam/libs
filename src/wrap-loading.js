/** @module wrap-loading */
import { async } from './func-deco-util';
import Toast from './components/toast';

/**
 * 包裹嵌套 "loading" 进度条, 用于包裹函数, 使用当前装饰器在异步时会自动弹窗 loading 弹窗
 *
 * @example
 * \@wrapLoading()
 * onUserClick() {
 * }
 *
 *
 * @example
 * 自定义 loading
 *\@wrapLoading('提交中...')
 * onUserClick() {
 * }
 *
 * @param {string} loadingText - loading text 文案, 默认: 努力加载中...
 * @returns {Function}
 */
export function wrapLoading(loadingText = '努力加载中...') {
  return async({
    before() {
      this.__WRAP_LOADING_SET_TIMEOUT_HOOK__ = setTimeout(() => {
        Toast.loading(loadingText);
      }, 300);
    },
    after(result) {
      result.finally(() => {
        clearTimeout(this.__WRAP_LOADING_SET_TIMEOUT_HOOK__);
        Toast.hide();
      });
    }
  });
}

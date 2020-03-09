/** @module is-window-onload */
const onloadListenerHOF = resolve =>
  function listener() {
    window.removeEventListener('load', listener);
    resolve(true);
  };

/**
 * 判断当前 window 是否已经 onload 完成
 *
 * @example
 * const loaded = await isWindowOnload();
 *
 * @example
 * const loaded = isWindowOnload();
 * if (loaded === true) {
 *     console.log('window 已经 onload');
 * } else {
 *     loaded.then(()=> {
 *      console.log('window onload 了');
 *     })
 * }
 *
 * @param {boolean} alwaysPromisify - 总是使用 promise, 默认为 true, 这样可以保证当前方法只返回 promise 进行使用. 设置 false 时, 当 window onload 后返回 true 布尔值, 这样减少 async await 调度时间
 * @returns {boolean|Promise<boolean>}
 */
export default function isWindowOnload(alwaysPromisify = true) {
  if (document.readyState === 'complete') {
    if (alwaysPromisify) {
      return Promise.resolve(true);
    } else {
      return true;
    }
  }
  return new Promise(resolve => {
    window.addEventListener('load', onloadListenerHOF(resolve));
  });
}

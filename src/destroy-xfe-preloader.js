/** @module destroy-xfe-preloader */
import { delay } from './common-util';
import preloadImages from './preload';
import isWebpNotSupport from './is-webp-not-support';
import windowOnloadAndIdle from './window-onload-and-idle';


/**
 * 预加载资源
 * @param onProgress {Function} 预加载资源回调函数
 * @param useWebp {boolean} 是否加载webp
 * @param preloadWhitelist {Array} 预加载白名单
 * @param preloadAutoUseWebp {boolean} 是否自动加上.webp后缀
 */
const preloadResources = ({ onProgress, useWebp, preloadWhitelist, preloadAutoUseWebp } = {}) => {
  if (window.fetch /*&& !!DEPLOY_ENV*/) {
    window
      .fetch('asset-manifest.json')
      .then(res => res.json())
      .then(result => {
        let resources = Object.keys(result).reduce((set, key) => {
          const resourcePath = result[key];
          if (preloadWhitelist.test(resourcePath)) {
            if (useWebp) {
              if (preloadAutoUseWebp && /\.(jpe?g|png)$/.test(resourcePath)) {
                set.add(resourcePath + '.webp');
                return set;
              }
            }
            set.push(resourcePath);
          }
          return set;
        }, new Set([]));
        const style = 'background: rgb(248, 177, 173); color: rgb(63, 172, 203)';
        console.log('%c 预加载列表', style);
        console.log('%c ' + JSON.stringify(resources, null, 2), style);
        return preloadImages([...resources], { onProgress });
      });
  }
};

/**
 * 销毁 xfe 预加载
 * @param {boolean} preloadFirst - 是否优先预加载
 * @returns {Promise<void>}
 */
export default async function destroyXfePreloader(preloadFirst) {
  // noinspection JSUnresolvedVariable,ES6ModulesDependencies
  /**
   * 预加载是否开启
   * @type {boolean}
   */
  const preloadEnable = APP_SETTINGS.PRELOAD.enable;

  // noinspection JSUnresolvedVariable,ES6ModulesDependencies
  /**
   * 白名单
   * @type {RegExp}
   */
  const preloadWhitelist = new RegExp(APP_SETTINGS.PRELOAD.whiteList);

  // noinspection JSUnresolvedVariable,ES6ModulesDependencies,SpellCheckingInspection
  /**
   * 是否自动使用 webp, 当启用后
   * 当前浏览器也支持 webp 时
   * 内部会根据 jpe?g 或 png 自动判断并使用对应的 webp 进行预加载
   * @type {boolean}
   */
  const preloadAutoUseWebp = APP_SETTINGS.PRELOAD.autoUseWebp;

  if (!preloadEnable) {
    return;
  }

  if (window.XFE_PRELOADER) {
    if (preloadFirst) {
      await Promise.race([windowOnloadAndIdle(), delay(5000)]);
      preloadResources({
        useWebp: !isWebpNotSupport(),
        preloadWhitelist,
        preloadAutoUseWebp
      });
    } else {
      await preloadResources({
        onProgress: window.XFE_PRELOADER.updateProgress,
        useWebp: !isWebpNotSupport(),
        preloadWhitelist,
        preloadAutoUseWebp
      });
    }
    window.XFE_PRELOADER && window.XFE_PRELOADER.destroy();
  }
}

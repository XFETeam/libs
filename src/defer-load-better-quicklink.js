/** @module defer-load-better-quicklink */
import loadScript from 'load-script2';

/**
 * whether should run current plugin. I set some barrier to limit old browser from using current plugin
 * @return {Boolean}
 */
function shouldRun() {
  return !!(window.IntersectionObserver && Array.prototype.includes && window.Promise && window.URL);
}

let windowOnLoadPromise;

/**
 * window onload promise
 * @return {Promise}
 */
function windowOnLoad() {
  if (!windowOnLoadPromise) {
    windowOnLoadPromise = new Promise(function(resolve) {
      window.addEventListener('load', resolve);
    });
  }
  return windowOnLoadPromise;
}

let loadBetterQuickLinkPromise;

/**
 * 加载 better-quickLink
 * @param {string} scriptSrc - 加载脚本, 默认 '//zhcdn01.xoyo.com/xassets/lib/better-quicklink/0.0.1/better-quicklink.umd.js'
 * @returns {*}
 */
function loadBetterQuickLink(scriptSrc = '//zhcdn01.xoyo.com/xassets/lib/better-quicklink/0.0.2/better-quicklink.umd.js') {
  if (!loadBetterQuickLinkPromise) {
    loadBetterQuickLinkPromise = loadScript(scriptSrc);
  }
  return loadBetterQuickLinkPromise;
}

/**
 * start the plugin
 * @param {RegExp[]|String[]} origins - script to load
 */
export default function deferLoadBetterQuicklink(origins = [window.location.hostname]) {
  if (shouldRun()) {
    Promise.all([windowOnLoad(), loadBetterQuickLink()]).then(() => {
      window.betterQuicklink.removeIframeStrategyContainer();
      window.betterQuicklink({
        useIframeStrategy: true,
        origins
      });
    });
  }
}

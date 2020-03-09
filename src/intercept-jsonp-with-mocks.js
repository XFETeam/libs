/** @module intercept-jsonp-with-mocks */
/**
 * 添加脚本
 * @param {string} src - script地址
 * @param {string} id - script id
 * @return {*}
 */
function addScript(src, id) {
  let script = document.getElementById(id);
  if (!script) {
    script = document.createElement('script');
    script.src = src;
    script.id = id;
    document.head.appendChild(script);
    return new Promise(resolve => {
      script.onload = resolve;
    });
  }
  return Promise.resolve();
}

/**
 * 打开 mock overlay
 * @param mocks
 * @return {Promise<*>}
 */
export default async function interceptJsonpWithMocks(mocks) {
  await addScript('//zhcdn01.xoyo.com/xassets/lib/mock-overlay/alpha/index.es6.js', '__ZT_MOCK_OVERLAY__');
  return await window.MOCK_OVERLAY({ mocks });
}

/**
 * 在不刷新页面的情况下替换 url
 * @param {string} nextUrl - 下一个将要替换的 url, 注意必须同源
 */
const replaceUrlWithoutReloading = (nextUrl) => {
  window.history.replaceState({}, document.title, nextUrl);
};

export default replaceUrlWithoutReloading;

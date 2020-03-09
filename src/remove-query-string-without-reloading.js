/** @module remove-query-string-without-reloading */
/**
 * 移除 url 的 query string 在不刷新页面的情况下
 */
export default function removeQueryStringWithoutReloading() {
  const query = window.location.search.substring(1);
  if (query.length) {
    window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
  }
}

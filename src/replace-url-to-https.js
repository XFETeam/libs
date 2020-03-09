/** @module replace-url-to-https */
/**
 * 将 http url 替换为 https
 * @param {string} url - url 地址, 如 http://localhost:3000
 * @returns {string}
 */
export default function replaceUrlToHttps(url) {
  if (url) {
    return url.replace(/^http:/, 'https:');
  }
  return url;
}

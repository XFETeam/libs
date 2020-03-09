/** @module query-string-util */
import qs from 'qs';

qs.getSearchParams = (queryString = window.location.search.slice(1, 99999), opts) => {
  return qs.parse(queryString, opts);
};

/**
 * 获取地址 search 参数
 * @param queryString - url 搜索部分, 如: https://www.npmjs.com/package/qs?value=123, queryString 的值应为: value=123, 默认使用地址栏的 search
 * @param opts - parse 参数
 *
 * @example
 *  * 例如: qs.getSearchParams('value=123&name=allen')
 * 返回: "{\"value\":\"123\",\"name\":\"allen\"}" 对象
 *
 * 例如地址栏是: https://www.npmjs.com/package/qs?utm_source=wx
 * const searchParams = qs.getSearchParams();
 * console.log(searchParams.utm_source);
 * // wx
 *
 * @returns {object}
 */
export default qs;

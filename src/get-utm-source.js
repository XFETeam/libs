import qs from './query-string-util';

/**
 * 获取地址栏中的 utm_source
 * @example
 * 如: https://material-ui.com/zh/discover-more/backers?utm_source=wx
 * getUtmSource()
 * // return wx
 */
export default function getUtmSource() {
  return qs.getSearchParams.utm_source || '';
}

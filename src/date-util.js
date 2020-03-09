/** @module date-util */
import { invariant } from './error-utils';

export default class DateUtil {
  /**
   * * 始终获取北京时间戳
   *
   * @example
   * 以 1571901825000 时间戳为基准
   *
   * 将电脑设置成北京时区:
   * new Date(1571901825000)
   * Thu Oct 24 2019 15:23:45 GMT+0800 (中国标准时间)
   *
   * 将电脑设置成日本时区:
   * 1571901825000 + ((new Date()).getTimezoneOffset() + 480) * 60 * 1000
   * new Date(1571898225000)
   * Thu Oct 24 2019 15:23:45 GMT+0900 (日本标准时间)
   *
   * 将电脑设置成澳洲时区:
   * 1571901825000 + ((new Date()).getTimezoneOffset() + 480) * 60 * 1000
   * 1571891025000
   * new Date(1571901825000 + ((new Date()).getTimezoneOffset() + 480) * 60 * 1000)
   * Thu Oct 24 2019 15:23:45 GMT+1100 (澳大利亚东部夏令时间)
   *
   * 最后我们可以使用生成的:
   * const date = new Date(getBeijingTime(timeStamp));
   * `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
   *
   * 忽略最终的 local 时区, 在部分业务场景中可以直接使用如下
   *
   * <div>`${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}` (发布会时间为北京时间)</div>
   *
   * @param {number} timeStamp - 时间戳, 暂不使用 unix time 时间戳
   * @param {boolean} disableUnixCheck - 禁用 unix 时间戳检查, 默认关闭
   * @returns {Date}
   */
  static getBeijingTimeStamp(timeStamp, { disableUnixCheck = false } = {}) {
    // noinspection JSUnresolvedVariable
    if (IS_DEV_ENV && !disableUnixCheck) {
      invariant(String(timeStamp) > 10, 'timeStamp 长度过短, 潜在可能传入了 unix time. 请核对时间或将 unix time x 1000');
    }
    return new Date(timeStamp + (new Date().getTimezoneOffset() + 480) /* 东八区北京分钟差 */ * 60 * 1000);
  }

  /**
   * 格式化日期
   * @example
   *  formatDate(new Date(), "yyyy年mm月dd hh时MM分ss秒")
   * // "2019年17月24 17时10分29秒"
   *
   * @param {Date} dateObj - 日期对象
   * @param {string} format - 格式化对象 - "yyyy/mm/dd hh:MN:ss"
   * @return {*}
   */
  static formatDate(dateObj, format) {
    const date = {
      'M+': dateObj.getMonth() + 1,
      'd+': dateObj.getDate(),
      'h+': dateObj.getHours(),
      'm+': dateObj.getMinutes(),
      's+': dateObj.getSeconds(),
      'q+': Math.floor((dateObj.getMonth() + 3) / 3),
      'S+': dateObj.getMilliseconds()
    };
    if (/(y+)/i.test(format)) {
      format = format.replace(RegExp.$1, (dateObj.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    for (let k in date) {
      if (new RegExp('(' + k + ')').test(format)) {
        format = format.replace(RegExp.$1, RegExp.$1.length === 1 ? date[k] : ('00' + date[k]).substr(('' + date[k]).length));
      }
    }
    return format;
  }
}

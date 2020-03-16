/** @module date-formatter */

/**
 * 格式化时间 例：1532522852044毫秒 => 2018/7/25 20:47
 * @param {number} time 时间
 * @param {boolean} withMinuteAndSecond - 是否携带“分秒”
 */
export const formatTime = (time, withMinuteAndSecond = true) => {
  const date = new Date(time);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const minSecond = withMinuteAndSecond ? ` ${hour < 10 ? '0' + hour : hour}:${minute < 10 ? '0' + minute : minute}` : '';
  return `${year}/${month}/${day} ${minSecond}`;
};

/**
 * 根据时间间隔，计算出天数 2852044005毫秒 => 33天
 * @param {number} time 时间
 */
export const getDayPeriod = time => {
  return Math.floor(time / 1000 / 60 / 60 / 24);
};

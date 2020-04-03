/**
 * 初始化pageLeave函数
 * @param {Object} stReportSdk
 * @return {*}
 */
export default function initTrackPageLeave(stReportSdk) {
  return function () {
    stReportSdk.trackPageLeave();
  };
}

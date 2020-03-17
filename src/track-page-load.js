/**
 * 初始化pageLoad埋点函数
 * @param stReportSdk
 * @param report
 * @param getDiffRouteTime
 * @return {Function}
 */
export default function initTrackPageLoad(stReportSdk, report, getDiffRouteTime) {
  return function () {
    stReportSdk.trackPageLoad();

    report({
      eventName: 'load_page_start',
      eventDescription: '页面加载',
      eventDataValue: {
        td_pl: getDiffRouteTime()
      }
    });
  };
}

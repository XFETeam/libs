import getReport from './report';
import initTrackPageLoad from './track-page-load';
import initTrackPageLeave from './track-page-leave';

/**
 * 初始化tracker
 * @param {function} createTracker 生成的createTracker函数
 * @param {Object} config 埋点config
 * @param  {Object} thirdPartyAuthStore 第三方授权store
 * @return {*}
 */
export default function initTracker(createTracker, config, thirdPartyAuthStore) {
  const { stReportSdk, getDiffRouteTime, report } = getReport(config, thirdPartyAuthStore);
  const $$tracker = createTracker(report, getDiffRouteTime);
  const trackPageLoad = initTrackPageLoad(stReportSdk, report, getDiffRouteTime);
  const trackPageLeave = initTrackPageLeave(stReportSdk);

  return { $$tracker, stReportSdk, getDiffRouteTime, report, trackPageLoad, trackPageLeave };
}

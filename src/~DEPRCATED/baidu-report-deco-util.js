/** @module ~DEPRCATED/baidu-report-deco-util */
import { sync } from '../func-deco-util';

/**
 * 百度上报装饰器
 *
 * 用法:
 *
 * class xx extends React.Component {
 *     @baiduReport('点赞')
 *     handleClick() {
 *         // 你的逻辑
 *     }
 * }
 */
export function baiduReport(eventName) {
  return sync(() => {
    window._hmt.push(['_trackEvent', 'button', eventName, 'click']);
  });
}

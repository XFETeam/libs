/* eslint-disable camelcase */
import StReportSdk from '@xfe/st-report-sdk';

/**
 * 当登录后同时上报登录授权信息
 * @param thirdPartyAuthStore
 * @return {{wechat_uid: undefined, passport_uid: undefined, qq_uid: undefined}}
 */
function getTrackerAuthInfo(thirdPartyAuthStore) {
  // noinspection JSUnresolvedVariable
  const thirdUid = thirdPartyAuthStore.data?.uid_encode;
  // noinspection JSUnresolvedVariable,SpellCheckingInspection
  const thirdPartyAuthStoreUa = thirdPartyAuthStore.ua;
  // noinspection SpellCheckingInspection

  return {
    qq_uid: thirdPartyAuthStoreUa === 'qq' ? thirdUid : undefined,
    wechat_uid: thirdPartyAuthStoreUa === 'wechat' ? thirdUid : undefined,
    /* 春丽坚持使用 passport_uid, 个人建议过使用 */
    passport_uid: thirdPartyAuthStoreUa === 'daily' ? thirdUid : undefined
  };
}

/**
 * @type function
 * 计算上一次路由时间,
 * 对应买点中的: ev_d.td_pl(秒)
 */
const getDiffRouteTime = StReportSdk.getDiffRouteTime;

/**
 *
 * @param config
 * @param thirdPartyAuthStore
 * @return {{ev_d: any}|{stReportSdk: *, getDiffRouteTime: Function, report: report}}
 */
export default function getReport(config, thirdPartyAuthStore) {
  const params = {
    projectIdentifier: config.identify /* 项目标识: 如: jx3, 必须填写！！*/,
    eventTags: config.eventTags /* 必须填写！！专题tags，这个数组需要替换为埋点文档上的 ev_tag, 最后一个 js4_xxxx_20181204 往往是专题标识 */,
    eventGroup: config.eventGroup /* 必须填写！！专题tags，这个数组需要替换为埋点文档上的 ev_tag, 最后一个 js4_xxxx_20181204 往往是专题标识 */,
    beforeReport({ ev_d, ...restProps }) {
      return { ev_d: Object.assign(ev_d, getTrackerAuthInfo(thirdPartyAuthStore)), ...restProps };
    }
  };

  const stReportSdk = StReportSdk.getInstance(params, false /* 是否开日志上报的 logger，默认是生产环境不开，平时开；想要关可以直接设为false */);

  const report = ({
    eventName /* String 事件名 一般是英文 */,
    eventDescription /* String 事件描述 一般是中文 */,
    eventGroup /* String 事件组，一般只有一个，例如“webstat”，若有多个，则用空格隔开，注意是字符串不是数组哦 */,
    eventDataValue = {} /* String 事件数据*/,
    types,
    ...restProps
    /* 其他参数详见 sdk https://gitlab.xsjcs.cn/xfe/st-report-sdk
    和 Wiki http://wiki.xsjcs.cn/pages/viewpage.action?pageId=18068827 */
  }) => {
    if (eventName === 'load_page') {
      throw new Error('禁止手动上报 load_page 事件, 模板 src/tracker/track-page-load.js 默认已调用 stReportSdk.trackPageLoad(); 请再三核对');
    }
    try {
      if (types && eventDataValue) {
        const errorMessages = Object.keys(eventDataValue).reduce((errorMessages, key) => {
          if (!types[key](eventDataValue[key])) {
            errorMessages.push(`${eventName} 上报的 eventDataValue.${key} 的类型不符合`);
          }
          return errorMessages;
        }, []);

        if (errorMessages.length) {
          throw new Error(errorMessages.join('\r\n'));
        }
      }

      stReportSdk.report({
        eventName,
        eventDescription,
        eventDataValue,
        eventGroup,
        eventTags: params.eventTags,
        ...restProps
      });
    } catch (e) {
      // 为了能够继续往后走, 但是能够上报
      setTimeout(() => {
        throw e;
      });
    }
  };

  return { stReportSdk, getDiffRouteTime, report };
}

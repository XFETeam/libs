/** @module get-award-url */

function encodeJsonString(jsonObject) {
  return encodeURIComponent(JSON.stringify(jsonObject));
}

/**
 * 获取<实物奖励>跳转地址
 * @param {string} realAwardUrl 实物领奖地址
 * @param {string} ztRootAddress 专题根地址
 * @param {string} recordSn - 记录SN码
 * @param {string} prizeName - 奖品名
 * @param {string} realName - 名字
 * @param {string} address - 地址
 * @param {string} phone - 电话
 * @param {string} note - 笔记
 * @param {string} projectId - 埋点projectId
 * @return {string} 领奖表单跳转地址
 */
export function getRealAwardUrl({ realAwardUrl, ztRootAddress, recordSn, prizeName, realName, address, phone, note, projectId }) {
  const awardUrl = realAwardUrl;
  const jsonString = encodeJsonString({
    prizeId: recordSn,
    realName,
    phone,
    address,
    note,
    prizeName,
    submitUrl: `${ztRootAddress}/p/${projectId}/auth_code_lottery/take_award`,
    redirectUrl: window.location.href,
    submitNamePrizeId: 'prize_log_id',
    submitNamePhone: 'phone',
    submitNameAddress: 'address',
    submitNameRealName: 'real_name',
    isCurrentAccountOnly: 1, // 是否只有当前账户可以领取
    /*isQueue: 1,
    scope: 'component_point_shop_jhdaily190903',
    authUrl: `${ZT_ROOT_ADDRESS}/core/jhdaily/auth` /!*输入排队授权接口地址*!/,*/
    projectIdentifier: 'daily',
    eventTags: ['mo', 'phhd'],
    eventGroup: 'tuilan_jfsc_20190814'
    // ...getStReportSdkParams()
  });
  return `${awardUrl}?json=${jsonString}`;
}

/**
 * 获取<虚拟奖励>跳转地址
 * @param {string} realAwardUrl 实物领奖地址
 * @param {string} ztRootAddress 专题根地址
 * @param {string} recordSn - 记录SN码
 * @param {string} prizeName - 奖品名
 * @param {string} projectId - 埋点projectId
 * @return {string} 领奖表单跳转地址
 */
export function getVirtualAwardUrl({ virtualAwardUrl, ztRootAddress, recordSn, prizeName, projectId }) {
  const awardUrl = virtualAwardUrl;
  const jsonString = encodeJsonString({
    prizeId: recordSn,
    prizeName,
    redirectUrl: window.location.href,
    submitUrl: `${ztRootAddress}/p/${projectId}/auth_code_lottery/take_award`,
    submitNamePrizeId: 'prize_log_id',
    isCurrentAccountOnly: 1,
    submitNameZone: 'zone_id',
    submitNameServer: 'server_id',
    submitNameRoleName: 'role_id',
    projectIdentifier: 'daily',
    /*isQueue: 1,
    scope: 'component_point_shop_jhdaily190903',
    authUrl: `${ZT_ROOT_ADDRESS}/core/jhdaily/auth`,*/
    eventTags: ['mo', 'phhd'],
    eventGroup: 'tuilan_jfsc_20190814'

    // ...getStReportSdkParams()
  });
  return `${awardUrl}?json=${jsonString}`;
}

/**
 * 获取<虚拟奖励-只选区服>跳转地址
 * @param {string} realAwardUrl 实物领奖地址
 * @param {string} ztRootAddress 专题根地址
 * @param {string} recordSn - 记录SN码
 * @param {string} prizeName - 奖品名
 * @param {string} projectId - 埋点projectId
 * @return {string} 领奖表单跳转地址
 */
export function getVirtualAwardZoneUrl({ virtualAwardZoneUrl, ztRootAddress, recordSn, prizeName, projectId }) {
  const awardUrl = virtualAwardZoneUrl;
  const jsonString = encodeJsonString({
    prizeId: recordSn,
    prizeName,
    redirectUrl: window.location.href,
    submitUrl: `${ztRootAddress}/p/${projectId}/auth_code_lottery/take_award`,
    submitNamePrizeId: 'prize_log_id',
    submitNameZone: 'zone_name',
    isDaily: 1 /*这个商城只支持daily，所以固定为1*/,
    /* isQueue: 1,
    scope: 'component_point_shop_jhdaily190903',
    authUrl: `${ZT_ROOT_ADDRESS}/core/jhdaily/auth`,*/
    projectIdentifier: 'daily',
    eventTags: ['mo', 'phhd'],
    eventGroup: 'tuilan_jfsc_20190814'
    // ...getStReportSdkParams()
  });
  return `${awardUrl}?json=${jsonString}`;
}

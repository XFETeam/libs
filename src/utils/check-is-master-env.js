/**
 * 判断当前环境是否是正式环境
 * @returns {boolean|boolean}
 */
const checkIsMasterEnv = () => {
  const {hostname} = window.location;
  const isNotTest = hostname.indexOf('test') === -1;
  const isXoyoHost = hostname.indexOf('xoyo.com') > -1;

  // return isMaster === undefined ? isMaster : (isNotTest && isXoyoHost);
  return isNotTest && isXoyoHost;
};

export default checkIsMasterEnv;

import getUrlParameterByName from '../../../utils/get-url-parameter-by-name';

/**
 * 获取推栏 daily 授权 token
 * @returns {string | null}
 */

const getDailyToken = () => {
  return getUrlParameterByName('token') || getUrlParameterByName('ssoToken') || null;
};

export default getDailyToken;

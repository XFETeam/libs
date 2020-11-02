import jsonp from 'jsonp-promise';
import {XOYO_ROOT_API} from '../../constants';

const services = {

  /**
   * 获取用户账号信息
   * @returns {Promise<unknown>}
   */
  getCurrentUserInfo: ()=>{

    const qs = `ts=${+new Date()}`;

    return jsonp(`${XOYO_ROOT_API}/core/thirdlogin/get_current_user_info?${qs}`, {}).promise;
  },

  /**
   * 获取登录信息地址
   * @param loginType
   * @param callbackUrl
   * @returns {Promise<unknown>}
   */
  // eslint-disable-next-line max-len
  getAuthUrl: ({loginType, callbackUrl = encodeURIComponent(window.location.href) }) => {
    const qs = `ts=${+new Date()}&login_type=${loginType}&font_callback=${callbackUrl}`;

    return jsonp(`${XOYO_ROOT_API}/core/thirdlogin/get_auth_url?${qs}`, {}).promise;
  }
};

export default services;

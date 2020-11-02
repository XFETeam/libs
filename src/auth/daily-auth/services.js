import jsonp from 'jsonp-promise';
import {XOYO_ROOT_API} from '../../constants';

const services = {
  /**
   * 通过 token 登录
   * @param limitGuest
   * @param token
   * @param limitOnlyHasJx3RoleAccessInDaily
   * @returns {{cancel: *, promise: Promise<any>}}
   */
  loginByToken: ({limitGuest = 1, token, limitOnlyHasJx3RoleAccessInDaily = false}) => {
    // eslint-disable-next-line max-len
    const qs = `ts=${+new Date()}&limit_guest=${limitGuest}&token=${token}${limitOnlyHasJx3RoleAccessInDaily ? '&query_default_passport_roles=1' : ''}`;

    return jsonp(`${XOYO_ROOT_API}/core/jhdaily/login_by_token?${qs}`, {}).promise;
  },

  /**
   * 获取用户登录信息
   * @returns {{cancel: *, promise: Promise<any>}}
   */
  getAccountInfo: () => {
    const qs = `ts=${+new Date()}`;

    return jsonp(`${XOYO_ROOT_API}/core/jhdaily/get_current_account?${qs}`, {}).promise;
  }

};

export default services;

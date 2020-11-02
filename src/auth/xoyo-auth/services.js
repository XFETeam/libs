import {XOYO_LOGIN_API} from '../../constants';
import jsonp from 'jsonp-promise';

const services = {

  /**
   * 获取xoyo登录信息
   * @returns {{cancel: *, promise: Promise<any>}}
   */
  getInfo: ()=> {
    const qs = `ts=${+new Date()}`;

    return jsonp(`${XOYO_LOGIN_API}/passport/common_api/get_info?ts=${qs}`, {}).promise;
  }

};

export default services;

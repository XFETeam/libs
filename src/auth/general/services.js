import jsonp from 'jsonp-promise';
import {PASSPORT_ROOT_ADDRESS} from '../../constants';

const generalServices = {

  /**
   * 退出登录
   * @returns {{cancel: *, promise: Promise<any>}}
   */
  logout: ()=> {
    return jsonp(`${PASSPORT_ROOT_ADDRESS}/logout`, {}).promise;
  }

};

export default generalServices;

import generalServices from './services';
import {MOBILELOGIN_URL} from '../../constants';

const GeneralTools = {
  /**
   * XOYO移动端登录
   */
  login: () => {
    const encodedURL = window.location.href; // 重定向到本页面

    window.location.href = `${MOBILELOGIN_URL}?redirect=${encodedURL}`;
  },

  /**
   * xoyo退出
   * @param shouldRefresh
   * @param onSuccess
   * @param onFail
   * @returns {Promise<*>}
   */
  logout: async ({shouldRefresh = false, onSuccess = {}, onFail = {}}) => {

    const response = await generalServices.logout();

    if (response.status === 1) {
      shouldRefresh && location.reload();
      // shouldTips && Toast.success(tipsContent ? tipsContent : '退出登录成功');
      onSuccess && onSuccess();
      // onSuccess?.();

    } else {
      onFail && onFail();
      // onFail?.();
    }
    return response;
  }

};

export default GeneralTools;

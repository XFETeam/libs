/** @module jsonp-util */
import jsonpPromise from 'jsonp-promise';
import qs from './query-string-util';
import ServiceResponse from './models/ServiceResponse';

/**
 * jsonp 请求
 * @param {string} url - 请求地址
 * @param {object} params - 请求参数
 * @param {bool} isMockOn - 是否使用mock
 * @returns {Promise<ServiceResponse>}
 */
function jsonp(url, params = {}, isMockOn) {
  const requestOptions = { url, params };
  /**
   * 当网络离线时, 直接返回离线异常
   */
  if (navigator && navigator.onLine === false) {
    return Promise.reject(new ServiceResponse(ServiceResponse.ClientError.Offline));
  }
  try {
    // 使用 __ts__ 确保请求不会被各种原因缓存
    params = Object.assign({}, { __ts__: +new Date() }, params);
    const promise = jsonpPromise(url + '?' + qs.stringify(params), {
      // 明确命名空间
      prefix: '__xfe',
      // 保证在 mock 开启时不超时
      timeout: isMockOn ? 9999999 : undefined
    }).promise;
    return promise
      .then(response => {
        return new ServiceResponse({ ...response });
      })
      .catch(error => {
        if (ServiceResponse.isApiResponseShape(error)) {
          // noinspection JSCheckFunctionSignatures
          error = new ServiceResponse({ ...error, requestOptions });
        }
        throw error;
      });
  } catch (err) {
    if (err.message === 'Timeout') {
      return Promise.reject(new ServiceResponse(ServiceResponse.ClientError.Timeout));
    }
    throw err;
  }
}

jsonp.customWrap = async (url, params) => {
  const serviceResponse = await jsonp(url, params);
  if (serviceResponse.isSuccess()) {
    return serviceResponse.data;
  } else {
    return Promise.reject(serviceResponse);
  }
};

export default jsonp;

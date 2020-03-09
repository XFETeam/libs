import createErrorClass from '../create-error-class';
import errorCodeManager, { ErrorCodeType } from '../create-error-code';

/**
 * "服务端返回"异常
 * @type {{name, new(...[*]): CustomClass, constructor: *, __proto__, prototype: CustomClass}}
 */
const ServiceResponseError = class extends createErrorClass('ServiceResponseError', errorCodeManager(-400000, ErrorCodeType.Warn)) {
  /**
   * @type {ServiceResponse} serviceResponse - 异常数据
   */
  serviceResponse;

  /**
   * @param {ServiceResponse} serviceResponse - 异常数据
   * @param {string} [message] - 异常信息
   */
  constructor(serviceResponse, message) {
    super(message || '请求服务端异常: ' + serviceResponse.message);
    this.serviceResponse = serviceResponse;
  }
};

export default ServiceResponseError;

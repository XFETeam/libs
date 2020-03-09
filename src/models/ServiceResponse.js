import Validator from 'schema-validator';

/**
 * 服务端返回结构体
 */
export default class ServiceResponse {
  static ClientError = {
    Offline: {
      code: 'c:-1',
      message: '没有网络哦'
    },
    Timeout: {
      code: 'c:-2',
      message: '网络超时了'
    }
  };

  /**
   * 判断是不是 api 返回的 response 结构
   * @param {object} data - 判断对象数据
   * @return {boolean}
   */
  static isApiResponseShape(data) {
    const apiResponseSchema = {
      code: { type: Number, required: true },
      data: { type: Object, required: true },
      message: { type: String, required: true }
    };
    const validator = new Validator(apiResponseSchema);
    const { _error } = validator.check(data);
    return !_error;
  }

  /**
   * @type {number} code - 错误码
   */
  code;
  /**
   * @type {number} status - 错误码
   */
  status;
  /**
   * @type {object} data - 服务端返回具体数据
   */
  data;
  /**
   * @type {string} msg - 错误信息
   */
  msg;
  /**
   * @type {string} message - 错误信息
   */
  message;
  /**
   * @type {object} [requestOptions] - 请求配置, 可用于 resend 重试请求
   */
  requestOptions;

  /**
   * @param {string} message - 提示信息, 通常只会在异常的时候返回
   * @param {number|string} code - 错误码
   * @param {object} [data] - 数据主体
   * @param {object} [requestOptions] - 请求配置, 可用于 resend 重试请求
   */
  constructor({ message, code, data = {}, requestOptions }) {
    this.message = message;
    this.msg = message;
    this.code = Number(code);
    this.status = this.code;
    this.data = data;
    this.requestOptions = requestOptions;
  }

  isSuccess() {
    return this.code === 1;
  }

  isError() {
    return !this.isSuccess();
  }
}

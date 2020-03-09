/**
 * 创建错误 class 帮助方法
 * @ref https://medium.com/@xpl/javascript-deriving-from-error-properly-8d2f8f315801
 * @param {string} errorName - 错误名
 * @param {number} errorCode - 错误码
 * @param {string} [defaultErrorMessage] - 默认错误信息
 * @return {*}
 */
export default function createErrorClass(errorName, errorCode, defaultErrorMessage) {
  return class CustomClass extends window.Error {
    constructor(...args) {
      super(...args);
      if (!this.message) {
        defaultErrorMessage && (this.message = defaultErrorMessage);
      }
      this.constructor = CustomClass;
      // noinspection JSUnusedGlobalSymbols
      this.__proto__ = CustomClass.prototype;
      this.name = errorName;
      this.code = errorCode;
      // Error.captureStackTrace(this, CustomClass);
    }
  };
}

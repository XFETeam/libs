import invariant from 'invariant';

/**
 * 错误码类型枚举
 * @type {{OK: string}}
 */
export const ErrorCodeType = {
  /**
   * 跟踪
   */
  Trace: 'trace',
  /**
   * 允许通过 error 捕获的错误码段
   */
  OK: 'ok',
  /**
   * 调试
   */
  Debug: 'debug',
  /**
   * 警告
   */
  Warn: 'warn',
  /**
   * 错误
   */
  Error: 'error',
  /**
   * 致命错误
   */
  Fatal: 'fatal'
};

/**
 * 是否是 "跟踪" 的错误类型
 * 范围 -100,000 ~ -199,999
 */
export function isTraceErrorCode(code) {
  return code <= -100000 && code > -200000;
}

/**
 * 是否是 ok 的错误类型
 * 范围 -200,000 ~ -299,999
 */
export function isOKErrorCode(code) {
  return code <= -200000 && code > -300000;
}

/**
 * 是否是 "调试" 的错误类型
 * 范围 -300,000 ~ -399,999
 */
export function isDebugErrorCode(code) {
  return code <= -300000 && code > -400000;
}

/**
 * 是否是 "警告" 的错误类型
 * 范围 -400,000 ~ -499,999
 */
export function isWarnErrorCode(code) {
  return code <= -400000 && code > -500000;
}

/**
 * 是否是 "错误级别" 的错误类型
 * 范围 -500,000 ~ -599,999
 */
export function isErrorErrorCode(code) {
  return code <= -500000 && code > -600000;
}

/**
 * 是否是 "致命错误" 的错误类型
 * 范围 -600,000 ~ -699,9999
 */
export function isFatalErrorCode(code) {
  return code <= -600000 && code > -700000;
}

/**
 * 校验错误码
 * @param {number} code - 错误码
 * @param {boolean} condition - 判错条件
 */
function validateErrorCode(code, condition) {
  invariant(condition, `错误码范围异常, code = ${code}`);
}

/**
 * 创建错误码
 * @param {number} code - 错误码
 * @param {string} type - 错误码类型
 */
export default function createErrorCode(code, type) {
  switch (type) {
    /* 范围 -200,000 ~ -299,9999 */
    case ErrorCodeType.OK:
      validateErrorCode(code, isOKErrorCode(code));
      return code;
    /* 范围 -400,000 ~ -499,999 */
    case ErrorCodeType.Warn:
      validateErrorCode(code, isWarnErrorCode(code));
      return code;
    /* 范围 -500,000 ~ -599,999 */
    case ErrorCodeType.Error:
      validateErrorCode(code, isErrorErrorCode(code));
      return code;
    default:
      throw new Error(`错误错误码类型 type = ${type}`);
  }
}

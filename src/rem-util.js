/** @module rem-util */
/**
 * rem 比例
 * @type {number}
 */
const remRatio = process.env.REM_RATIO || 75;

/**
 * rem 转 px
 * @example
 * 1. 10rem转换
 * 2. 调用: rem2px(10)
 * 3. 结果: 100
 *
 * 1. 10rem转换
 * 2. 调用: rem2px('10rem')
 * 3. 结果: 100px
 *
 * @param {number | string} value - rem值
 * @return {number|string}
 */
export function rem2px(value) {
  let val = parseFloat(value) * remRatio;
  if (typeof value === 'string' && value.match(/rem$/)) {
    val += 'px';
  }
  return val;
}

/**
 * px 转 rem
 * @example
 * 1. 100px转换
 * 2. 调用: px2rem(100)
 * 3. 结果: 10
 *
 * 1. 100px转换
 * 2. 调用: px2rem('100px')
 * 3. 结果: 10rem
 *
 * @param  {number | string} value - px值
 * @return {number|string}
 */
export function px2rem(value) {
  let val = parseFloat(value) / remRatio;
  if (typeof value === 'string' && value.match(/px$/)) {
    val += 'rem';
  }
  return val;
}

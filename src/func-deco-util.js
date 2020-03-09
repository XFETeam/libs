/** @module func-deco-util */
import { isPromise } from './type-utils';

/**
 * 装饰器辅助方法
 * 同步
 *
 * @example
 * \@sync((e) => e.target.value)
 * onChange(value) {
 *   console.log(value);
 * }
 *
 * @example
 * \@sync({before: (e) => e.target.value})
 * onChange(value) {
 *   console.log(value);
 * }
 *
 * @example
 * \@sync({after: (result) => console.log(result)})
 * onChange(e) {
 *   return e.target.value
 * }
 */
export function sync(param) {
  if (typeof param === 'function') {
    param = { before: param };
  }
  const { before, after } = param;
  return (Clazz, name, descriptor) => {
    const rawFunc = descriptor.value;
    descriptor.value = function() {
      /**
       * 执行前执行装饰器 before 钩子函数
       */
      let beforeResult = before && before.apply(this, arguments);
      /**
       * 判断结果是不是 undefined,
       * 是, 直接使用之前的 arguments
       * 否, 将结果作为被装饰函数参数使用
       *
       * 这种做法是为了简化代码编写, 但有如下缺点:
       * 1. undefined 关键词被占用
       * 2. 当需要返回多个时候, 只能在被装饰函数中再次结构 array 使用
       */
      beforeResult === undefined ? (beforeResult = arguments) : (beforeResult = [beforeResult]);

      /**
       * 执行被装饰函数
       */
      const result = rawFunc.apply(this, beforeResult);
      /**
       * 将结果交给 after result 进行再次加工
       */
      let afterResult = after && after.call(this, result, arguments);
      /**
       * 将结果交给 after result 进行再次加工,
       * 这种做法是为了简化代码编写, 但有如下缺点:
       * 1. undefined 值被再次占用
       */
      afterResult === undefined && (afterResult = result);
      return afterResult;
    };
  };
}

/**
 * 装饰器辅助方法
 * 异步
 *
 * @example
 * \@async(() => wrapJsonp('https://apps-ws.xoyo.com/passport/get_info'))
 *
 * \@example
 * @async({before: ()=> wrapJsonp('https://apps-ws.xoyo.com/passport/get_info')})
 *
 * \@example
 * @async({after: ()=> wrapJsonp('https://apps-ws.xoyo.com/passport/get_info')})
 */
export function async(param) {
  if (typeof param === 'function') {
    param = { before: param };
  }
  const { before, after } = param;
  return (Clazz, name, descriptor) => {
    const rawFunc = descriptor.value;
    descriptor.value = async function() {
      /**
       * 执行前执行装饰器 before 钩子函数
       */
      let beforeResult = before && before.apply(this, arguments);
      /**
       * 如果 beforeResult 函数返回 promise, 代表其实异步函数, 使用await获取异步结果
       */
      isPromise(beforeResult) && (beforeResult = await beforeResult);
      /**
       * 判断结果是不是 undefined,
       * 是, 直接使用之前的 arguments
       * 否, 将结果作为被装饰函数参数使用
       *
       * 这种做法是为了简化代码编写, 但有如下缺点:
       * 1. undefined 关键词被占用
       * 2. 当需要返回多个时候, 只能在被装饰函数中再次结构 array 使用
       */
      beforeResult === undefined ? (beforeResult = arguments) : (beforeResult = [beforeResult]);
      /**
       * 执行被装饰函数
       */
      const result = rawFunc.apply(this, beforeResult);
      /**
       * 将结果交给 after result 进行再次加工
       */
      let afterResult = after && after.call(this, result, arguments);
      /**
       * 将结果交给 after result 进行再次加工,
       * 这种做法是为了简化代码编写, 但有如下缺点:
       * 1. undefined 值被再次占用
       */
      afterResult === undefined && (afterResult = result);
      return afterResult;
    };
  };
}

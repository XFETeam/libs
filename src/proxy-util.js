/** @module proxy-util */
/**1
 * 拦截方法, 用于 AOP 函数
 *
 * 拦截console输出, 这个时候在console前也会alert同样的内容
 * e.g. console.log = proxy(console, 'log', alert);
 *
 * 拦截微信分享
 * e.g.
 * WeixinJSBridge.invoke = proxy(WeixinJSBridge, 'invoke', function(type, params) {
 *  // 根据 type 类型也可以在这里做统计上报工作
 *  console.log(type, params)
 * })
 *
 * @param {object} context - 环境变量
 * @param {string} name - 环境变量所拥有的属性
 * @param {{before:Function, after: Function}} invoker - 触发器, 当直接传入函数时, 在执行代理函数前执行, 传入对象可以决定先后
 * @return {Function}
 */
export default function proxy(context, name, invoker) {
  if (typeof invoker === 'function') {
    invoker = { before: invoker };
  }
  const rawFunc = context[name];
  return function() {
    invoker.before && invoker.before.apply(this, arguments);
    rawFunc.apply(this, arguments);
    invoker.after && invoker.after.apply(this, arguments);
  };
}

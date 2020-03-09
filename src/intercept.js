/**@module intercept */
/**
 * 拦截function
 * @param {object} context 上下文
 * @param {string} functionName 函数名
 * @param {Function} action
 * @param {object} bind
 */
export default function intercept(context, functionName, action, bind = context) {
  const raw = context[functionName];
  context[functionName] = function() {
    // 绑回指定 context
    action && action.apply(bind);
    // 绑回原生
    return raw && raw.apply(context);
  };
}

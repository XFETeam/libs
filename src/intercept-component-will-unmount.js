/** @module intercept-component-will-unmount */
/**
 * 拦截 componentWillUnmount
 * @param {object} componentContext 组件上下文
 * @param {object} action
 */
export default function interceptComponentWillUnmount(componentContext, action) {
  if (componentContext) {
    const raw = componentContext.componentWillUnmount;
    componentContext.componentWillUnmount = function() {
      action && action.apply(componentContext);
      /**
       * 传入 componentContext 为了修正 react hot loader 的二次处理
       */
      raw && raw.apply(componentContext);
    };
  }
}

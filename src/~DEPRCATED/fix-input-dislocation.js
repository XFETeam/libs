import DeviceUtils from '../device-utils';
const noop = () => {};

/**
 *
 * fixInputDislocation => 解决 ios 下 input 框失焦会把页面顶上去，页面/点击错位的问题
 *
 * 用法有以下两种：
 *  1. fixInputDislocation.bindNode(elementNode);
 *     直接把需要解决的 input 节点作为参数传进去
 *  2. fixInputDislocation.getEventMethods();
 *     返回 onFocus 和 onBlur，把 onFocus 和 onBlur 绑到相应的 input 节点上
 *     const { onFocus, onBlur } = fixInputDislocation.getEventMethods();
 *     <input onFocus={onFocus} onBlur={onBlur} />
 *
 * @example
 * import * as React from 'react';
 * import fixInputDislocation from '@src/utils/fix-input-dislocation';
 * import styles from './index.less';
 *
 * export default class Main extends React.Component {
 *  componentDidMount() {
 *    fixInputDislocation.bindNode(this.input2);
 *  }
 *
 *  render() {
 *    const { onFocus, onBlur } = fixInputDislocation.getEventMethods();
 *    return (
 *      <div className={styles.main}>
 *        <input onFocus={onFocus} onBlur={onBlur} data-name="usage 1" />
 *        <input ref={node => (this.input2 = node)} data-name="usage 2" />
 *      </div>
 *    );
 *  }
 * }
 */
class InputDislocation {
  static getScrollTop() {
    return document.documentElement.scrollTop || document.body.scrollTop;
  }

  // 如果不是在工作流上引用，那么应该用不了 DeviceUtils.isIOS, 请用注释掉的代码代替 DeviceUtils.isIOS
  static isIOS() {
    return DeviceUtils.isIOS() || true;
    // return (
    //   /iPad|iPhone|iPod/i.test(
    //     navigator.userAgent || navigator.vendor || window.opera
    //    ) && !window.MSStream
    // );
  }

  constructor() {
    this.scrollTop = InputDislocation.getScrollTop();
    this.isFocusing = false;
    this.isCaching = false;
    window.addEventListener('scroll', this.onScroll);
    this.timeout = null;
  }
  // resetScrollTop
  onBlur = () => {
    document.body.scrollTop = InputDislocation.getScrollTop() - 1;

    // 暂时只保留 -1 的方案，如果有问题，再解决
    // this.isFocusing = false;
    // this.isCaching = true;
    // setTimeout(() => {
    //   if (this.isFocusing) return;
    //   document.body.scrollTop = this.scrollTop;
    //   this.isCaching = false;
    // }, 100);
  };
  // saveScrollTop
  onFocus = () => {
    this.isFocusing = true;
    if (!this.isCaching) {
      this.scrollTop = InputDislocation.getScrollTop();
    }
  };

  onScroll = () => {
    this.scrollTop = InputDislocation.getScrollTop();
  };

  bindNode(elementNode) {
    if (!elementNode) {
      throw new Error('The method "bindNode" must contain a parameter: elementNode');
    }

    if (!InputDislocation.isIOS()) {
      return;
    }

    elementNode.addEventListener('focus', this.onFocus);
    elementNode.addEventListener('blur', this.onBlur);
  }

  getEventMethods() {
    if (!InputDislocation.isIOS()) {
      return { onBlur: noop, onFocus: noop };
    }

    return {
      onBlur: this.onBlur,
      onFocus: this.onFocus
    };
  }
}

const FixInputDislocation = new InputDislocation();

export default FixInputDislocation;

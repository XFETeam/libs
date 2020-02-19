/* eslint-disable react/prop-types */
import React from 'react';
import { string, oneOfType, number } from 'prop-types';

class Component extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isScriptReady: !!window.loadlive2d
    };
    this.rootId = new Date().getTime() + Math.round(Math.random() * 10e10);
  }

  /**
   * 加载脚本
   * @param ｛string｝src - 加载脚本地址
   * @returns {Promise<void>}
   */
  loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.onload = resolve;
      script.onerror = resolve;
      script.src = src;
      document.head.appendChild(script);
    });
  }

  /**
   * 更新 state
   * @param ｛object｝nextState - 下一个状态
   * @returns {Promise<object>}
   */
  updateState(nextState) {
    if (!this.isUnmount) {
      return new Promise(resolve => {
        this.setState(nextState, () => resolve(this.state));
      });
    }
    return Promise.resolve(this.state);
  }

  async componentDidMount() {
    const { isScriptReady } = this.state;
    const { live2dScriptUrl, modelJsonUrl } = this.props;
    if (!isScriptReady) {
      await this.loadScript(live2dScriptUrl);
      await this.updateState({ isScriptReady: true });
    }
    window.loadlive2d(this.rootId, modelJsonUrl);
  }

  componentWillUnmount() {
    this.isUnmount = true;
  }

  render() {
    const { live2dScriptUrl, modelJsonUrl, ...restProps } = this.props;
    return <canvas {...restProps} id={this.rootId} />;
  }
}

Component.defaultProps = {
  modelJsonUrl: '//zhcdn01.xoyo.com/xassets/lib/live2d/unknown/example/model.json',
  live2dScriptUrl: '//zhcdn01.xoyo.com/xassets/lib/live2d/unknown/live2d.min.js'
};

Component.propsTypes = {
  /**
   * modelJson 看板娘配置地址
   * 默认：‘//zhcdn01.xoyo.com/xassets/lib/live2d/unknown/example/model.json‘ （用于 demo）
   */
  modelJsonUrl: string,
  /**
   * live2d 脚本地址
   * 默认：'//zhcdn01.xoyo.com/xassets/lib/live2d/unknown/live2d.min.js'
   */
  live2dScriptUrl: string,
  /**
   * canvas 宽度
   */
  width: oneOfType([number, string]).isRequired,
  /**
   * canvas 高度
   */
  height: oneOfType([number, string]).isRequired
};

export default Component;

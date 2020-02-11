# @xfe-team/snowy

> 下雪动效

[![NPM](https://img.shields.io/npm/v/@xfe-team/snowy.svg)](https://www.npmjs.com/package/snowy) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @xfe-team/snowy
```

## Usage

```jsx
import React, { Component } from 'react'

import MyComponent from '@xfe-team/snowy'

class Example extends Component {
  render () {
    return (
      <MyComponent />
    )
  }
}
```

## API
```JavaScript
Component.defaultProps = {
  getSnowyParent: window,
  flakeColor: '255,255,255',
  flakeCount: 200,
  flakeForceDistance: 100,
  computeFlakeSize: () => Math.random() * 3 + 2, // 加号后面的值，雪花大小，为基准值，数值越大雪花越大
  computeFlakeSpeed: () => Math.random() + 0.5, // 加号后面的值，雪花速度，为基准值，数值越大雪花速度越快
  computeFlakeOpacity: () => Math.random() * 0.5 + 0.3 // 加号后面的值，为基准值，范围0~1
};

Component.propsTypes = {
  /**
   * 获取下雪容器，
   * 默认： window， 即全屏下雪
   */
  getSnowyParent: oneOfType([func, object]),
  /**
   * 雪花颜色
   * 默认： rgba 中的 “255,255,255”
   */
  flakeColor: string,
  /**
   * 雪花数目
   * 默认： 200
   */
  flakeCount: number,
  /**
   * 雪花弹出“用力”距离
   * 在 PC 端时默认情况下为 mousemove 时弹开雪花
   * 在移动端时默认情况下为 touchmove 时弹开雪花
   * 默认： 100
   */
  flakeForceDistance: number,
  /**
   * 计算雪花每一片大小
   * 具体参考 defaultProps
   */
  computeFlakeSize: func,
  /**
   * 计算雪花飘落速读
   * 具体参考 defaultProps
   */
  computeFlakeSpeed: func,
  /**
   * 计算雪花渐变透明度
   * 具体参考 defaultProps
   */
  computeFlakeOpacity: func
};
```

## License

MIT © [xfe-team](https://github.com/xfeteam)

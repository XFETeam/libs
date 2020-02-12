# @xfe-team/snowy

> 下雪动效

[![NPM](https://img.shields.io/npm/v/@xfe-team/snowy.svg)](https://www.npmjs.com/package/snowy) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

[https://xfeteam.github.io/libs/@xfe-team/snowy/index.html](https://xfeteam.github.io/libs/@xfe-team/snowy/index.html)

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
   * 当值为 number： 代表无论在什么分辨率都为该数量的雪花
   * 当值为 func 时： （area）=> number, 参数为面积，即当前雪花容器的面积，可以根据 area/系数 动态算入雪花值
   * 当值为 string 时， 有效值只可以是 high， low， medium， 这将代表雪花的密集程度将会是 密集（high），一般（medium），稀疏（low），这也是会动态根据当前容器面积动态计算
   * 默认： 200
   */
  flakeCount: oneOfType([func, number, oneOf(['high', 'low', 'medium'])]),
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

## ChangeLog
## 0.0.3 (2020-02-13)

* fix: 修复 `getSnowyParent` props 设置为 window 时 canvas 宽高为 0 的 bug

## 0.0.1 (2020-02-13)

* feat: init commit

## 来源

[听说冬天和雪花更配哦: https://imjad.cn/archives/code/sounds-winter-and-snowflakes-are-more-compatible/](https://imjad.cn/archives/code/sounds-winter-and-snowflakes-are-more-compatible/)

## License

MIT © [xfe-team](https://github.com/xfeteam)

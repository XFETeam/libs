# @xfe-team/live2d

> live2d react component

[![NPM](https://img.shields.io/npm/v/@xfe-team/live2d.svg)](https://www.npmjs.com/package/@xfe-team/live2d) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

[https://xfeteam.github.io/libs/@xfe-team/live2d/index.html](https://xfeteam.github.io/libs/@xfe-team/live2d/index.html)

## Install

```bash
npm install --save @xfe-team/live2d
```

## Usage

```jsx
import React from 'react'
import Live2d from '@xfe-team/live2d'

class Example extends React.PureComponent {
  render () {
    return (
      <Live2d
        modelJsonUrl="//zhcdn01.xoyo.com/xassets/lib/live2d/unknown/example/model.json"
        width="560"
        height="500"
      />
    )
  }
}
```

## API
```JavaScript
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
```

## License

MIT © [xfe-team](https://github.com/xfeteam)

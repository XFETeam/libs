# @xfe-team/json-monaco-editor

> json 在线编辑工具, 通过 iframe 进行外部通信, 当前工具主要解决内部系统对 monaco-editor 打包缓慢的问题

[![NPM](https://img.shields.io/npm/v/@xfe-team/json-monaco-editor.svg)](https://www.npmjs.com/package/@xfe-team/json-monaco-editor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Demo

[https://xfeteam.github.io/libs/@xfe-team/json-monaco-editor/index.html](https://xfeteam.github.io/libs/@xfe-team/json-monaco-editor/index.html)

## Install

```bash
npm install --save @xfe-team/json-monaco-editor
```

## Usage

```jsx
import React, { Component } from 'react'

import JSONMonacoEditor from '@xfe-team/json-monaco-editor'

class Example extends Component {
  render () {
    return (
      <JSONMonacoEditor />
    )
  }
}
```

## API
```JavaScript
| 参数      | 说明                       | 类型                                    | 默认值 | 必填 |
| --------- | -------------------------- | --------------------------------------- | ------ | ---- |
| onChange | 当代码变更时回调 | (code: string) => void                                 | -      | 是   |
| code  | 代码 | string      | -   | 是   |
| reloadInitialCode  | 重置代码, 当触发快捷键 \(重置初始化代码\) 时回调 | () => void      | -   | 否   |
```

## Iframe

当组件作为 `iframe` 页面时将发起 postMessage 通知父页面, 目前 postMessage 数据结构共2种, 分别为 `onChange` 和 `onValidJsonChange`:

```json
{
  "namespace": "@xfe-team/json-monaco-editor",
  "event": "onChange",
  "code": "{ \"name\": \"test\" }"
}

{
  "namespace": "@xfe-team/json-monaco-editor",
  "event": "onValidJsonChange",
  "code": "{ \"name\": \"test\" }"
}
```

其中:
  namespace: 命名空间
  event: 事件名称
  data: 事件数据

事件:
  onChange: 当任意输入时回调
  onValidChange: 当输入时候且输入的为合法 JSON 时回调

#### 父页面基本用法

```JavaScript
  window.addEventListener('message', (e) => {
      const { data } = e;
      if (data && data.namespace === '@xfe-team/json-monaco-editor' && data.event === 'onChange') {
          const { code } = data;
          console.log({ code });
      }
  });
```


# 快捷键

| Description      | Windows / Linux        | Mac                                   |
| ---------------- | ---------------------- | ------------------------------------- |
| 重置初始化代码   | Ctrl \+ Shift \+ R     | Command \+ Shift \+ R                 |
| 搜索             | Ctrl \+ F              | Command \+ F                          |
| 增大间距         | Tab                    | Tab                                   |
| 缩小间距         | Shift \+ Tab           | Shift \+ Tab                          |
| 注释             | Ctrl \+ /              | Command \+ /                          |
| 反注释           | Ctrl \+ /              | Command \+ /                          |
| 撤销             | Ctrl \+ Z              | Command \+ Z                          |
| 反撤销           | Ctrl \+ Y              | Shift \+ Command \+ Z or Command \+ Y |
| 增大文字大小     | Ctrl \+ \.             | Command \+ \.                         |
| 缩小文字大小     | Ctrl \+ ,              | Command \+ ,                          |
| 减少间距         | Ctrl \+ \[             | Command \+ \[                         |
| 增大间距         | Ctrl \+ \]             | Command \+ \]                         |
| 向下移动将当前行 | Alt \+ Down            | Option \+ Down                        |
| 向上移动将当前行 | Alt \+ Up              | Option \+ Up                          |
| 替换             | Ctrl \+ F              | Command \+ Alt \+ F                   |
| 全选             | Ctrl \+ A              | Command \+ A                          |
| 向下选中         | Shift \+ Down          | Shift \+ Down                         |
| 向右选中         | Shift \+ Right         | Shift \+ Right                        |
| 向左选中         | Shift \+ Left          | Shift \+ Left                         |
| 向上选中         | Shift \+ Up            | Shift \+ Up                           |
| 选中至末尾       | Alt \+ Shift \+ Right  | Command \+ Shift \+ Right             |
| 选中至起始       | Alt \+ Shift \+ Left   | Command \+ Shift \+ Left              |
| 向右对齐         | Ctrl \+ Shift \+ Right | Option \+ Right                       |
| 向左对齐         | Ctrl \+ Shift \+ Left  | Option \+ Left                        |
| 向上多选光标     | Ctrl \+ Alt \+ Up      | Command \+ Alt \+ Up                  |
| 向下多选光标     | Ctrl \+ Alt \+ Down    | Command \+ Alt \+ Down                |

## CI 地址
https://travis-ci.org/XFETeam/libs

## License

MIT © [xfe-team](https://github.com/xfeteam)

# @xfe-team/json-monaco-editor

> json 在线编辑工具, 通过 iframe 进行外部通信, 当前工具主要解决内部系统对 monaco-editor 打包缓慢的问题, 目前仅支持作为 iframe 使用

[![NPM](https://img.shields.io/npm/v/@xfe-team/json-monaco-editor.svg)](https://www.npmjs.com/package/@xfe-team/json-monaco-editor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Iframe 地址

其中 `{VERSION}` 请参考 `README.md ChangeLog` 版本, 并替换, 如: `0.0.1`, `0.1.0` 等

```jsx
// react iframe
<iframe src="//zhcdn01.xoyo.com/xassets/iframe/json-monaco-editor/{VERSION}/index.html" frameBorder={0} allowFullScreen />
```

## API

```ts
// 组件方法签名
const JsonMonacoEditor = ({ onChange, code, reloadInitialCode, options, ...restProps }) => React.Node;
```

| 参数      | 说明                       | 类型                                    | 默认值 | 必填 |
| --------- | -------------------------- | --------------------------------------- | ------ | ---- |
| onChange | 当代码变更时回调 | (code: string) => void                                 | -      | 是   |
| code  | 代码 | string      |  -   | 是   |
| reloadInitialCode  | 重置代码, 当触发快捷键 \(重置初始化代码\) 时回调 | () => void      | -   | 否   |
| height  | 高度 | number \| string | 700   | 否   |
| theme  | 主题 | 'vs'\|'vs-dark' | 'vs'   | 否   |
| language  | 语言 | string | 'json'   | 否   |

其中, `restProps` 将代理给 [react-monaco-editor](https://github.com/react-monaco-editor/react-monaco-editor) 组件.

需注意以下固定值, 如字段 `value`, `options`, `onChange`, `editorDidMount` 将不提供修改, 这是因为内部以使用该字段并进行一些内部逻辑处理:

```jsx
<ReactMonacoEditor
  height="100vh"
  width="100vw"
  theme="vs"
  language="json"
  {...restProps}
  {...stateProps}
  onChange={handleChange}
  editorDidMount={editorDidMount}
/>
```

### 支持语言

```javascript
const languages = [
  'json',
  'xml',
  'yaml',
  'abap',
  'apex',
  'azcli',
  'bat',
  'cameligo',
  'clojure',
  'coffee',
  'cpp',
  'csharp',
  'csp',
  'css',
  'dockerfile',
  'fsharp',
  'go',
  'graphql',
  'handlebars',
  'html',
  'ini',
  'java',
  'javascript',
  'json',
  'kotlin',
  'less',
  'lua',
  'markdown',
  'mips',
  'msdax',
  'mysql',
  'objective-c',
  'pascal',
  'pascaligo',
  'perl',
  'pgsql',
  'php',
  'postiats',
  'powerquery',
  'powershell',
  'pug',
  'python',
  'r',
  'razor',
  'redis',
  'redshift',
  'restructuredtext',
  'ruby',
  'rust',
  'sb',
  'scheme',
  'scss',
  'shell',
  'solidity',
  'sophia',
  'sql',
  'st',
  'swift',
  'tcl',
  'twig',
];
```

## Iframe

当组件作为 `iframe` 页面时将发起 postMessage 通知父页面, 目前 postMessage 分别为 `onChange`, `onValidJsonChange`, `onLoad`,
其中 `onLoad` 在 iframe 加载完后直接触发一次

```json
{
  "namespace": "@xfe-team/json-monaco-editor",
  "event": "onChange",
  "code": "{ \"name\": \"test\" }",
  "uid": "a941816c-7f89-443c-a178-5be32e6835c3"
}

{
  "namespace": "@xfe-team/json-monaco-editor",
  "event": "onValidJsonChange",
  "code": "{ \"name\": \"test\" }",
  "uid": "a941816c-7f89-443c-a178-5be32e6835c3"
}

{
  "namespace": "@xfe-team/json-monaco-editor",
  "event": "onLoad",
  "code": "",
  "uid": "a941816c-7f89-443c-a178-5be32e6835c3"
}
```

其中:
  namespace: 命名空间
  event: 事件名称
  data: 事件数据
  uid: 事件 id, 用于区分多个 Iframe 同一类型事件

事件:
  onChange: 当任意输入时回调
  onValidChange: 当输入时候且输入的为合法 JSON 时回调
  onLoad: 当作为 Iframe 页面时页面所有资源加载完毕后回调


接受 `window.addEventListener('message')`, 其中 `onLoad` 中 `data` 为当前 `editor` 所需更新的 `props`, 如 `{ value: 'some code' }`, 换句话说, 首次传入代码到 `editor`
是通过 iframe postMessage 进行的, 所以项管限制请查阅 `postMessage API`

```json
{
  "namespace": "@xfe-team/json-monaco-editor",
  "event": "onLoad",
  "data": {...},
  "uid": "a941816c-7f89-443c-a178-5be32e6835c3"
}
```

#### 父页面基本用法

```JavaScript
  window.addEventListener('message', (e) => {
      const { data } = e;
      if (data && data.namespace === '@xfe-team/json-monaco-editor' && data.event === 'onChange' && data.uid === 'a941816c-7f89-443c-a178-5be32e6835c3') {
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

## ChangeLog

## 0.1.0 (2019-05-22)

* feat: 取消直接作为单独组件使用, 仅提供 Iframe 的用途.

## 0.0.1 (2019-05-21)

* init: init commit

## License

MIT © [xfe-team](https://github.com/xfeteam)

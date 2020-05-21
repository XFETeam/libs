# @xfe-team/post-message

> iframe post message 协议约定库

## 安裝

```bash
  yarn add @xfe-team/post-message
```

## API
```javascript
const DEFAULT_EVENT_NAME = '@@DEFAULT@@';
const DEFAULT_TIMEOUT = 10 * 1000;

export default class PostMessage {
  /**
   * @param {string} namespace - 命名空间
   * @param {string|number} [uid] - 默认 uid, 用于区分不同的 post message 使用
   * @param {string} [targetOrigin] - 与 window.postMessage 中的 targetOrigin 同样含义.
   * 详细请参考: https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage, 默认: '*'
   * @param {string} [event] - 默认事件名称, 当方法 on 或 emit 不传入时将直接使用 event 作为默认值
   */
  constructor({ namespace, uid, targetOrigin = '*', event = DEFAULT_EVENT_NAME }) {
    ...
  }

  /**
   * emit 发送 post message
   * @param {(data, error) => void} callback - 请求数据
   * @param {string} [event] - 事件名称
   * @param {string} [uid] - 事件唯一 id, 通过这个可以确保每一次 post message 都是唯一的, 推荐用自增 id
   * @param {string} [namespace] - 命名空间, 我们可以使用一个项目名作为一个命名空间, 当不传入时将直接使用 PostMessage 构造函数时当前实例的命名空间
   * @param {string} [targetOrigin] - 事件名称
   */
  emit(data, { event = this.event, uid = this.uid, namespace = this.namespace, targetOrigin = this.targetOrigin }) {
    ...
  }

  /**
   * 监听事件
   * @param {object|string} data - 请求数据
   * @param {string} [event] - 事件名称
   * @param {string} [uid] - 事件唯一 id, 通过这个可以确保每一次 post message 都是唯一的, 推荐用自增 id
   * @param {string} [namespace] - 命名空间, 我们可以使用一个项目名作为一个命名空间, 当不传入时将直接使用 PostMessage 构造函数时当前实例的命名空间
   * @param {string} [targetOrigin] - 事件名称
   * @param {boolean} [callbackWhenDispose] - 是否在销毁时触发 callback 回调
   * @param {number|false|undefined} [timeout] - 回调超时时间
   */
  on(callback,
    {
      targetOrigin = this.targetOrigin,
      uid = this.uid,
      event = this.event,
      namespace = this.namespace,
      timeout,
      callbackWhenDispose = false
    } = {}
  ) {
    ...
  }

  /**
   * promise emit 发送 post message
   * @param {object|string} data - 请求数据
   * @param {string} event - 事件名称
   * @param {string} uid - 事件唯一 id, 通过这个可以确保每一次 post message 都是唯一的, 推荐用自增 id
   * @param {string} namespace - 命名空间, 我们可以使用一个项目名作为一个命名空间, 当不传入时将直接使用 PostMessage 构造函数时当前实例的命名空间
   * @param {string} targetOrigin - 事件名称
   */
  pEmit(data, { event, uid, namespace, targetOrigin, timeout = DEFAULT_TIMEOUT }) {
    ...
  }
}
```

## Get Started

```javascript
import PostMessage from "@xfe-team/post-message";

new PostMessage();
```

## ChangeLog

## 0.0.1 (2020-xx-xx)

- Add - init commit

## 作者
She Ailun

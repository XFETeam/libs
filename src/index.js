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
    this.namespace = namespace;
    this.uid = uid;
    this.targetOrigin = targetOrigin;
    this.event = event;
    this.post = this.post.bind(this);
    this.on = this.on.bind(this);
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
    window.parent.postMessage({
      event,
      data,
      uid,
      namespace
    }, targetOrigin);
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
    let timeoutHook = timeout ? setTimeout(() => {
      const error = {
        code: 'timeout',
        message: 'timeout'
      };

      callback(null, error);
    }, timeout) : undefined;

    const listener = (e) => {
      const origin = e.origin || e.originalEvent.origin;
      const { data } = e;

      if (origin !== targetOrigin && data && data.event === event && data.uid === uid && namespace === this.namespace) {
        clearTimeout(timeoutHook);
        callback(data);
      }
    };

    window.addEventListener('message', listener);
    return () => {
      window.addEventListener('message', listener);
      if (callbackWhenDispose) {
        const error = {
          code: 'disposed',
          message: 'disposed'
        };

        callback(null, error);
      } else {
        timeout && clearTimeout(timeoutHook);
      }
    };
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
    return new Promise((resolve, reject) => {
      const onOptions = { targetOrigin, uid, event, namespace, timeout, callbackWhenDispose: true };

      this.on((data, error) => {
        error ? reject(error) : resolve(data);
      }, onOptions);
      this.emit(data, { event, uid, namespace, targetOrigin });
    });
  }
}

import qs from 'qs';
import getLocationQueryString from './get-location-query-string';

export default class ParentWindowEmitter {
  _isUnderIframe = window.location !== window.parent.location;

  constructor({ uid }) {
    this.uid = uid;
    this.namespace = '@xfe-team/json-monaco-editor';
  }

  postMessage(name, data) {
    if (this._isUnderIframe) {
      window.parent.postMessage({
        namespace: this.namespace,
        event: name,
        code: data,
        uid: this.uid
      }, '*');
    }
  }

  onLoad() {
    const onLoad = () => {
      this.postMessage('onLoad', '');
      window.removeEventListener('load', onLoad);
    };
    if (document.readyState === 'complete') {
      onLoad();
    } else {
      window.addEventListener('load', onLoad);
    }
  }

  addOnLoadReceivedListener(callback) {
    const listener = (e) => {
      if (e) {
        const { data } = e;
        if (data && data.event === 'onLoad' && data.uid === this.uid && data.namespace === this.namespace) {
          callback(data.data);
        }
      }
      window.removeEventListener('message', listener);
    }
    window.addEventListener('message', listener);
    return () => {
      window.removeEventListener('message', listener);
    }
  }

  // 当代码发生变更时
  onChange(newCode) {
    this.postMessage('onChange', newCode);
  }

  _isJsonValid(str) {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return false;
    }
  }

  // 当合法 json 保存时
  onValidJsonChange(newCode) {
    const isJsonValid = this._isJsonValid(newCode);
    if (isJsonValid) {
      this.postMessage('onValidJsonChange', newCode);
    }
  }
}

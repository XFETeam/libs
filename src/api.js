export default class ParentWindowEmitter {
  _isUnderIframe = window.location !== window.parent.location

  postMessage(name, data) {
    if (this._isUnderIframe) {
      window.parent.postMessage({
        namespace: '@xfe-team/json-monaco-editor',
        event: name,
        code: data
      }, '*');
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

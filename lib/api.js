"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _qs = _interopRequireDefault(require("qs"));

var _getLocationQueryString = _interopRequireDefault(require("./get-location-query-string"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ParentWindowEmitter = /*#__PURE__*/function () {
  function ParentWindowEmitter() {
    _classCallCheck(this, ParentWindowEmitter);

    _defineProperty(this, "_isUnderIframe", window.location !== window.parent.location);

    this.uid = (0, _getLocationQueryString["default"])();
  }

  _createClass(ParentWindowEmitter, [{
    key: "postMessage",
    value: function postMessage(name, data) {
      if (this._isUnderIframe) {
        window.parent.postMessage({
          namespace: '@xfe-team/json-monaco-editor',
          event: name,
          code: data,
          uid: this.uid
        }, '*');
      }
    } // 当代码发生变更时

  }, {
    key: "onChange",
    value: function onChange(newCode) {
      this.postMessage('onChange', newCode);
    }
  }, {
    key: "_isJsonValid",
    value: function _isJsonValid(str) {
      try {
        JSON.parse(str);
        return true;
      } catch (e) {
        return false;
      }
    } // 当合法 json 保存时

  }, {
    key: "onValidJsonChange",
    value: function onValidJsonChange(newCode) {
      var isJsonValid = this._isJsonValid(newCode);

      if (isJsonValid) {
        this.postMessage('onValidJsonChange', newCode);
      }
    }
  }]);

  return ParentWindowEmitter;
}();

exports["default"] = ParentWindowEmitter;
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
  function ParentWindowEmitter(_ref) {
    var uid = _ref.uid;

    _classCallCheck(this, ParentWindowEmitter);

    _defineProperty(this, "_isUnderIframe", window.location !== window.parent.location);

    this.uid = uid;
    this.namespace = '@xfe-team/json-monaco-editor';
  }

  _createClass(ParentWindowEmitter, [{
    key: "postMessage",
    value: function postMessage(name, data) {
      if (this._isUnderIframe) {
        window.parent.postMessage({
          namespace: this.namespace,
          event: name,
          code: data,
          uid: this.uid
        }, '*');
      }
    }
  }, {
    key: "onLoad",
    value: function onLoad() {
      var _this = this;

      var onLoad = function onLoad() {
        _this.postMessage('onLoad', '');

        window.removeEventListener('load', onLoad);
      };

      if (document.readyState === 'complete') {
        onLoad();
      } else {
        window.addEventListener('load', onLoad);
      }
    }
  }, {
    key: "addOnLoadReceivedListener",
    value: function addOnLoadReceivedListener(callback) {
      var _this2 = this;

      var listener = function listener(e) {
        if (e) {
          var data = e.data;

          if (data && data.event === 'onLoad' && data.uid === _this2.uid && data.namespace === _this2.namespace) {
            callback(data.data);
          }
        }

        window.removeEventListener('message', listener);
      };

      window.addEventListener('message', listener);
      return function () {
        window.removeEventListener('message', listener);
      };
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
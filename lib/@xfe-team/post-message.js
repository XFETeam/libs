(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@xfe-team/post-message", [], factory);
	else if(typeof exports === 'object')
		exports["@xfe-team/post-message"] = factory();
	else
		root["@xfe-team/post-message"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var DEFAULT_EVENT_NAME = '@@DEFAULT@@';
var DEFAULT_TIMEOUT = 10 * 1000;

var PostMessage =
/*#__PURE__*/
function () {
  /**
   * @param {string} namespace - 命名空间
   * @param {string|number} [uid] - 默认 uid, 用于区分不同的 post message 使用
   * @param {string} [targetOrigin] - 与 window.postMessage 中的 targetOrigin 同样含义.
   * 详细请参考: https://developer.mozilla.org/zh-CN/docs/Web/API/Window/postMessage, 默认: '*'
   * @param {string} [event] - 默认事件名称, 当方法 on 或 emit 不传入时将直接使用 event 作为默认值
   */
  function PostMessage(_ref) {
    var namespace = _ref.namespace,
        uid = _ref.uid,
        _ref$targetOrigin = _ref.targetOrigin,
        targetOrigin = _ref$targetOrigin === void 0 ? '*' : _ref$targetOrigin,
        _ref$event = _ref.event,
        event = _ref$event === void 0 ? DEFAULT_EVENT_NAME : _ref$event;

    _classCallCheck(this, PostMessage);

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


  _createClass(PostMessage, [{
    key: "emit",
    value: function emit(data, _ref2) {
      var _ref2$event = _ref2.event,
          event = _ref2$event === void 0 ? this.event : _ref2$event,
          _ref2$uid = _ref2.uid,
          uid = _ref2$uid === void 0 ? this.uid : _ref2$uid,
          _ref2$namespace = _ref2.namespace,
          namespace = _ref2$namespace === void 0 ? this.namespace : _ref2$namespace,
          _ref2$targetOrigin = _ref2.targetOrigin,
          targetOrigin = _ref2$targetOrigin === void 0 ? this.targetOrigin : _ref2$targetOrigin;
      window.parent.postMessage({
        event: event,
        data: data,
        uid: uid,
        namespace: namespace
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

  }, {
    key: "on",
    value: function on(callback) {
      var _this = this;

      var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref3$targetOrigin = _ref3.targetOrigin,
          targetOrigin = _ref3$targetOrigin === void 0 ? this.targetOrigin : _ref3$targetOrigin,
          _ref3$uid = _ref3.uid,
          uid = _ref3$uid === void 0 ? this.uid : _ref3$uid,
          _ref3$event = _ref3.event,
          event = _ref3$event === void 0 ? this.event : _ref3$event,
          _ref3$namespace = _ref3.namespace,
          namespace = _ref3$namespace === void 0 ? this.namespace : _ref3$namespace,
          timeout = _ref3.timeout,
          _ref3$callbackWhenDis = _ref3.callbackWhenDispose,
          callbackWhenDispose = _ref3$callbackWhenDis === void 0 ? false : _ref3$callbackWhenDis;

      var timeoutHook = timeout ? setTimeout(function () {
        var error = {
          code: 'timeout',
          message: 'timeout'
        };
        callback(null, error);
      }, timeout) : undefined;

      var listener = function listener(e) {
        var origin = e.origin || e.originalEvent.origin;
        var data = e.data.data;

        if (origin !== targetOrigin && data && data.event === event && data.uid === uid && namespace === _this.namespace) {
          clearTimeout(timeoutHook);
          callback(data);
        }
      };

      window.addEventListener('message', listener);
      return function () {
        window.addEventListener('message', listener);

        if (callbackWhenDispose) {
          var error = {
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

  }, {
    key: "pEmit",
    value: function pEmit(data, _ref4) {
      var _this2 = this;

      var event = _ref4.event,
          uid = _ref4.uid,
          namespace = _ref4.namespace,
          targetOrigin = _ref4.targetOrigin,
          _ref4$timeout = _ref4.timeout,
          timeout = _ref4$timeout === void 0 ? DEFAULT_TIMEOUT : _ref4$timeout;
      return new Promise(function (resolve, reject) {
        var onOptions = {
          targetOrigin: targetOrigin,
          uid: uid,
          event: event,
          namespace: namespace,
          timeout: timeout,
          callbackWhenDispose: true
        };

        _this2.on(function (data, error) {
          error ? reject(error) : resolve(data);
        }, onOptions);

        _this2.emit(data, {
          event: event,
          uid: uid,
          namespace: namespace,
          targetOrigin: targetOrigin
        });
      });
    }
  }]);

  return PostMessage;
}();

exports.default = PostMessage;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=post-message.js.map
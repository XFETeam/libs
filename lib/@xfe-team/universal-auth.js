(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@xfe-team/universal-auth", [], factory);
	else if(typeof exports === 'object')
		exports["@xfe-team/universal-auth"] = factory();
	else
		root["@xfe-team/universal-auth"] = factory();
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

/***/ "./node_modules/detect-mobile-device/dist/index.es.js":
/*!************************************************************!*\
  !*** ./node_modules/detect-mobile-device/dist/index.es.js ***!
  \************************************************************/
/*! exports provided: getUserAgent, isMobile, isAndroid, isIOS, isWeiXin, isMWeiXin, isMQQ, isMWeibo, isJianghuDaily */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserAgent", function() { return getUserAgent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobile", function() { return isMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAndroid", function() { return isAndroid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIOS", function() { return isIOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isWeiXin", function() { return isWeiXin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMWeiXin", function() { return isMWeiXin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMQQ", function() { return isMQQ; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMWeibo", function() { return isMWeibo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isJianghuDaily", function() { return isJianghuDaily; });
/**
 * 获取 UA
 * @return {string}
 */
function getUserAgent() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return userAgent.toLowerCase();
}
/**
 * 判断是否是手机
 * @return {boolean}
 */
function isMobile() {
    var userAgent = getUserAgent();
    return (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) ||
        // eslint-disable-next-line
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ -\/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ \/])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(userAgent.substr(0, 4)));
}
/**
 * 判断是否是 android 设备
 * @return {boolean}
 */
function isAndroid() {
    return /android/i.test(getUserAgent());
}
/**
 * 判断是否 ios 设备
 * @return {boolean}
 */
function isIOS() {
    return (/iPad|iPhone|iPod/i.test(getUserAgent()) && !window.MSStream);
}
/**
 * 是否是 微信 设备
 * @return {boolean}
 */
function isWeiXin() {
    var userAgent = getUserAgent();
    return String(userAgent.match(/MicroMessenger/i)) === 'micromessenger';
}
/**
 * 判断是否是 mobile 微信
 * @return {boolean}
 */
function isMWeiXin() {
    return isMobile() && isWeiXin();
}
/**
 * 判断是否是手机qq
 * @return {boolean}
 */
function isMQQ() {
    var userAgent = getUserAgent();
    var isIOSQQ = isIOS() && / QQ/i.test(userAgent);
    var isAndroidQQ = isAndroid() &&
        /MQQBrowser/i.test(navigator.userAgent) &&
        /QQ/i.test(userAgent.split('mqqbrowser'));
    return isMobile() && (isIOSQQ || isAndroidQQ);
}
/**
 * 判断是否是手机微博 UA
 * @return {boolean}
 */
function isMWeibo() {
    var userAgent = getUserAgent();
    return isMobile() && /(weibo)/.test(userAgent);
}
/**
 * 判断是否是江湖 daily App
 */
function isJianghuDaily() {
    var userAgent = getUserAgent();
    return /jianghudaily/i.test(userAgent);
}


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/jsonp-promise/index.js":
/*!*********************************************!*\
  !*** ./node_modules/jsonp-promise/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * MIT license
 */

// Callback index.
var count = 0;

/**
 * JSONP handler
 *
 * Options:
 * - prefix {String} callback prefix (defaults to `__jp`)
 * - param {String} qs parameter (defaults to `callback`)
 * - timeout {Number} how long after the request until a timeout error
 *   is emitted (defaults to `15000`)
 *
 * @param {String} url
 * @param {Object} options optional options
 * @return {Object} Returns a response promise and a cancel handler.
 */
var jsonp = function(url, options) {
    options = options || {};

    var prefix = options.prefix || '__jp';
    var param = options.param || 'callback';
    var timeout = options.timeout ? options.timeout : 15000;
    var target = document.getElementsByTagName('script')[0] || document.head;
    var script;
    var timer;
    var cleanup;
    var cancel;
    var promise;
    var noop = function() {};

    // Generate a unique id for the request.
    var id = prefix + (count++);

    cleanup = function() {
        // Remove the script tag.
        if (script && script.parentNode) {
            script.parentNode.removeChild(script);
        }

        window[id] = noop;

        if (timer) {
            clearTimeout(timer);
        }
    };

    promise = new Promise(function(resolve, reject) {
        if (timeout) {
            timer = setTimeout(function() {
                cleanup();
                reject(new Error('Timeout'));
            }, timeout);
        }

        window[id] = function(data) {
            cleanup();
            resolve(data);
        };

        // Add querystring component
        url += (~url.indexOf('?') ? '&' : '?') + param + '=' + encodeURIComponent(id);
        url = url.replace('?&', '?');

        // Create script.
        script = document.createElement('script');
        script.src = url;
        target.parentNode.insertBefore(script, target);

        cancel = function() {
            if (window[id]) {
                cleanup();
                reject(new Error('Canceled'));
            }
        };

    });

    return {
        promise: promise,
        cancel: cancel
    };
};

module.exports = jsonp;



/***/ }),

/***/ "./src/auth/authInfo-by-appEnv/index.js":
/*!**********************************************!*\
  !*** ./src/auth/authInfo-by-appEnv/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dailyAuth = _interopRequireDefault(__webpack_require__(/*! ../daily-auth */ "./src/auth/daily-auth/index.js"));

var _qqWeixinAuth = _interopRequireDefault(__webpack_require__(/*! ../qq-weixin-auth */ "./src/auth/qq-weixin-auth/index.js"));

var _xoyoAuth = _interopRequireDefault(__webpack_require__(/*! ../xoyo-auth */ "./src/auth/xoyo-auth/index.js"));

var _globalAuthData = _interopRequireDefault(__webpack_require__(/*! ../../global-auth-data */ "./src/global-auth-data/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/**
 * 自动根据app环境返回登录信息
 *
 *  *
 * @example
 *
 * const authInfo = await getAuthInfoByAppEnv();
 * console.log(authInfo);
 *
 * daily:
 * {
 *	"ua": " daily",
 *	"status": " success",
 *	"data": {
 *  	"uid_encode": " 99bcb26b5b5859024e128f30b6317da5ee8886b2",
 *  	"external_id_name": "passport",
 *  	"account": "136***424",
 *  	"zone_name": "null",
 *  	"server_name": "null",
 *  	"role_name": "",
 *  	"token": "b93039cd0a9642b 7 bce95597d1b9b145 ",
 *  	"force": null,
 *  	"bodily": null,
 *  	"person_name": "壹加壹",
 *  	"person_avatar": "https://dl.pvp.xoyo.com/static/avatars/moren1@2x.png",
 *  	"is_wegame": 0,
 *  	"app_default_ passport_ roles": null,
 *	  "session_id'": " GdSkBWQr01RSzsbbvfCEanL445CeXCFSzbIJlMum",
 *	  "request_id": " 4ba9d5cbc992ea9f62143f32b5ac70ea1a52f29f"
 *	}
 *}
 *
 * 微信:
 *{
 *  "ua": "wechat",
 *  "status": " success",
 *  "data": {
 *	  "login_type": "wechat",
 *	  "uid": "壹",
 *	  "head_img_ url": "//thirdwx.qlogo.cn/mmopen/vi_32/.../132",
 *	  "city": "湛江",
 *	  "sex": 1,
 *	  "nickname": "壹",
 *	  "uid_encode ": "49308ecac7a551c9c2c6c4b3558619d3c34b6e8d ",
 *	  "session_id ": "OQo5ZijqWZUPdkdWlM7so3BrGNG63nk23zeQo7Ov ",
 *	  "request_id ": "ea04989dab061489d99ff558c60e50f20f4f3967 "
 *  }
 *}
 * XOYO:
 * {
 *	"code": 1,
 *	"data": {
 *		"account": "hdt******007",
 *		"account_uid": "200f51285985df39663d505a7a800b72021d52e3",
 *		"pf": "",
 *		"request_id": "8b96de3626fc81be5f63de95418ea4e8ba978333"
 *	},
 *	"status": 1,
 *	"msg": "SUCCESS",
 *	"message": "SUCCESS"
 * }
 *
 *
 * @param daily daily端
 * @param limitOnlyHasJx3RoleAccessInDaily 是否限制只有存在剑网3角色的用户登录
 * @param weixinQQ 微信QQ端
 * @param xoyo 使用金山通行证登录
 * @param debug 是否进行登录信息提示
 * @param disable 禁止登录模块
 * @returns {Promise<GlobalAuthData>}
 */
// eslint-disable-next-line max-len
var getAuthInfoByAppEnv = function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var _ref$daily, daily, _ref$limitOnlyHasJx3R, limitOnlyHasJx3RoleAccessInDaily, _ref$weixinQQ, weixinQQ, _ref$xoyo, xoyo, _ref$debug, debug, _ref$disable, disable, response, globalAuthData;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$daily = _ref.daily, daily = _ref$daily === void 0 ? true : _ref$daily, _ref$limitOnlyHasJx3R = _ref.limitOnlyHasJx3RoleAccessInDaily, limitOnlyHasJx3RoleAccessInDaily = _ref$limitOnlyHasJx3R === void 0 ? false : _ref$limitOnlyHasJx3R, _ref$weixinQQ = _ref.weixinQQ, weixinQQ = _ref$weixinQQ === void 0 ? true : _ref$weixinQQ, _ref$xoyo = _ref.xoyo, xoyo = _ref$xoyo === void 0 ? true : _ref$xoyo, _ref$debug = _ref.debug, debug = _ref$debug === void 0 ? false : _ref$debug, _ref$disable = _ref.disable, disable = _ref$disable === void 0 ? false : _ref$disable;
            globalAuthData = new _globalAuthData.default();

            if (disable) {
              _context.next = 21;
              break;
            }

            if (!daily) {
              _context.next = 10;
              break;
            }

            _context.next = 6;
            return (0, _dailyAuth.default)({
              limitOnlyHasJx3RoleAccessInDaily: limitOnlyHasJx3RoleAccessInDaily
            });

          case 6:
            response = _context.sent;
            globalAuthData.THIRD_PARTY_AUTH = response;
            _context.next = 15;
            break;

          case 10:
            if (!weixinQQ) {
              _context.next = 15;
              break;
            }

            _context.next = 13;
            return (0, _qqWeixinAuth.default)();

          case 13:
            response = _context.sent;
            globalAuthData.THIRD_PARTY_AUTH = response;

          case 15:
            if (!xoyo) {
              _context.next = 20;
              break;
            }

            _context.next = 18;
            return (0, _xoyoAuth.default)();

          case 18:
            response = _context.sent;
            globalAuthData.XOYO_AUTH = response;

          case 20:
            if (debug) {
              setTimeout(function () {
                // eslint-disable-next-line max-len
                alert('THIRD_PARTY_AUTH\n' + JSON.stringify(globalAuthData.THIRD_PARTY_AUTH));
                alert('XOYO_AUTH\n' + JSON.stringify(globalAuthData.XOYO_AUTH));
              }, 800);
            }

          case 21:
            return _context.abrupt("return", globalAuthData);

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getAuthInfoByAppEnv(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var _default = getAuthInfoByAppEnv;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/auth/daily-auth/index.js":
/*!**************************************!*\
  !*** ./src/auth/daily-auth/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getDailyToken = _interopRequireDefault(__webpack_require__(/*! ./utils/get-daily-token */ "./src/auth/daily-auth/utils/get-daily-token.js"));

var _removeUrlParam = _interopRequireDefault(__webpack_require__(/*! ../../utils/remove-url-param */ "./src/utils/remove-url-param.js"));

var _replaceUrlWithoutReloading = _interopRequireDefault(__webpack_require__(/*! ../../utils/replace-url-without-reloading */ "./src/utils/replace-url-without-reloading.js"));

var _services = _interopRequireDefault(__webpack_require__(/*! ./services */ "./src/auth/daily-auth/services.js"));

var _createAuthSuccess = _interopRequireDefault(__webpack_require__(/*! ../../utils/create-auth-success */ "./src/utils/create-auth-success.js"));

var _createAuthError = _interopRequireDefault(__webpack_require__(/*! ../../utils/create-auth-error */ "./src/utils/create-auth-error.js"));

var _isDailyApp = _interopRequireDefault(__webpack_require__(/*! ../../utils/is-daily-app */ "./src/utils/is-daily-app.js"));

var _getUrlParameterByName = _interopRequireDefault(__webpack_require__(/*! ../../utils/get-url-parameter-by-name */ "./src/utils/get-url-parameter-by-name.js"));

var _globalConfig = _interopRequireDefault(__webpack_require__(/*! ../../global-config */ "./src/global-config/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var getDailyAuth = function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var _ref2,
        token,
        _ref2$limitGuest,
        limitGuest,
        _ref2$limitOnlyHasJx,
        limitOnlyHasJx3RoleAccessInDaily,
        dailyAutoInfo,
        globalConfig,
        response,
        accountInfo,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref2 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, token = _ref2.token, _ref2$limitGuest = _ref2.limitGuest, limitGuest = _ref2$limitGuest === void 0 ? 1 : _ref2$limitGuest, _ref2$limitOnlyHasJx = _ref2.limitOnlyHasJx3RoleAccessInDaily, limitOnlyHasJx3RoleAccessInDaily = _ref2$limitOnlyHasJx === void 0 ? false : _ref2$limitOnlyHasJx;

            if (!(0, _isDailyApp.default)()) {
              _context.next = 22;
              break;
            }

            /**
             * 获取全局配置
             * @type {GlobalConfig}
             */
            globalConfig = new _globalConfig.default();

            if (!globalConfig.hasEnterAuth) {
              globalConfig.hasEnterAuth = true;
              token = token || (0, _getUrlParameterByName.default)('token') || (0, _getUrlParameterByName.default)('ssoToken');

              if (!token) {
                token = function () {
                  var token = (0, _getDailyToken.default)();
                  /**
                   * 获取url中的token参数
                   */

                  var nextSearch = (0, _removeUrlParam.default)(window.location.search, 'token');
                  /**
                   * 不刷新页面的情况下替换携带token的url
                   */
                  // eslint-disable-next-line max-len

                  (0, _replaceUrlWithoutReloading.default)(window.location.pathname + (0, _removeUrlParam.default)(nextSearch, 'ssoToken') + window.location.hash);
                  return token;
                }();
              }
            }
            /**
             * 根据token进行登录Daily
             */


            _context.next = 6;
            return _services.default.loginByToken({
              limitGuest: limitGuest,
              limitOnlyHasJx3RoleAccessInDaily: limitOnlyHasJx3RoleAccessInDaily,
              token: token
            });

          case 6:
            response = _context.sent;

            if (!(response.status !== 1
            /* 失败 */
            )) {
              _context.next = 10;
              break;
            }

            window.location.href = 'https://jx3.seasungame.com/error-pages/index.html?login-expired';
            throw new Error('DAILY_APP_AUTH 登录态失效，请重新登录: ' + JSON.stringify(response));

          case 10:
            _context.next = 12;
            return _services.default.getAccountInfo();

          case 12:
            accountInfo = _context.sent;

            if (!(accountInfo.status === 1
            /* 成功 */
            )) {
              _context.next = 18;
              break;
            }

            dailyAutoInfo = (0, _createAuthSuccess.default)(accountInfo.data);
            /**
             * 判断当前用户下是否有角色, 如果有将禁止其问访, 仅在 LIMIT_ONLY_HAS_JX3_ROLE_ACCESS_IN_DAILY 开关开启后生效
             */

            if (limitOnlyHasJx3RoleAccessInDaily && accountInfo.data.app_default_passport_roles && accountInfo.data.app_default_passport_roles.length === 0) {
              window.location.href = 'https://jx3.seasungame.com/error-pages/index.html?no-account';
            }

            _context.next = 22;
            break;

          case 18:
            if (!(accountInfo.code === -14702)) {
              _context.next = 21;
              break;
            }

            window.location.href = 'https://jx3.seasungame.com/error-pages/index.html?login-expired';
            throw new Error('DAILY_APP_AUTH 登录态失效，请重新登录: ' + JSON.stringify(response));

          case 21:
            dailyAutoInfo = (0, _createAuthError.default)(accountInfo); // const errorObject = createAuthError(accountInfo);
            // setTimeout(function () {
            //   throw new Error('DAILY_APP_AUTH 授权异常: ' + JSON.stringify(errorObject));
            // });

          case 22:
            return _context.abrupt("return", dailyAutoInfo);

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getDailyAuth() {
    return _ref.apply(this, arguments);
  };
}();

var _default = getDailyAuth;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/auth/daily-auth/services.js":
/*!*****************************************!*\
  !*** ./src/auth/daily-auth/services.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonpPromise = _interopRequireDefault(__webpack_require__(/*! jsonp-promise */ "./node_modules/jsonp-promise/index.js"));

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var services = {
  /**
   * 通过 token 登录
   * @param limitGuest
   * @param token
   * @param limitOnlyHasJx3RoleAccessInDaily
   * @returns {{cancel: *, promise: Promise<any>}}
   */
  loginByToken: function loginByToken(_ref) {
    var _ref$limitGuest = _ref.limitGuest,
        limitGuest = _ref$limitGuest === void 0 ? 1 : _ref$limitGuest,
        token = _ref.token,
        _ref$limitOnlyHasJx3R = _ref.limitOnlyHasJx3RoleAccessInDaily,
        limitOnlyHasJx3RoleAccessInDaily = _ref$limitOnlyHasJx3R === void 0 ? false : _ref$limitOnlyHasJx3R;
    // eslint-disable-next-line max-len
    var qs = "ts=".concat(+new Date(), "&limit_guest=").concat(limitGuest, "&token=").concat(token).concat(limitOnlyHasJx3RoleAccessInDaily ? '&query_default_passport_roles=1' : '');
    return (0, _jsonpPromise.default)("".concat(_constants.XOYO_ROOT_API, "/core/jhdaily/login_by_token?").concat(qs), {}).promise;
  },

  /**
   * 获取用户登录信息
   * @returns {{cancel: *, promise: Promise<any>}}
   */
  getAccountInfo: function getAccountInfo() {
    var qs = "ts=".concat(+new Date());
    return (0, _jsonpPromise.default)("".concat(_constants.XOYO_ROOT_API, "/core/jhdaily/get_current_account?").concat(qs), {}).promise;
  }
};
var _default = services;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/auth/daily-auth/utils/get-daily-token.js":
/*!******************************************************!*\
  !*** ./src/auth/daily-auth/utils/get-daily-token.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _getUrlParameterByName = _interopRequireDefault(__webpack_require__(/*! ../../../utils/get-url-parameter-by-name */ "./src/utils/get-url-parameter-by-name.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 获取推栏 daily 授权 token
 * @returns {string | null}
 */
var getDailyToken = function getDailyToken() {
  return (0, _getUrlParameterByName.default)('token') || (0, _getUrlParameterByName.default)('ssoToken') || null;
};

var _default = getDailyToken;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/auth/general/index.js":
/*!***********************************!*\
  !*** ./src/auth/general/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _services = _interopRequireDefault(__webpack_require__(/*! ./services */ "./src/auth/general/services.js"));

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

var GeneralTools = {
  /**
   * XOYO移动端登录
   */
  login: function login() {
    var encodedURL = window.location.href; // 重定向到本页面

    window.location.href = "".concat(_constants.MOBILELOGIN_URL, "?redirect=").concat(encodedURL);
  },

  /**
   * xoyo退出
   * @param shouldRefresh
   * @param onSuccess
   * @param onFail
   * @returns {Promise<*>}
   */
  logout: function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(_ref) {
      var _ref$shouldRefresh, shouldRefresh, _ref$onSuccess, onSuccess, _ref$onFail, onFail, response;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref$shouldRefresh = _ref.shouldRefresh, shouldRefresh = _ref$shouldRefresh === void 0 ? false : _ref$shouldRefresh, _ref$onSuccess = _ref.onSuccess, onSuccess = _ref$onSuccess === void 0 ? {} : _ref$onSuccess, _ref$onFail = _ref.onFail, onFail = _ref$onFail === void 0 ? {} : _ref$onFail;
              _context.next = 3;
              return _services.default.logout();

            case 3:
              response = _context.sent;

              if (response.status === 1) {
                shouldRefresh && location.reload(); // shouldTips && Toast.success(tipsContent ? tipsContent : '退出登录成功');

                onSuccess && onSuccess(); // onSuccess?.();
              } else {
                onFail && onFail(); // onFail?.();
              }

              return _context.abrupt("return", response);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function logout(_x) {
      return _ref2.apply(this, arguments);
    }

    return logout;
  }()
};
var _default = GeneralTools;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/auth/general/services.js":
/*!**************************************!*\
  !*** ./src/auth/general/services.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonpPromise = _interopRequireDefault(__webpack_require__(/*! jsonp-promise */ "./node_modules/jsonp-promise/index.js"));

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var generalServices = {
  /**
   * 退出登录
   * @returns {{cancel: *, promise: Promise<any>}}
   */
  logout: function logout() {
    return (0, _jsonpPromise.default)("".concat(_constants.PASSPORT_ROOT_ADDRESS, "/logout"), {}).promise;
  }
};
var _default = generalServices;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/auth/qq-weixin-auth/index.js":
/*!******************************************!*\
  !*** ./src/auth/qq-weixin-auth/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _services = _interopRequireDefault(__webpack_require__(/*! ./services */ "./src/auth/qq-weixin-auth/services.js"));

var _isMqq = _interopRequireDefault(__webpack_require__(/*! ../../utils/is-mqq */ "./src/utils/is-mqq.js"));

var _isWeixin = _interopRequireDefault(__webpack_require__(/*! ../../utils/is-weixin */ "./src/utils/is-weixin.js"));

var _createAuthSuccess = _interopRequireDefault(__webpack_require__(/*! ../../utils/create-auth-success */ "./src/utils/create-auth-success.js"));

var _createAuthError = _interopRequireDefault(__webpack_require__(/*! ../../utils/create-auth-error */ "./src/utils/create-auth-error.js"));

var _globalConfig = _interopRequireDefault(__webpack_require__(/*! ../../global-config */ "./src/global-config/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/**
 * QQ微信授权信息获取登录
 * @returns {Promise<unknown>}
 */
var getQQWeixinAuth = function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var qqWeixinAuthInfo, globalConfig, currentUserInfo, requireThirdPartyLogin, loginType, response;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!((0, _isWeixin.default)() || (0, _isMqq.default)())) {
              _context.next = 17;
              break;
            }

            globalConfig = new _globalConfig.default();
            _context.next = 4;
            return _services.default.getCurrentUserInfo();

          case 4:
            currentUserInfo = _context.sent;
            requireThirdPartyLogin = false;

            if (currentUserInfo.status === 1
            /* 成功 */
            ) {
                /**
                 * 创建授权成功
                 */
                qqWeixinAuthInfo = (0, _createAuthSuccess.default)(currentUserInfo.data);
              } else {
              if (currentUserInfo.code === -14601
              /* 需要授权*/
              ) {
                  /**
                   * 标识需要第三方授权登录
                   * @type {boolean}
                   */
                  requireThirdPartyLogin = true;
                }
              /**
               * 授权授权失败对象
               */


              qqWeixinAuthInfo = (0, _createAuthError.default)(currentUserInfo);
              /**
               * 在异步栈抛异常, 防止主线程崩溃
               */
              // setTimeout(function () {
              //   throw new Error('第三方授权异常: ' + JSON.stringify(errorObject));
              // });
            }

            if (!requireThirdPartyLogin) {
              _context.next = 17;
              break;
            }

            loginType = globalConfig.loginType;
            /**
             * 获取授权地址
             * @param {object} response
             * @private
             */

            _context.next = 11;
            return _services.default.getAuthUrl({
              loginType: loginType
            });

          case 11:
            response = _context.sent;

            if (!(response.status === 1
            /* 成功 */
            )) {
              _context.next = 16;
              break;
            }

            window.location.href = response.data.auth_url;
            _context.next = 17;
            break;

          case 16:
            throw new Error('第三方获取授权地址异常: ' + JSON.stringify(response));

          case 17:
            return _context.abrupt("return", qqWeixinAuthInfo);

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getQQWeixinAuth() {
    return _ref.apply(this, arguments);
  };
}();

var _default = getQQWeixinAuth;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/auth/qq-weixin-auth/services.js":
/*!*********************************************!*\
  !*** ./src/auth/qq-weixin-auth/services.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jsonpPromise = _interopRequireDefault(__webpack_require__(/*! jsonp-promise */ "./node_modules/jsonp-promise/index.js"));

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var services = {
  /**
   * 获取用户账号信息
   * @returns {Promise<unknown>}
   */
  getCurrentUserInfo: function getCurrentUserInfo() {
    var qs = "ts=".concat(+new Date());
    return (0, _jsonpPromise.default)("".concat(_constants.XOYO_ROOT_API, "/core/thirdlogin/get_current_user_info?").concat(qs), {}).promise;
  },

  /**
   * 获取登录信息地址
   * @param loginType
   * @param callbackUrl
   * @returns {Promise<unknown>}
   */
  // eslint-disable-next-line max-len
  getAuthUrl: function getAuthUrl(_ref) {
    var loginType = _ref.loginType,
        _ref$callbackUrl = _ref.callbackUrl,
        callbackUrl = _ref$callbackUrl === void 0 ? encodeURIComponent(window.location.href) : _ref$callbackUrl;
    var qs = "ts=".concat(+new Date(), "&login_type=").concat(loginType, "&font_callback=").concat(callbackUrl);
    return (0, _jsonpPromise.default)("".concat(_constants.XOYO_ROOT_API, "/core/thirdlogin/get_auth_url?").concat(qs), {}).promise;
  }
};
var _default = services;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/auth/xoyo-auth/index.js":
/*!*************************************!*\
  !*** ./src/auth/xoyo-auth/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _services = _interopRequireDefault(__webpack_require__(/*! ./services */ "./src/auth/xoyo-auth/services.js"));

var _createAuthSuccess = _interopRequireDefault(__webpack_require__(/*! ../../utils/create-auth-success */ "./src/utils/create-auth-success.js"));

var _createAuthError = _interopRequireDefault(__webpack_require__(/*! ../../utils/create-auth-error */ "./src/utils/create-auth-error.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

/**
 * XOYO登录信息获取
 * @returns {Promise<*>}
 */
var getXoyoAuth = function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var response, xoyoAuthData;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _services.default.getInfo();

          case 2:
            response = _context.sent;

            if (!(response.status === 1)) {
              _context.next = 7;
              break;
            }

            xoyoAuthData = (0, _createAuthSuccess.default)(response.data, true);
            _context.next = 14;
            break;

          case 7:
            if (!(response.code === -10402
            /* 测试或正式环境未登录 */
            || response.code === -20101
            /* 测试或正式环境未登录 */
            )) {
              _context.next = 12;
              break;
            }

            response.reason = 'require-login';
            xoyoAuthData = (0, _createAuthError.default)(response, true);
            _context.next = 14;
            break;

          case 12:
            alert('网络异常, 请稍后重试');
            throw new Error('passport/common_api/get_info 授权异常: ' + JSON.stringify(response));

          case 14:
            return _context.abrupt("return", xoyoAuthData);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function getXoyoAuth() {
    return _ref.apply(this, arguments);
  };
}();

var _default = getXoyoAuth;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/auth/xoyo-auth/services.js":
/*!****************************************!*\
  !*** ./src/auth/xoyo-auth/services.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = __webpack_require__(/*! ../../constants */ "./src/constants/index.js");

var _jsonpPromise = _interopRequireDefault(__webpack_require__(/*! jsonp-promise */ "./node_modules/jsonp-promise/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var services = {
  /**
   * 获取xoyo登录信息
   * @returns {{cancel: *, promise: Promise<any>}}
   */
  getInfo: function getInfo() {
    var qs = "ts=".concat(+new Date());
    return (0, _jsonpPromise.default)("".concat(_constants.XOYO_LOGIN_API, "/passport/common_api/get_info?ts=").concat(qs), {}).promise;
  }
};
var _default = services;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MOBILELOGIN_URL = exports.PASSPORT_ROOT_ADDRESS = exports.XOYO_LOGIN_API = exports.XOYO_ROOT_API = void 0;

var _checkIsMasterEnv = _interopRequireDefault(__webpack_require__(/*! ../utils/check-is-master-env */ "./src/utils/check-is-master-env.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var XOYO_ROOT_API = (0, _checkIsMasterEnv.default)() ? '//ws.xoyo.com' : '//test-ws.xoyo.com'; // xoyo注册接口前缀

exports.XOYO_ROOT_API = XOYO_ROOT_API;
var XOYO_LOGIN_API = (0, _checkIsMasterEnv.default)() ? '//pf-api.xoyo.com' : '//my-api-dev.xoyo.com'; // xoyo通用接口前缀

exports.XOYO_LOGIN_API = XOYO_LOGIN_API;
var PASSPORT_ROOT_ADDRESS = "".concat(XOYO_LOGIN_API, "/passport/common_api"); // 移动端跳转登录接口
// eslint-disable-next-line max-len

exports.PASSPORT_ROOT_ADDRESS = PASSPORT_ROOT_ADDRESS;
var MOBILELOGIN_URL = (0, _checkIsMasterEnv.default)() ? '//m.xoyo.com/passport/signin.html' : '//m-dev.xoyo.com/passport/signin.html';
exports.MOBILELOGIN_URL = MOBILELOGIN_URL;

/***/ }),

/***/ "./src/global-auth-data/index.js":
/*!***************************************!*\
  !*** ./src/global-auth-data/index.js ***!
  \***************************************/
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

/**
 * 全局配置
 */
var GlobalAuthData =
/*#__PURE__*/
function () {
  function GlobalAuthData() {
    _classCallCheck(this, GlobalAuthData);

    /**
     * xoyo登录信息
     * @type {{}}
     * @private
     */
    this._XOYO_AUTH = {};
    /**
     * 第三方登录授权信息
     * @type {{}}
     * @private
     */
    // eslint-disable-next-line camelcase

    this._THIRD_PARTY_AUTH = {};
  }

  _createClass(GlobalAuthData, [{
    key: "XOYO_AUTH",
    get: function get() {
      return this._XOYO_AUTH;
    },
    set: function set(data) {
      this._XOYO_AUTH = data;
    } // eslint-disable-next-line camelcase

  }, {
    key: "THIRD_PARTY_AUTH",
    get: function get() {
      return this._THIRD_PARTY_AUTH;
    } // eslint-disable-next-line camelcase
    ,
    set: function set(data) {
      // eslint-disable-next-line camelcase
      this._THIRD_PARTY_AUTH = data;
    }
  }]);

  return GlobalAuthData;
}();

exports.default = GlobalAuthData;
;
module.exports = exports["default"];

/***/ }),

/***/ "./src/global-config/index.js":
/*!************************************!*\
  !*** ./src/global-config/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _checkIsMasterEnv = _interopRequireDefault(__webpack_require__(/*! ../utils/check-is-master-env */ "./src/utils/check-is-master-env.js"));

var _isWeixin = _interopRequireDefault(__webpack_require__(/*! ../utils/is-weixin */ "./src/utils/is-weixin.js"));

var _isMqq = _interopRequireDefault(__webpack_require__(/*! ../utils/is-mqq */ "./src/utils/is-mqq.js"));

var _isMweibo = _interopRequireDefault(__webpack_require__(/*! ../utils/is-mweibo */ "./src/utils/is-mweibo.js"));

var _isDailyApp = _interopRequireDefault(__webpack_require__(/*! ../utils/is-daily-app */ "./src/utils/is-daily-app.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * 全局配置
 */
var GlobalConfig =
/*#__PURE__*/
function () {
  function GlobalConfig() {
    _classCallCheck(this, GlobalConfig);

    /**
     * 是否是正式环境
     */
    this._isMaster = _checkIsMasterEnv.default;
    /**
       * 是否仅仅只限制 daily 登录
       */

    this._isDailyOnly = false;
    /**
       * 登录类型
       */
    // eslint-disable-next-line max-len

    this._loginType = [(0, _isDailyApp.default)() && 'daily', (0, _isWeixin.default)() && 'wechat', (0, _isMqq.default)() && 'qq', (0, _isMweibo.default)() && 'weibo', 'h5'].filter(Boolean)[0];
    /**
       * 当前是否是 daily app
       */

    this._isDailyApp = (0, _isDailyApp.default)();
    /**
       * 是否已经进入授权区域
       */

    this._hasEnterAuth = false;
  }

  _createClass(GlobalConfig, [{
    key: "isMaster",
    get: function get() {
      return this._isMaster;
    }
  }, {
    key: "isDailyOnly",
    get: function get() {
      return this._isDailyOnly;
    },
    set: function set(newStatus) {
      this._isDailyOnly = newStatus;
    }
  }, {
    key: "loginType",
    get: function get() {
      return this._loginType;
    }
  }, {
    key: "isDailyApp",
    get: function get() {
      return this._isDailyApp;
    },
    set: function set(newStatus) {
      this._isDailyApp = newStatus;
    }
  }, {
    key: "hasEnterAuth",
    get: function get() {
      return this._hasEnterAuth;
    },
    set: function set(newStatus) {
      this._hasEnterAuth = newStatus;
    }
  }]);

  return GlobalConfig;
}();

exports.default = GlobalConfig;
;
module.exports = exports["default"];

/***/ }),

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
Object.defineProperty(exports, "getXoyoAuth", {
  enumerable: true,
  get: function get() {
    return _xoyoAuth.default;
  }
});
Object.defineProperty(exports, "getDailyAuth", {
  enumerable: true,
  get: function get() {
    return _dailyAuth.default;
  }
});
Object.defineProperty(exports, "getQQWeixinAuth", {
  enumerable: true,
  get: function get() {
    return _qqWeixinAuth.default;
  }
});
Object.defineProperty(exports, "getAuthInfoByAppEnv", {
  enumerable: true,
  get: function get() {
    return _authInfoByAppEnv.default;
  }
});
Object.defineProperty(exports, "GeneralTools", {
  enumerable: true,
  get: function get() {
    return _general.default;
  }
});

var _xoyoAuth = _interopRequireDefault(__webpack_require__(/*! ./auth/xoyo-auth */ "./src/auth/xoyo-auth/index.js"));

var _dailyAuth = _interopRequireDefault(__webpack_require__(/*! ./auth/daily-auth */ "./src/auth/daily-auth/index.js"));

var _qqWeixinAuth = _interopRequireDefault(__webpack_require__(/*! ./auth/qq-weixin-auth */ "./src/auth/qq-weixin-auth/index.js"));

var _authInfoByAppEnv = _interopRequireDefault(__webpack_require__(/*! ./auth/authInfo-by-appEnv */ "./src/auth/authInfo-by-appEnv/index.js"));

var _general = _interopRequireDefault(__webpack_require__(/*! ./auth/general */ "./src/auth/general/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(/*! ./global-config */ "./src/global-config/index.js");

/***/ }),

/***/ "./src/utils/check-is-master-env.js":
/*!******************************************!*\
  !*** ./src/utils/check-is-master-env.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * 判断当前环境是否是正式环境
 * @returns {boolean|boolean}
 */
var checkIsMasterEnv = function checkIsMasterEnv(_ref) {
  var _ref$isMaster = _ref.isMaster,
      isMaster = _ref$isMaster === void 0 ? undefined : _ref$isMaster;
  var hostname = window.location.hostname;
  var isNotTest = hostname.indexOf('test') === -1;
  var isXoyoHost = hostname.indexOf('xoyo.com') > -1;
  return isMaster === 'undefined' ? isMaster : isNotTest && isXoyoHost;
};

var _default = checkIsMasterEnv;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utils/create-auth-error.js":
/*!****************************************!*\
  !*** ./src/utils/create-auth-error.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createAuth = _interopRequireDefault(__webpack_require__(/*! ./create-auth */ "./src/utils/create-auth.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 创建授权错误
 * @param {object} data - 授权数据
 * @param {boolean} isXoyo - 是否是 xoyo 授权
 */
var createAuthError = function createAuthError(data, isXoyo) {
  return (0, _createAuth.default)('error', data, isXoyo);
};

var _default = createAuthError;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utils/create-auth-success.js":
/*!******************************************!*\
  !*** ./src/utils/create-auth-success.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _createAuth = _interopRequireDefault(__webpack_require__(/*! ./create-auth */ "./src/utils/create-auth.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 创建授权成功
 * @param {string} data - 授权数据
 *  @param {boolean} isXoyo - 是否是 xoyo 授权
 *  @param {boolean} isXoyo - 是否是 xoyo 授权
 */
var createAuthSuccess = function createAuthSuccess(data, isXoyo) {
  return (0, _createAuth.default)('success', data, isXoyo);
};

var _default = createAuthSuccess;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utils/create-auth.js":
/*!**********************************!*\
  !*** ./src/utils/create-auth.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _globalConfig = _interopRequireDefault(__webpack_require__(/*! ../global-config */ "./src/global-config/index.js"));

var _globalAuthData = _interopRequireDefault(__webpack_require__(/*! ../global-auth-data */ "./src/global-auth-data/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 创建授权对象
 * @param {'success'|'error'} status - 授权状态, 成功或失败, success | error
 * @param {object} data - 数据
 * @param {boolean} [isXoyo] - 是否是 xoyo 授权
 */
var createAuth = function createAuth(status, data, isXoyo) {
  var globalAuthName = isXoyo ? 'XOYO_AUTH' : 'THIRD_PARTY_AUTH';
  var globalConfig = new _globalConfig.default();
  var globalAuthData = new _globalAuthData.default();
  var authResponse = {
    ua: globalConfig.loginType,
    status: status,
    data: data
  };
  globalAuthData[globalAuthName] = authResponse;
  return globalAuthData[globalAuthName];
};

var _default = createAuth;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utils/get-url-parameter-by-name.js":
/*!************************************************!*\
  !*** ./src/utils/get-url-parameter-by-name.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * 获取 URL 参数名
 * @param name
 * @param url
 * @returns {string|null}
 */
var getUrlParameterByName = function getUrlParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[[]]/g, '$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};

var _default = getUrlParameterByName;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utils/is-android.js":
/*!*********************************!*\
  !*** ./src/utils/is-android.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _detectMobileDevice = __webpack_require__(/*! detect-mobile-device */ "./node_modules/detect-mobile-device/dist/index.es.js");

/**
 * 判断是否是 android 设备
 * @return {boolean}
 */
var isAndroid = function isAndroid() {
  return /android/i.test((0, _detectMobileDevice.getUserAgent)());
};

var _default = isAndroid;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utils/is-daily-app.js":
/*!***********************************!*\
  !*** ./src/utils/is-daily-app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _detectMobileDevice = __webpack_require__(/*! detect-mobile-device */ "./node_modules/detect-mobile-device/dist/index.es.js");

/**
 * 是否是 daily app
 * @return {boolean}
 */
function isDailyApp() {
  return /jianghudaily/i.test((0, _detectMobileDevice.getUserAgent)());
}

var _default = isDailyApp;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utils/is-ios.js":
/*!*****************************!*\
  !*** ./src/utils/is-ios.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _detectMobileDevice = __webpack_require__(/*! detect-mobile-device */ "./node_modules/detect-mobile-device/dist/index.es.js");

/**
 * 判断是否 ios 设备
 * @return {boolean}
 */
var isIOS = function isIOS() {
  return /iPad|iPhone|iPod/i.test((0, _detectMobileDevice.getUserAgent)()) && !window.MSStream;
};

var _default = isIOS;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utils/is-mobile.js":
/*!********************************!*\
  !*** ./src/utils/is-mobile.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _detectMobileDevice = __webpack_require__(/*! detect-mobile-device */ "./node_modules/detect-mobile-device/dist/index.es.js");

/**
 * 判断是否是手机
 * @return {boolean}
 */
var isMobile = function isMobile() {
  var userAgent = (0, _detectMobileDevice.getUserAgent)(); // eslint-disable-next-line max-len

  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series([46])0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(userAgent) || // eslint-disable-next-line
  /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br([ev])w|bumb|bw-([nu])|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do([cp])o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly([-_])|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-([mpt])|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c([- _agpst])|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac([ -\/])|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja([tv])a|jbro|jemu|jigs|kddi|keji|kgt([ \/])|klon|kpt |kwc-|kyo([ck])|le(no|xi)|lg( g|\/([klu])|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t([- ov])|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30([02])|n50([025])|n7(0([01])|10)|ne(([cm])-|on|tf|wf|wg|wt)|nok([6i])|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan([adt])|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c([-01])|47|mc|nd|ri)|sgh-|shar|sie([-m])|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel([im])|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c([- ])|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(userAgent.substr(0, 4));
};

var _default = isMobile;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utils/is-mqq.js":
/*!*****************************!*\
  !*** ./src/utils/is-mqq.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _detectMobileDevice = __webpack_require__(/*! detect-mobile-device */ "./node_modules/detect-mobile-device/dist/index.es.js");

var _isMobile = _interopRequireDefault(__webpack_require__(/*! ./is-mobile */ "./src/utils/is-mobile.js"));

var _isIos = _interopRequireDefault(__webpack_require__(/*! ./is-ios */ "./src/utils/is-ios.js"));

var _isAndroid = _interopRequireDefault(__webpack_require__(/*! ./is-android */ "./src/utils/is-android.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 判断是否是手机qq
 * @return {boolean}
 */
var isMQQ = function isMQQ() {
  var userAgent = (0, _detectMobileDevice.getUserAgent)();
  var isIOSQQ = (0, _isIos.default)() && / QQ/i.test(userAgent); // eslint-disable-next-line max-len

  var isAndroidQQ = (0, _isAndroid.default)() && /MQQBrowser/i.test(navigator.userAgent) && /QQ/i.test(userAgent.split('mqqbrowser'));
  return (0, _isMobile.default)() && (isIOSQQ || isAndroidQQ);
};

var _default = isMQQ;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utils/is-mweibo.js":
/*!********************************!*\
  !*** ./src/utils/is-mweibo.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _detectMobileDevice = __webpack_require__(/*! detect-mobile-device */ "./node_modules/detect-mobile-device/dist/index.es.js");

var _isMobile = _interopRequireDefault(__webpack_require__(/*! ./is-mobile */ "./src/utils/is-mobile.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 判断是否是手机微博 UA
 * @return {boolean}
 */
var isMWeibo = function isMWeibo() {
  var userAgent = (0, _detectMobileDevice.getUserAgent)();
  return (0, _isMobile.default)() && /(weibo)/.test(userAgent);
};

var _default = isMWeibo;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utils/is-weixin.js":
/*!********************************!*\
  !*** ./src/utils/is-weixin.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _detectMobileDevice = __webpack_require__(/*! detect-mobile-device */ "./node_modules/detect-mobile-device/dist/index.es.js");

/**
 * 是否是 微信 设备
 * @return {boolean}
 */
var isWeiXin = function isWeiXin() {
  var userAgent = (0, _detectMobileDevice.getUserAgent)();
  return String(userAgent.match(/MicroMessenger/i)) === 'micromessenger';
};

var _default = isWeiXin;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utils/remove-url-param.js":
/*!***************************************!*\
  !*** ./src/utils/remove-url-param.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * 移除 url 参数
 * @param url
 * @param parameter
 * @returns {*}
 */
var removeUrlParam = function removeUrlParam(url, parameter) {
  var urlParts = url.split('?');

  if (urlParts.length >= 2) {
    var prefix = encodeURIComponent(parameter) + '=';
    var pars = urlParts[1].split(/[&;]/g);

    for (var i = pars.length; i-- > 0;) {
      if (pars[i].lastIndexOf(prefix, 0) !== -1) {
        pars.splice(i, 1);
      }
    }

    return urlParts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
  }

  return url;
};

var _default = removeUrlParam;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./src/utils/replace-url-without-reloading.js":
/*!****************************************************!*\
  !*** ./src/utils/replace-url-without-reloading.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

/**
 * 在不刷新页面的情况下替换 url
 * @param {string} nextUrl - 下一个将要替换的 url, 注意必须同源
 */
var replaceUrlWithoutReloading = function replaceUrlWithoutReloading(nextUrl) {
  window.history.replaceState({}, document.title, nextUrl);
};

var _default = replaceUrlWithoutReloading;
exports.default = _default;
module.exports = exports["default"];

/***/ })

/******/ });
});
//# sourceMappingURL=universal-auth.js.map
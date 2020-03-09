/** @module is-webp-not-support */
var _isWebpNotSupport;

/**
 * 是否不支持 webp
 * @returns {boolean}
 */
export default function isWebpNotSupport() {
  if (_isWebpNotSupport === undefined) {
    _isWebpNotSupport = (function() {
      // noinspection JSUnresolvedVariable
      if (IS_WEBP_IMAGE_CONVERSION_ON) {
        return document.body.className.indexOf('no-webp') > -1;
      }
      return true;
    })();
  }
  return _isWebpNotSupport;
}

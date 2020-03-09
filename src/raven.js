/**
 * @class
 */
class Raven {
  /**
   * @param {object} error 错误
   * @param {object} extra 其它参数
   */
  static captureException(error, ...extra) {
    if (window.Raven) {
      window.Raven['captureException'](error, extra);
    }
  }
}

export default Raven;

/**
 * @class
 */
class EnvUtils {
  /**
   * 获取env
   * @returns {string}
   */
  static getEnv() {
    return process.env.NODE_ENV;
  }
}

export default  EnvUtils;

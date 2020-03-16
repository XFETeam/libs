/** @module is-api-response-shape */

import * as Validator from 'schema-validator';

const apiResponseSchema = {
  code: { type: Number, required: true },
  data: { type: Object, required: true },
  message: { type: String, required: true },
  msg: { type: String, required: true },
  status: { type: Number, required: true }
};
/**
 * 判断是不是 api 返回的 response 结构
 * @param {object} data 判断是否是api返回结果的对象
 * @return {boolean}
 */
export default function isApiResponseShape(data) {
  const validator = new Validator(apiResponseSchema);
  const { _error } = validator.check(data);
  return !_error;
}

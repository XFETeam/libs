/** @module promise */
/**
 * 类 go Error 错误处理机制, 用于应对 promise 异常
 *
 * @example
 * 基本用法:
 *
 * const [<成功>, <失败>] = await go(promise);
 *
 * 当直接使用 await
 *
 * - Example response [ data, undefined ]
 * - Example response [ undefined, Error ]
 *
 *
 * 当直接使用 Promise.all([req1, req2, req3])
 * - Example response [ [data1, data2, data3], undefined ]
 * - Example response [ undefined, Error ]
 *
 *
 * 当直接使用 Promise.race([req1, req2, req3])
 * - Example response [ data, undefined ]
 * - Example response [ undefined, Error ]
 *
 * @param {Promise} promise
 * @returns {Promise} [ data, undefined ]
 * @returns {Promise} [ undefined, Error ]
 */
const go = promise => {
  return promise.then(data => [data, undefined]).catch(error => Promise.resolve([undefined, error]));
};

export { go };

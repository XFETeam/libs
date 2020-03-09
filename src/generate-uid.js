/** @module generate-uid */
import uuidv4 from 'uuid/v4';

/**
 * 生成唯一 uid
 * @example
 * generateUid();
 * // return '10ba038e-48da-487b-96e8-8d3b99b6d18a'
 * @return {string}
 */
export default function generateUid() {
  return uuidv4();
}

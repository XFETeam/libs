/** @module flatten-nested-array */
/**
 * 扁平2维数组
 * @param nestedArr {string} 二维数组
 * @returns {*}
 */
export default function flattenNestedArray(nestedArr = []) {
  return [...nestedArr].reduce((result, arr = []) => {
    return [...result, ...arr];
  }, []);
}

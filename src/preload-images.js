/** @module preload-images */
import { isBase64ImageString } from './data-utils';
import { isObject, isString } from './type-utils';
import isWebpNotSupport from './is-webp-not-support';

/**
 * 单个图片预加载
 * @param {string} src - 图片路径
 * @param {boolean} [decode] - 是否解码
 * @param {boolean} [shouldConvert2Webp] 在当前环境支持 webp 的情况下自动解析支持 webp
 * @return {Promise<string>}
 */
export const preloadImage = async (src, { decode, shouldConvert2Webp = true } = {}) => {
  if (isBase64ImageString(src)) {
    return Promise.resolve(src);
  }
  if (shouldConvert2Webp) {
    src = convert2Webp(src);
  }
  const image = new Image();
  await new Promise(resolve => {
    image.onload = () => resolve();
    image.onerror = () => resolve();
    image.src = src;
  });
  if (decode && image.decode) {
    // f=>f, 用于解决可能报错的场景
    await image.decode().then(f => f, f => f);
  }
  return src;
};

/**
 * 过滤预加载图片
 * @param {Array<string>} images - 过滤图片
 * @return {*}
 */
export function filterPreloadImages(images) {
  if (isObject(images)) {
    images = Object.keys(images).map(key => images[key]);
  }
  return images.filter(imagePath => {
    return !isBase64ImageString(imagePath) && isString(imagePath);
  });
}

/**
 * 基于字符串位置进行切割拆分
 * e.g.
 *
 * splitAt('foo', 1), // ["f", "oo"]
 * splitAt([1, 2, 3, 4], 2) // [[1, 2], [3, 4]]
 *
 * @param {string} source - 源字符串
 * @param {number} index - 切割位置
 * @return {}
 */
const splitAt = (source, index) => [source.slice(0, index), source.slice(index)];

/**
 * 转换成 webp
 * e.g.
 *
 * convert2Webp('/images/aa.png')
 * "/images/aa.png.webp"
 *
 * convert2Webp('/images/aa1.png')
 * "/images/aa1.png.webp"
 *
 * convert2Webp('/images/aa.png1')
 * "/images/aa.png1"
 *
 * convert2Webp('/images/aa.png?aa=123')
 * "/images/aa.png.webp?aa=123"
 *
 * convert2Webp('/images/aa.jpg?aa=123')
 * "/images/aa.jpg.webp?aa=123"
 *
 * @param {string[]|string} imageUrls - 待转换的图片地址列表
 * @return {string[]|string}
 */
export function convert2Webp(imageUrls) {
  // noinspection JSUnresolvedVariable
  if (!isWebpNotSupport()) {
    const isArray = Array.isArray(imageUrls);
    if (!isArray) {
      imageUrls = [imageUrls];
    }
    let result = imageUrls.map(imageUrl => {
      if (isBase64ImageString(imageUrl)) {
        return imageUrl;
      }
      const [remaining, extension] = splitAt(imageUrl, imageUrl.lastIndexOf('.') + 1);
      if (/^webp/i.test(extension)) {
        return imageUrl;
      } else {
        return [remaining, extension.replace(/(png|jpe?g)(?!\w)/, '$1.webp')].join('');
      }
    });
    return isArray ? result : result[0];
  }
  return imageUrls;
}

// noinspection SpellCheckingInspection
/**
 * 多个图片预加载
 * @param {string[]} images - 图片路径列表
 * @param {boolean} [decode] - 是否解码
 * @param {boolean} [shouldConvert2Webp] 在当前环境支持 webp 的情况下自动解析支持 webp
 * @return {Promise<void>}
 */
export default function preloadImages(images = [], { decode, shouldConvert2Webp = true } = {}) {
  return Promise.all(
    filterPreloadImages(images).map(src => {
      if (shouldConvert2Webp) {
        src = convert2Webp(src);
      }
      return preloadImage(src, { decode });
    })
  );
}

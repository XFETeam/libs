/** @module with-static-preload */
import preloadImages from './preload-images';
import interceptComponentWillUnmount from './intercept-component-will-unmount';
import UnmountError from './error/UnmountError';

/**
 * * 静态资源预加载, 只能用于 react 组件中
 * @example
 * \@withStaticPreload(require.context('./images', './images', false, /^./))
 *
 * @example
 * \@withStaticPreload(require.context('./images', './images', false, /^./))
 * export default class User extends React.Component {
 *
 * }
 *
 * @param {object} requireContext - webpack require.context: 一个webpack的api,通过执行require.context函数获取一个特定的上下文,
 * 主要用来实现自动化导入模块,在前端工程中, 如果遇到从一个文件夹引入很多模块的情况,可以使用这个api,它会遍历文件夹中的指定文件,然后自动导入,
 * 使得不需要每次显式的调用import导入模块
 * @returns {function(*=): any}
 */
export default function withStaticPreload(requireContext) {
  return TargetComponent => {
    return Object.assign(TargetComponent, {
      preload(componentContext) {
        return new Promise((resolve, reject) => {
          const images = requireContext.keys().map(filename => requireContext(filename));
          const preloadImagesPromise = preloadImages(images);
          preloadImagesPromise.then(() => {
            reject = f => f;
          });
          resolve(preloadImagesPromise);
          interceptComponentWillUnmount(componentContext, () => {
            reject(new UnmountError('cancel with static preload'));
          });
        });
      }
    });
  };
}

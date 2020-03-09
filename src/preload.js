/**@module preload */
import '@xfe-team/preloadjs-patch';

/**
 * 预加载
 * @param {string|string[]} resourcePaths 资源路径
 * @param {Function} onProgress - 进度回调
 * @return {Promise<*>}
 */
export default function preload(resourcePaths, { onProgress } = {}) {
  if (typeof resourcePaths === 'string') {
    resourcePaths = [resourcePaths];
  }
  if (resourcePaths.length) {
    return new Promise(resolve => {
      const queue = new window.createjs.LoadQueue();
      onProgress &&
        queue.on('progress', () => {
          onProgress(queue.progress * 100);
        });
      queue.on('complete', () => {
        resolve();
      });
      queue.on('error', () => {
        resolve();
      });
      resourcePaths.forEach(path => queue.loadFile(path));
    });
  }
  return Promise.resolve();
}

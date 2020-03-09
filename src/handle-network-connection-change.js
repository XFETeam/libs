/** @module handle-network-connection-change */
import Toast from './components/toast';

/**
 * 在手机连接断网和恢复联网时给用户进行相关提示
 * @param {object} type 类型 {‘offline’} | {'online'}
 */
function handleConnectionChange({ type }) {
  if (type === 'offline') {
    Toast.offline('网络连接不可用', 2.5, undefined, false);
  } else if (type === 'online') {
    Toast.info('网络连接已恢复', 2.5, undefined, false);
  } else {
    throw new Error('unknown network connection type = ' + type);
  }
}

window.addEventListener('online', handleConnectionChange);
window.addEventListener('offline', handleConnectionChange);

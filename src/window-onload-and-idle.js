/** @module window-onload-and-idle */
import isWindowOnload from './is-window-onload';
import { requestIdlePromise } from '@xfe-team/idle-callback/lib/@xfe-team/idle-callback';

/**
 * 当 window onload 时且处于空闲状态
 */
export default async function windowOnloadAndIdle() {
  await isWindowOnload();
  await requestIdlePromise();
}

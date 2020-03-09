import { isOKErrorCode } from './create-error-code';
import Toast from '../components/toast';
import ServiceResponse from '../models/ServiceResponse';

// noinspection SpellCheckingInspection
window.addEventListener('unhandledrejection', event => {
  const { reason } = event;

  if (!reason) {
    return;
  }

  const { code } = reason;
  /**
   * 忽略允许忽略的代码
   */
  if (isOKErrorCode(code)) {
    event.preventDefault();
    return;
  }

  if (event && event.reason && event.reason instanceof ServiceResponse) {
    const { message } = event.reason;
    Toast.fail(message);
    return;
  }

  // noinspection JSUnresolvedVariable
  if (typeof window.Raven !== 'undefined') {
    event.preventDefault();
    window.Raven.captureException(event.reason, {
      mechanism: {
        type: 'onunhandledrejection',
        handled: false
      }
    });
  } else {
    throw event;
  }
});

window.addEventListener('error', function(event) {
  const { error } = event;
  if (error) {
    const { code } = error;
    /**
     * 忽略允许忽略的代码
     */
    if (isOKErrorCode(code)) {
      event.preventDefault();
      return;
    }

    // noinspection JSUnresolvedVariable
    if (typeof window.Raven !== 'undefined') {
      event.preventDefault();
      window.Raven.captureException(error);
    } else {
      throw event;
    }
  }
});

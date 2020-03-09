import createErrorClass from '../create-error-class';
import errorCodeManager, { ErrorCodeType } from '../create-error-code';

/**
 * "中断线程"异常
 * @type {*}
 */
const EndThreadError = createErrorClass('EndThreadError', errorCodeManager(-200002, ErrorCodeType.OK), 'end current thread');
export default EndThreadError;

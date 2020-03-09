import createErrorClass from '../create-error-class';
import errorCodeManager, { ErrorCodeType } from '../create-error-code';

/**
 * "组件已卸载"异常
 * @type {{name, new(...[*]): CustomClass, constructor: *, __proto__, prototype: CustomClass}}
 */
const UnmountError = createErrorClass('UnmountError', errorCodeManager(-200001, ErrorCodeType.OK), 'current component has been unmounted');
export default UnmountError;

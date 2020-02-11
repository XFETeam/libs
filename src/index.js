import React, { useEffect } from 'react';

const Component = ({ children, ...restProps }) => {
  useEffect(() => {
    // did mount
  }, []);
  return <div {...restProps}>{children}</div>;
};

Component.defaultProps = {};

Component.propsTypes = {};

export default React.memo(Component);

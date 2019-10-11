import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import CenterColumn from '../layout/CenterColumn.js';

function Appbar(props) {
  const {children,...otherProps} = props;
  return (
    <AppBar position="static" {...otherProps}>
      <CenterColumn>
        {children}
      </CenterColumn>
    </AppBar>
  );
}

export default Appbar;

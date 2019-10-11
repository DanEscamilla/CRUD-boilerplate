import React from 'react';

import Grid from '@material-ui/core/Grid';

function CenterColumn(props) {
  const {children,className,...otherProps} = props
  return (
    <Grid container justify="center" className={className}>
      <Grid item xs={12} sm={12} md={10} lg={8} xl={6} {...otherProps}>
        {children}
      </Grid>
    </Grid>
  );
}

export default CenterColumn;

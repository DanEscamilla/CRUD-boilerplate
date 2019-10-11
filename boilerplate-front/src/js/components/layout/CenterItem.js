import React from 'react';

import Grid from '@material-ui/core/Grid';


function CenterItem(props) {

  return (
    <Grid container spacing={0} justify="center">
      <Grid item>
        {props.children}
      </Grid>
    </Grid>
  );
}

export default CenterItem;

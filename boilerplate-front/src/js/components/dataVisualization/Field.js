import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  header: {
    fontWeight:'bold'
  },
}));

const Field = (props)=>{
  const classes = useStyles();
  let {attribute,value,...otherProps} = props;

  return (
    <Grid item xs={12} md={6} {...otherProps}>
      <Typography className={classes.header}>{`${attribute}:`}</Typography>
      <Typography>{value}</Typography>
    </Grid>
  )
}

Field.propTypes = {
  attribute: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
};


export default Field

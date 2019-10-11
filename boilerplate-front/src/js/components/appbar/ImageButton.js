import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import classNames from 'classnames';

const useStyles = makeStyles(theme => ({
  button: {
    width:72,

  //  borderRadius:5,
  //  padding:4,
  //  paddingBottom:8,
  //  backgroundColor:'white',
  },
  img:{
    width:'74px !important',
    marginTop:-9
  }
}));

function ImageButton({path,width,className}) {
  const classes = useStyles();
  const buttonClass = classNames(classes.button ,className)
  return (
    <ButtonBase className={buttonClass}>
      <img alt="logo" src={path} className={classes.img} style={{width:width}}/>
    </ButtonBase>
  );
}

export default ImageButton;

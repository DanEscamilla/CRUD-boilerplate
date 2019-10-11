import React from 'react';


import AppbarBase from './appbar/AppbarBase.js';
import { makeStyles} from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Bullet from '@material-ui/icons/KeyboardArrowRight'

const useStyles = makeStyles(theme => ({
  root: {
    padding: `${theme.spacing(4)}px 0px`,
  },
  // items:{
  //   width:'100%'
  // },
  // list:{
  //   listStyleType: 'none'
  // },
  // icon:{
  //   verticalAlign:'middle'
  // }
}));

function Footer() {
  const classes = useStyles();

  return (
    <AppbarBase className={classes.root}>

    </AppbarBase>
  );
}

export default Footer;

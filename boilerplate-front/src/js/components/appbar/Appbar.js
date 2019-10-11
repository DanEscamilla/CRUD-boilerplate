import React from 'react';

import AppbarBase from './AppbarBase.js';
import Toolbar from '@material-ui/core/Toolbar';
import ImageButton from './ImageButton.js';
import { makeStyles } from '@material-ui/core/styles';
import LinkMenuItem from '../nav/LinkMenuItem.js';
import { HashLink as Link } from 'react-router-hash-link';

const useStyles = makeStyles(theme => ({
  link:{
    color: theme.palette.primary.contrastText,
    textDecoration: 'none'
  },
  logo:{
    marginRight: theme.spacing(2)
  },
  spacer:{
    flexGrow:1
  }
}));

function Appbar() {
  const classes = useStyles();
  return (
    <AppbarBase position="fixed">
      <Toolbar>
        <LinkMenuItem to="/" className={classes.link} CustomLinkComponent={Link}>
          <ImageButton className={classes.logo} path="/Orion_logoBLANCO.png" width={30} heigh={30}/>
        </LinkMenuItem>
        <LinkMenuItem to="/#FAQ" className={classes.link} CustomLinkComponent={Link}>
          FAQ
        </LinkMenuItem>
        <div className={classes.spacer} />
        <LinkMenuItem to="/Register" className={classes.link}>
          Registro
        </LinkMenuItem>
        <LinkMenuItem to="/Login" className={classes.link}>
          Login
        </LinkMenuItem>
      </Toolbar>
    </AppbarBase>
  );
}

export default Appbar;

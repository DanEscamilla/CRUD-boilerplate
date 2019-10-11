import React from 'react';

import AppbarBase from '../components/appbar/AppbarBase.js';
import ImageButton from '../components/appbar/ImageButton.js';
import { makeStyles } from '@material-ui/core/styles';
import LinkMenuItem from '../components/appbar/LinkMenuItem.js';
import { HashLink as Link } from 'react-router-hash-link';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  link:{
    color: theme.palette.primary.contrastText,
  },
  logo:{
    marginRight: theme.spacing(2)
  },
  spacer:{
    flexGrow:1
  }
}));

function Appbar(props) {
  const classes = useStyles();
  return (
    <AppbarBase position="fixed">
      <Toolbar>
        <LinkMenuItem to="/" CustomLinkComponent={Link}>
          <Typography className={classes.link} >
            MiApp
          </Typography>
        </LinkMenuItem>
        <div className={classes.spacer} />
      </Toolbar>
    </AppbarBase>
  );
}

export default (Appbar);

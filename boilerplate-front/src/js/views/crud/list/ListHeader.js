import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import CreateDialog from './CreateDialog.js';
import {makeStyles} from '@material-ui/core/styles';
import pluralize from 'pluralize';

const useStyles = makeStyles(theme => ({
  container: {
    padding:0
  }
}));



const PatientsHeader = (props)=>{
  const classes = useStyles();
  return (
    <Toolbar className={classes.container}>
      <h2>{pluralize(props.title,2)}</h2>
      <CreateDialog reload={props.loadData}/>
    </Toolbar>
  );
}



export default (PatientsHeader)

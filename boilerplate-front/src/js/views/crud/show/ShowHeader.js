import React from 'react';

import Toolbar from '@material-ui/core/Toolbar';
import EditDialog from './EditDialog.js';
import {makeStyles} from '@material-ui/core/styles';
import DeleteDialog from './DeleteDialog.js'

import config from '../config.js';


const useStyles = makeStyles(theme => ({
  container: {
    padding:0
  }
}));

const PatientsHeader = (props)=>{
  const classes = useStyles();
  return (
    <Toolbar className={classes.container}>
      <h1>{config.name}</h1>
      <EditDialog data={props.data} onUpdated={props.onUpdated}/>
      <DeleteDialog data={props.data||{}}/>
    </Toolbar>
  );
}



export default (PatientsHeader)

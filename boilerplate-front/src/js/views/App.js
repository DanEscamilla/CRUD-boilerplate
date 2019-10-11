import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import MainView from './Routes.js';
import Appbar from './Appbar.js';
import Footer from '../components/Footer.js';
import CenterColumn from '../components/layout/CenterColumn.js';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop:64,
    padding: theme.spacing(2),
    flexGrow:1,
  },
  app:{
    display:"flex",
    flexDirection:"column",
    height:'100vh'
  }
}));

const App = ()=>{

  const classes = useStyles();

  return (
    <div className={classes.app}>
    <Appbar/>
      <CenterColumn className={classes.container}>
        <MainView/>
      </CenterColumn>
      <Footer/>
    </div>
  )
}

export default App;

import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Theme from './js/themes/theme.js';
import FormProvider from './js/components/forms/FormProvider.js'

const Providers = ({children})=>{
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={Theme}>
        <FormProvider>
            {children}
        </FormProvider>
      </MuiThemeProvider>
    </BrowserRouter>
  )
}
export default Providers;

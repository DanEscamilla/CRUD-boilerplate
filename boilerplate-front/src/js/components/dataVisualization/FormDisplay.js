import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid'
import Field from './Field.js';


const FormDisplay = (props)=>{
  let {form,visible,schema,...otherProps} = props;
  let Fields = [];

  for (var key in form) {
    if (!form.hasOwnProperty(key)) continue;
    if (visible&&visible.includes(key)||!visible){
      const obj = form[key];
      const attributeName = ((schema&&schema[key])?schema[key]:key);
      Fields.push(<Field key={key} attribute={attributeName} value={obj}/>)
    }
}

  return (
    <Grid container {...otherProps}>
      {Fields}
    </Grid>
  )
}

FormDisplay.propTypes = {
  form: PropTypes.object.isRequired,
  schema: PropTypes.object
};


export default FormDisplay

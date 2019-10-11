import React from 'react'
import PropTypes from 'prop-types'
import {compose,withHandlers,withState} from 'recompose'

import { withStyles } from '@material-ui/core/styles'
import OutlinedInput from '@material-ui/core/OutlinedInput'
import InputLabel from '@material-ui/core/InputLabel'
import FormControl from '@material-ui/core/FormControl'
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete'

const styles = theme => {
  return ({
    formControl: {
      margin: theme.spacing.unit,
      display:'flex'
    },
    containerIndex:{
      flexGrow:0,
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      minWidth:`${theme.spacing.unit*8}px`
    },
    containerInput:{
      flexGrow:1,
    }
  })
};

const FormItem = (props)=>{
  const {classes,index,focus,handleFocus,handleBlur,
    value,handleChange,handleDelete,...otherProps} = props

  const Index = (
      <Typography variant="h5">{index}</Typography>
  )
  const DeleteButton = (
    <IconButton size="small" color="secondary"
      onClick={handleDelete}>
      <DeleteIcon/>
    </IconButton>
  )

  return (
    <div className={classes.formControl}
      onMouseEnter={handleFocus}
      onMouseLeave={handleBlur}>
      <div className={classes.containerIndex}>
        {focus?DeleteButton:Index}
      </div>
      <div className={classes.containerInput}>
      <OutlinedInput
        id={`phrase-form-item-${index}`}
        value={value}
        onChange={handleChange}
        fullWidth
        labelWidth={0}
        placeholder="Escribe una frase"/>
        </div>
    </div>
  )
}

FormItem.propTypes = {
  index: PropTypes.number.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired
}

const state = withState('focus','setFocus',false);
const handlers = withHandlers({
  handleFocus:props=>()=>{
    props.setFocus(true);
  },
  handleBlur:props=>()=>{
    props.setFocus(false);
  },
});

const enhance = compose (
  state,
  handlers,
  withStyles(styles)
);

export default enhance(FormItem);

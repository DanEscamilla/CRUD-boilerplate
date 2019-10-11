import React from 'react';
import PropTypes from 'prop-types'
import {compose,withState,withHandlers} from 'recompose';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import CreateButton from './CreateButton';
import FormItem from './FormItem';

const styles = theme => {
  return ({
    container:{
      paddingBottom:40
    }
  })
};

const PhrasesForm = (props)=>{
  const {classes,value,handleCreatePhrase,handleRemovePhrase,
    handleChangePhrase,...otherProps} = props

  const FormItems = value.map((phrase,index)=>(
    <div key={index}>
      <FormItem
        value={phrase}
        index={index}
        handleDelete={handleRemovePhrase.bind(null,index)}
        handleChange={handleChangePhrase.bind(null,index)}/>
      <CreateButton
        onClick={handleCreatePhrase.bind(null,index)}
        active={(index==value.length-1)?true:false}/>
    </div>
  ))

  return (
    <div className={classes.container}>
      {FormItems}
    </div>
  )
}

PhrasesForm.propTypes = {
  onValueChange: PropTypes.func.isRequired,
  value: PropTypes.array.isRequired,
}

PhrasesForm.defaultProps = {
  value: []
}

const handlers = withHandlers({
  handleCreatePhrase: props => (index) => {
    props.value.splice(index+1,0,"");
    props.onValueChange(props.value);

  },
  handleRemovePhrase: props => (index) => {
    if (props.value.length<=1){
      return;
    }
    props.value.splice(index,1);
    props.onValueChange(props.value);
  },
  handleChangePhrase: props => (index,event) =>{
    props.value[index] = event.target.value
    props.onValueChange(props.value);
  }
})

const enhance = compose (
  handlers,
  withStyles(styles)
);

export default enhance(PhrasesForm);

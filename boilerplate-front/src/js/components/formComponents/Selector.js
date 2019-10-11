import React from 'react';
import PropTypes from 'prop-types';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

class Input extends React.Component{

  constructor(props){
    super(props);

    this._changeListener = this._changeListener.bind(this);
  }

  _changeListener(event){
    this.props.onValueChange(event.target.value)
  }

  render(){

    const {error,label,value,className,options,onValueChange,required,
          ...passProps} = this.props;

    const errorProps = {
      error:(error)?true:false,
      // helperText:error,
    }

    const Options = options.map((option,i)=>{
      return (
        <MenuItem key={i} value={option.value}>{option.label}</MenuItem>
      )
    })

    return(
      <FormControl {...errorProps} {...passProps}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          className={className}
          onChange={this._changeListener}>
          {Options}
        </Select>
      </FormControl>
    );
  }
}

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onValueChange: PropTypes.func,
  options:PropTypes.array.isRequired
}
Input.defaultProps = {
  value:'',
  fullWidth:true,
  required:true,
  margin:'normal'
}

export default (Input);

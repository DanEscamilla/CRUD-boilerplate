import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField'

class Input extends React.Component{

  constructor(props){
    super(props);

    this._changeListener = this._changeListener.bind(this);
  }

  _changeListener(event){
    this.props.onValueChange(event.target.value)
  }

  render(){

    const {error,onValueChange,fullWidth,required,
          ...passProps} = this.props;

    const errorProps = {
      error:(error)?true:false,
      helperText:error,
    }


    return(
      <TextField
        {...errorProps}
        {...passProps}
        fullWidth={fullWidth}
        required={required}
        onChange={this._changeListener}/>
    );
  }
}

Input.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  onValueChange: PropTypes.func,
}
Input.defaultProps = {
  value:'',
  fullWidth:true,
  required:true,
  margin:'normal'
}

export default (Input);

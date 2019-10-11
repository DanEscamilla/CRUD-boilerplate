import React from "react";

import withForm from './withForm';
// import generateValidationFn from './generateValidationFn';

const connectInput = (fieldId,formId,options)=>(WrappedComponent)=>{

  // const { required, validationFn, pattern } = options;

  class connectedInput extends React.Component{

    constructor(props){
      super(props);
      this._valueChangeListener = this._valueChangeListener.bind(this);
      this._findFieldInForm = this._findFieldInForm.bind(this);
      this._submitOnEnterKey = this._submitOnEnterKey.bind(this);
      this._inputStateListener = this._inputStateListener.bind(this);

      const field = this._findFieldInForm()
      this.state = {
        field: field,
        value: field.state.value
      }

      this.state.field.error = null;
    }

    componentDidMount(){
      this.state.field.setState({
        value:this.state.field.state.value
      })
    }

    componentWillUnmount(){
      this.state.field.removeListener(this.listenerIndex)
    }

    _valueChangeListener(newValue){
      this.state.field.setState({
        value:newValue,
      });
    }

    _inputStateListener(newState){
      this.setState({
        ...this.state,
        ...newState,
      });
    }

    _submitOnEnterKey(event){
      if (event.key === 'Enter') {
        this.props.form.submit()
      }
    }

    _findFieldInForm(){
      let field = this.props.form.getField(fieldId);
      if (!field){
        field = this.props.form.createField(fieldId);
      }
      field.updateOptions(options)
      this.listenerIndex = field.addListener(this._inputStateListener)
      return field;
    }

    render(){
      const { form ,...passProps} = this.props;

      let addedProps = {
        error:this.state.error,
        value:this.state.value,
        onValueChange:this._valueChangeListener,
        onKeyPress:this._submitOnEnterKey,
      }

      return (
        <WrappedComponent
          {...passProps}
          {...addedProps}
          onChange={this._valueChangeListener}/>
      );
    }
  }


  return withForm(formId)(connectedInput);

}

export default connectInput;

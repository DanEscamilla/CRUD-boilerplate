import React from 'react';
import PropTypes from 'prop-types';
import withForm from '../forms/withForm'



const Form = (formId)=>(WrappedComponent)=>{


  class FormHOC extends React.Component{

    constructor(props){
      super(props)
      this.listenerIndex = props.form.addSubmitListener(props.onSubmit);
    }

    componentWillUnmount(){
      this.props.form.removeSubmitListener(this.listenerIndex);
      if (this.props.resetOnUnmount){
        this.props.form.reset();
      }
    }

    render(){
      const {onSubmit,resetOnUnmount,form,...props} = this.props;

      return(
        <WrappedComponent
          {...props}
          formId={formId}
          submitForm={form.submit}/>
      );
    }
  }

  FormHOC.propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  return withForm(formId)(FormHOC)
}

export default Form;

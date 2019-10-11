
import React from 'react';
import PropTypes from 'prop-types';

const withSubmit = (formId)=>(WrappedComponent)=>{

  class withSubmitHOC extends React.Component{


    render(){
      let form =  this.context.formManager.getForm(formId)

      return(
        <WrappedComponent
          {...this.props}
          formSubmit={form.submit}/>
      );
    }
  }

  withSubmitHOC.contextTypes = {
    formManager: PropTypes.object
  }

  return (withSubmitHOC);
}

export default withSubmit;

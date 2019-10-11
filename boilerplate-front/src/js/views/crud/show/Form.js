import React from 'react';

import connectInput from '../../../components/forms/connectInput.js'
import Input from '../../../components/formComponents/Input.js'

import config from '../config.js';


class PatientForm extends React.Component{

  constructor(props){
    super(props)
    this.inputs = []

    config.updateFormFields.forEach(field=>{
      this.inputs.push(
        connectInput(field,props.formId,{
          defaultValue:props[field],
          required:true,
        })(Input)
      )
    })

  }

  render(){

    const Inputs = this.inputs.map((ConnectedInput,index)=>{
      const fieldName = config.updateFormFields[index];
      return (
        <ConnectedInput key={index} variant="outlined" label={((config.schema&&config.schema[fieldName])?config.schema[fieldName]:fieldName)}/>
      )
    })

    return (
      <div>
        {Inputs}
      </div>
    )
  }
}

export default PatientForm;

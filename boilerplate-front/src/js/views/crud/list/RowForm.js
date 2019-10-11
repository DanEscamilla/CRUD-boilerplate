import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {compose} from 'recompose';
import {updatePatient} from '../../../redux/patients/actions.js';

import DialogForm from '../../../components/formComponents/DialogForm2.js'

import Row from '../../../components/dataVisualization/Row.js'
import PatientForm from './PatientForm.js'

const RowDialog = DialogForm('test-form')(Row,PatientForm)

const RowForm = (props)=>{
  let {content,attributes,schema} = props;
  return (
    <RowDialog
      formProps={content}
      buttonProps={{
        content:content,
        attributes:attributes
      }}
      onSubmit={(form,close)=>{
        const patient = {
          ...content,
          ...form
        }
        props.updatePatient(patient);
        close();
      }}/>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePatient: (patient)=>{
      updatePatient(patient,dispatch)
    }
  }
}

const enhance = compose (
  connect(null,mapDispatchToProps)
);


RowForm.propTypes = {
  content: PropTypes.object.isRequired,
};


export default enhance(RowForm)

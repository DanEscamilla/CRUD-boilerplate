import React from 'react'

import {compose} from 'recompose'

import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/AddCircle'
import DialogForm from '../../../components/formComponents/DialogForm.js'
import Form from './Form.js'
import {apiCreate} from '../../../vanilla/apiInterface.js';

import config from '../config.js';


const Button = ({onClick,...otherProps})=>{
  return (
    <IconButton  onClick={onClick} >
      <AddIcon color="secondary"/>
    </IconButton>
  )
}

const Dialog = DialogForm(`crear-${config.name}`)(Button,Form)

const FormDialogButton = ({addPatient,reload,...otherProps})=>{
  return(
    <Dialog
      title={`Crear ${config.name}`}
      cancelLabel="Cancelar"
      submitLabel="Crear"
      formProps={{resetOnUnmount:true}}
      onSubmit={(form,close)=>{
        apiCreate(config.endpoint,form)
        .catch(error=>{
          console.log(error.response)
        })
        reload();
        close();
      }}/>
  )
}

export default (FormDialogButton)

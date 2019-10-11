import React from 'react'

import IconButton from '@material-ui/core/IconButton'
import EditIcon from '@material-ui/icons/Edit'
import DialogForm from '../../../components/formComponents/DialogForm.js'
import Form from './Form.js'
import {apiUpdate} from '../../../vanilla/apiInterface.js';

import config from '../config.js';


const Button = ({onClick,...otherProps})=>{
  return (
    <IconButton onClick={onClick} >
      <EditIcon color="secondary"/>
    </IconButton>
  )
}

const Dialog = DialogForm('crear-frase')(Button,Form)

const FormDialogButton = ({onUpdated,data,...otherProps})=>{
  return(
    <Dialog
      title={`Editar ${config.name} con id ${data&&data._id}`}
      cancelLabel="Cancelar"
      submitLabel="Editar"
      formProps={{
        resetOnUnmount:true,
        ...data
      }}
      onSubmit={(form,close)=>{
        const updatedModel = {
          ...data,
          ...form
        }
        apiUpdate(config.endpoint,data._id,updatedModel)
        .then(resp=>{
          if (onUpdated){
            onUpdated()
          }
          close();
        })
      }}/>
  )
}


export default (FormDialogButton)

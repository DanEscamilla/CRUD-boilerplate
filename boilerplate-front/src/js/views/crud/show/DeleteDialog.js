import React from 'react'

import { withRouter } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import ConfirmDialog from '../../../components/ConfirmDialog.js'
import {apiDelete} from '../../../vanilla/apiInterface.js';

import config from '../config.js';


const Button = ({onClick,...otherProps})=>{
  return (
    <IconButton  onClick={onClick} >
      <DeleteIcon color="secondary"/>
    </IconButton>
  )
}

const Dialog = ConfirmDialog(Button)

const DeleteDialogButton = ({history,data,...otherProps})=>{
  return(
    <Dialog
      title={`Seguro que deseas borrar el ${config.name} con id ${data._id}?`}
      cancelLabel="Cancelar"
      confirmLabel="Aceptar"
      onConfirm={(close)=>{
        apiDelete(config.endpoint,data._id);
        history.push("/")
      }}/>
  )
}

export default withRouter(DeleteDialogButton)

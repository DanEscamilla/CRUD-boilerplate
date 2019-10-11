import React from 'react';
import PropTypes from 'prop-types';

import {compose} from 'recompose'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';
import SubmitButton from './SubmitButton.js'
import withSubmit from '../forms/withSubmit.js'
import Form from './Form.js'
import classnames from 'classnames'

const styles = {
  root: {
    width:'800px',
    maxHeight:'80vh'
  },
  content:{
    maxHeight:'calc(100vh - (200px));'
  }
};


const DialogForm = (formId)=>(ButtonComponent,FormComponent)=>{

  const FormHOC = Form(formId)(FormComponent)
  const ConnectedSubmit = withSubmit(formId)(SubmitButton)

  class DialogFormHOC extends React.Component{

    constructor(props){
      super(props)

      this.state = {
        open: false,
      };

      this._handleClickOpen = this._handleClickOpen.bind(this)
      this._handleClose = this._handleClose.bind(this)
      this._handleSubmit = this._handleSubmit.bind(this)
    }

    _handleClickOpen(){
      this.setState({
        open: true,
      });
    };

    _handleClose(){
      this.setState({ open: false });
    };

    _handleSubmit(form){
      this.props.onSubmit(form,this._handleClose);
    }

    render(){

      const {children,onSubmit,title,classes,cancelLabel,paperProps,
            submitLabel,formProps,...passProps} = this.props;

      paperProps.className= classnames(classes.root,paperProps.className)

      let submitButton = (
        <ConnectedSubmit variant="contained" color="primary">
          {submitLabel||'Enviar'}
        </ConnectedSubmit>
      )


      return(
        <div>
          <ButtonComponent onClick={this._handleClickOpen}/>
          <Dialog
            {...passProps}
            open={this.state.open}
            onBackdropClick={this._handleClose}
            onEscapeKeyDown={this._handleClose}
            PaperProps={paperProps}>
            <DialogTitle >{title||'Title'}</DialogTitle>
            <DialogContent className={classes.content}>
              <FormHOC
                {...formProps}
                onSubmit={this._handleSubmit}/>
            </DialogContent>
            <DialogActions>
              <Button onClick={this._handleClose} color="default">
                {cancelLabel||'Cancel'}
              </Button>
              {submitButton}
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }

  DialogFormHOC.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    paperProps: PropTypes.object,
    formProps: PropTypes.object,
    title: PropTypes.string,
    cancelLabel: PropTypes.string,
    submitLabel: PropTypes.string
  }
  DialogFormHOC.defaultProps = {
    paperProps:{},
    formProps:{}
  }

  const enhance = compose(
    withStyles(styles)
  )

  return enhance(DialogFormHOC)
}

export default DialogForm;

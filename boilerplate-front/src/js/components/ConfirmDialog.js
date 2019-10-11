import React from 'react';
import PropTypes from 'prop-types';

import {compose} from 'recompose'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import { withStyles } from '@material-ui/core/styles';
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


const ConfirmDialog = (ButtonComponent)=>{

  class ConfirmDialogHOC extends React.Component{

    constructor(props){
      super(props)

      this.state = {
        open: false,
      };

      this._handleClickOpen = this._handleClickOpen.bind(this)
      this._handleClose = this._handleClose.bind(this)
      this._handleConfirm = this._handleConfirm.bind(this)
    }

    _handleClickOpen(){
      this.setState({
        open: true,
      });
    };

    _handleClose(){
      this.setState({ open: false });
    };

    _handleConfirm(){
      this.props.onConfirm(this._handleClose);
    }

    render(){

      const {children,onConfirm,title,classes,cancelLabel,paperProps,
            confirmLabel,...passProps} = this.props;

      paperProps.className= classnames(classes.root,paperProps.className)

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
            <DialogActions>
              <Button onClick={this._handleClose} color="default">
                {cancelLabel||'Cancel'}
              </Button>
              <Button onClick={this._handleConfirm} variant="contained" color="primary">
                {confirmLabel||'Accept'}
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      );
    }
  }

  ConfirmDialogHOC.propTypes = {
    onConfirm: PropTypes.func.isRequired,
    paperProps: PropTypes.object,
    title: PropTypes.string,
    cancelLabel: PropTypes.string,
    confirmLabel: PropTypes.string
  }
  ConfirmDialogHOC.defaultProps = {
    paperProps:{},
  }

  const enhance = compose(
    withStyles(styles)
  )

  return enhance(ConfirmDialogHOC)
}

export default ConfirmDialog;

import React from 'react'
import PropTypes from 'prop-types'
import {compose,withState,withHandlers} from 'recompose'
import classNames from 'classnames'

import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Fade from '@material-ui/core/Fade'

const styles = theme => {
  return ({
    buttonContainer:{
      display:"flex",
      width:"100%",
      justifyContent:"center",
      height:'10px'
    },
    betweenButtons:{
      marginTop:"-15px",
      zIndex:"10"
    },
  })
};

const FormItem = (props)=>{
  const {classes,active,onClick,handleMouseEnter,
    handleMouseExit,state,...otherProps} = props

  const buttonClasses = {}
  buttonClasses[classes.betweenButtons] = !active?true:false;

  const button=(
    <Fade in={state.active||active}>
      <Fab className={classNames(buttonClasses)} size="small" color="secondary"
        onClick={onClick}
        onFocus={handleMouseEnter}
        onBlur={handleMouseExit}>
        <AddIcon/>
      </Fab>
    </Fade>
  )
  const triger={}

  return (
    <div className={classes.buttonContainer}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseExit}>
      {button}
    </div>
  )
}

FormItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool,
}
FormItem.defaultProps = {
  active:false
}

const state = withState('state','setState',{active:false})

const handlers = withHandlers({
  handleMouseEnter: props => () => {
    props.setState({active:true})
  },
  handleMouseExit: props => () => {
    props.setState({active:false})
  },
})

const enhance = compose (
  state,
  handlers,
  withStyles(styles)
);

export default enhance(FormItem);

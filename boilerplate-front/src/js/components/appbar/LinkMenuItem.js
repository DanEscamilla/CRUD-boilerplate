import React from 'react'
import PropTypes from 'prop-types'
import {compose} from 'recompose'
import {NavLink} from 'react-router-dom'

import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'

const styles = theme => {
  return ({
    active: {
      backgroundColor: theme.palette.secondary.dark,
      '&:focus': {
        backgroundColor: theme.palette.secondary.dark,
      }
    },
    icon:{
      marginRight:8
    },
  })
};

const LinkComponent = (props)=>(<NavLink {...props}/>);

const LinkMenuItem = (props)=>{
  const {classes,CustomLinkComponent,...otherProps} = props;
  if (CustomLinkComponent){
    return (
      <MenuItem>
        <CustomLinkComponent {...otherProps}/>
      </MenuItem>
    )
  } else {
    return (
      <MenuItem
        {...otherProps}
        component={LinkComponent}
        activeClassName={`${classes.active} visited-link`}/>
    )
  }
}

LinkMenuItem.propTypes = {
  to: PropTypes.string.isRequired,
};

const enhance = compose (
  withStyles(styles)
);

export default enhance(LinkMenuItem);

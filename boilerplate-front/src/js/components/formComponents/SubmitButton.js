import React from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'

const SubmitButton = ({formSubmit,...otherProps})=>{
  return (
    <Button
      type="submit"
      color="secondary"
      variant="contained"
      {...otherProps}
      onClick={formSubmit}/>
  );
}
SubmitButton.propTypes = {
  formSubmit: PropTypes.func.isRequired
}
export default SubmitButton

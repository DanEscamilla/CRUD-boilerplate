import React from 'react'
import PropTypes from 'prop-types'

class EditableText extends React.Component{

  constructor(props){
    super(props)

    this.state={
      value:props.initialValue,
      editing:false
    }
    this.enableEditing = this.enableEditing.bind(this)
    this.exitEditing = this.exitEditing.bind(this)
    this.handleValueChange = this.handleValueChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  enableEditing(){
    this.state.editing = true
    this.setState(this.state)
  }

  exitEditing(){
    if (this.props.onFinishEditing){
      this.props.onFinishEditing(this.state.value)
    }
    this.state.editing=false
    this.setState(this.state)
  }

  handleKeyPress(e){
    if (e.key == 'Enter'){
      this.exitEditing()
    }
  }

  handleValueChange(e){
    console.log(e.target);
    if (e.target.value.length == 0){return}
    this.state.value = e.target.value
    this.setState(this.state);
  }

  render(){
    const {TextComponent,InputComponent,textProps,inputProps} = this.props

    if (this.state.editing){
      return (<InputComponent  {...inputProps}
        autoFocus
        labelWidth={0}
        onBlur={this.exitEditing}
        onKeyPress={this.handleKeyPress}
        onChange={this.handleValueChange}
        value={this.state.value}/>)
    }
    return(
      <TextComponent {...textProps} onDoubleClick={this.enableEditing}>{this.state.value}</TextComponent>
    )
  }
}

EditableText.propTypes = {
  initialValue:PropTypes.string,
  TextComponent:PropTypes.func.isRequired,
  InputComponent:PropTypes.func.isRequired,
  textProps:PropTypes.object,
  inputProps:PropTypes.object,
  onFinishEditing: PropTypes.func,
}

EditableText.defaultProps = {
  initialValue:""
}

export default EditableText

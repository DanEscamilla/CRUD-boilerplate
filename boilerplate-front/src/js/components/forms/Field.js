import generateValidationFn from './generateValidationFn';

class Field {

  constructor(id){
    this.id = id;
    this.changeListeners = {};
    this.state = {}
  }

  updateOptions(options){
    this.validationFn = generateValidationFn(options)||(()=>(null));
    this.defaultValue = (options.defaultValue===undefined)
      ?''
      :options.defaultValue;
    this.options = options;
    // console.log(this.initialState());
    this.setState(this.initialState());
  }

  initialState(){
    return {
      value:JSON.parse(JSON.stringify(this.defaultValue)),
      error: null
    }
  }

  addListener(listener){
    const index = Date.now()
    this.changeListeners[index]=(listener);
    return index;
  }

  removeListener(index){
    delete this.changeListeners[index];
  }

  setState({value,error}={}){
    if (this.state.error&&this.options.liveValidation){
      error = this.validationFn(value);
    }

    this.state = {
      value: value,
      error: error,
    }

    for (var key in this.changeListeners) {
      this.changeListeners[key](this.state)
    }
  }

  getValues(){
    return this.state.value;
  }

  validate(){
    let error = this.validationFn(this.state.value);

    this.setState({
      value:this.state.value,
      error:error
    })

    return error;
  }

  reset(){
    this.setState(this.initialState())
  }

}
export default Field;

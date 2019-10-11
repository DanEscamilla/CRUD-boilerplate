import Field from './Field';

class Form {

  constructor(id){
    this.id = id;
    this.fields = [];
    this.submitListeners = {};
    this.changeListeners = {};
    this.submit = this.submit.bind(this);
  }

  addSubmitListener(listener){
    const id = Date.now();
    this.submitListeners[id] = listener;
    return id;
  }

  removeSubmitListener(id){
    delete this.submitListeners[id]
  }

  removeChangeListener(id){
    delete this.changeListeners[id]
  }

  addChangeListener(listener){
    const id = Date.now();
    this.changeListeners[id] = listener;
    return id;
  }

  getValues(){
    let formValues = {}

    this.fields.forEach(field=>{
      formValues[field.id] = field.getValues();
    })

    return formValues;
  }

  createField(fieldId,options){
    this[fieldId] = new Field(fieldId,options);
    this.fields.push(this[fieldId]);

    return this[fieldId];
  }

  getField(fieldId){
    return this[fieldId];
  }

  validate(){
    let error;
    this.fields.forEach(field=>{
      error = field.validate()||error;
    })
    return !error;
  }

  submit(){
    let isValid = this.validate();
    console.log(isValid)
    if (isValid){
      for (var key in this.submitListeners) {
        this.submitListeners[key](this.getValues())
      }
    }
    return isValid;
  }

  reset(){
    this.fields.forEach(field=>{
      field.reset()
    })
  }
}
export default Form;

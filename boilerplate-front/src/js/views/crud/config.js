
// fields in model
let fields = [
	'carDoor',
	'color'
]

export default {
  endpoint:'/api/model/',
  route:'/model',
  name:'Model',
  schema:{'carDoor':'No. de Puertas'},
  showFields:fields,
  createFormFields:fields,
  updateFormFields:fields,
  listFields:fields,
}

const mongoose = require('mongoose');
const env       = process.env.NODE_ENV || 'development';
const config = require('./config.json')[env];

module.exports = ()=>{
  const connectionString = `mongodb://${config.host}:${config.port}/${config.db}`;
  console.log(connectionString);
  return mongoose.connect(connectionString, {useNewUrlParser: true});
}

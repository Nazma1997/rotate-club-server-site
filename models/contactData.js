const {Schema, model} = require('mongoose');

const contactDataSchema = new Schema({
  image: String,
  description: String,
  tel: String,
  email: String,
  officeAddress: String,

     
})

const  ContactData = model('ContactData', contactDataSchema);

module.exports = ContactData;

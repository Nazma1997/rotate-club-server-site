const {Schema, model} = require('mongoose');

const causesDataSchema = new Schema({
  image: String,
  category: String,
  title: String,
  shortDescription: String,
  description: String,
  raised: String,
  goal: String
     
})

const CausesData = model('CausesData', causesDataSchema);

module.exports = CausesData;

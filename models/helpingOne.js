const {Schema, model} = require('mongoose');

const helpingDataSchema = new Schema({
  title: String,
  description: String,
  point: String,
  bgImage: String
})

const  HelpingData = model('HelpingData', helpingDataSchema);

module.exports = HelpingData;
